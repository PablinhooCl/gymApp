const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const User = require('../model/userModel');
const {
  userSchema, routineSchema, excersiceSchema, pendingExcersiceSchema
} = require('../swaggerComments/schemaComments');

dotenv.config();

const {
  orgMail, orgPassword, webUrl
} = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  hots: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: orgMail,
    pass: orgPassword
  }
});

exports.sendVerification = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }

  const { verification } = user;

  const mailOption = {
    from: {
      name: 'Gym App cl Inc.',
      address: orgMail
    },
    to: email,
    subject: 'Verificacion de cuenta, GymApp',
    text:
        `Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico: ${webUrl}user/${verification}`
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return res.status(400).send({ message: 'Error al enviar correo de verificacion', error });
    }
    return res.status(200).send({ message: 'Cuenta creada, Correo de verificacion enviado correctamente', info });
  });
});

exports.userVerification = asyncHandler(async (req, res) => {
  const { verificationId } = req.params;

  try {
    const userValidated = await User.findOneAndUpdate(
      { verification: verificationId },
      { verified: true },
      { new: true }
    );

    return res.status(200).send('Usuario verificado correctamente');
  }
  catch (error) {
    return res.status(400).send({ message: 'Error al actualizar', error });
  }
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename(req, file, cb) {
    const userId = req.user.prop._id;
    cb(null, `${userId}${Date.now()}`);
  }
});

exports.upload = multer({ storage });

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gym App Cl',
      version: '1.0.0'
    }
  },
  components: {
    securitySchemes: {
      schemas: {
        User: userSchema,
        Routine: routineSchema,
        Excercise: excersiceSchema,
        PendingExcersice: pendingExcersiceSchema
      },
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],

  apis: ['./routes/index.js', './model/User.js', './swaggerComments/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

exports.swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(
    'Version 1 Docs are available on http://localhost:5000/api-docs'
  );
};
