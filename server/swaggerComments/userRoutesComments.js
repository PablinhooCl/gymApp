/**
 * @openapi
 * /new-user:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user and send a verification email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully, verification email sent
 *       400:
 *         description: Error registering new user
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Login a user with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the successful login
 *                 userToken:
 *                   type: string
 *                   description: JWT token for the authenticated user
 *                 user:
 *                   type: string
 *                   description: The username of the authenticated user
 *       401:
 *         description: Unauthorized - Incorrect username or password
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/:verificationId:
 *   put:
 *     summary: Verify user by verification ID
 *     description: Verify a user by their verification ID
 *     parameters:
 *       - in: path
 *         name: verificationId
 *         required: true
 *         schema:
 *           type: string
 *         description: The verification ID of the user
 *     responses:
 *       200:
 *         description: User verified successfully
 *       400:
 *         description: Error verifying user
 */

/**
 * @swagger
 * /user/add-data:
 *   put:
 *     summary: Add or update user information
 *     description: Add or update user information like weight, height, and years
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formData:
 *                 type: object
 *                 properties:
 *                   weight:
 *                     type: number
 *                   height:
 *                     type: number
 *                   years:
 *                     type: number
 *     responses:
 *       200:
 *         description: User information updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the operation
 *                 userUpdate:
 *                   type: object
 *                   description: The updated user object
 *       400:
 *         description: Error updating user information
 */

/**
 * @swagger
 * /user/profile-pic:
 *   put:
 *     summary: Add or update user profile image
 *     description: Add or update user profile image
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User profile image updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the operation
 *       400:
 *         description: Error updating user profile image
 */

/**
 * @swagger
 * /user/info:
 *   get:
 *     summary: Obtiene la información del usuario autenticado.
 *     description: Obtiene la información del usuario autenticado, incluyendo sus rutinas creadas.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario y sus rutinas creadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 user:
 *                   type: object
 *                   description: Información del usuario.
 *                 userRoutines:
 *                  type: object
 *                  description: Informacion de las rutinas del usuario.
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error.
 */
