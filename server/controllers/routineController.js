const asyncHandler = require('express-async-handler');

const { passport, generateToken, authenticateToken } = require('../configuration/passport');

const User = require('../model/userModel');
const Routine = require('../model/routineModel');

exports.createRoutine = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const {
      distribution, description, privacy, createdBy, days
    } = req.body.formData;
    const routine = new Routine({
      distribution,
      description,
      privacy,
      createdBy,
      days
    });
    try {
      await routine.save();
      return res.status(200).send('Rutina creada exitosamente');
    }
    catch (error) {
      return res.status(400).send('Error al crear la rutina');
    }
  })
];

exports.updateRoutine = [
  authenticateToken,
  asyncHandler(async (req, res) => {
    const userInfo = req.user.prop;
    const {
      routineId, distribution, description, privacy, days
    } = req.body;
    const routine = await Routine.findById(routineId);

    if (userInfo.username !== routine.createdBy) {
      return res.status(400).send('Solo el creador puede hacer cambios, puedes copiar la rutina y hacer los cambios deseados a esa.');
    }

    try {
      const updatedRoutine = await Routine.findByIdAndUpdate(
        routineId,
        {
          $set: {
            distribution, description, privacy, days
          }
        },
        { new: true }
      );

      if (!updatedRoutine) {
        return res.status(404).send('Rutina no encontrada');
      }

      return res.status(200).send({ message: 'Rutina actualizada correctamnete', updatedRoutine });
    }
    catch (error) {
      return res.status(400).send('Error al actualizar la rutina');
    }
  })
];
