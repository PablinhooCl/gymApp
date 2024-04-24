/**
 * @swagger
 * /user/post-excersice:
 *   post:
 *     summary: Crear un nuevo ejercicio pendiente de aprobación.
 *     description: Crea un nuevo ejercicio en la base de datos con estado pendiente de aprobación.
 *     tags:
 *       - Exercises
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               excercise:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 *                   muscle:
 *                     type: string
 *                   example:
 *                     type: string
 *                   description:
 *                     type: string
 *             required:
 *               - name
 *               - type
 *               - muscle
 *               - example
 *               - description
 *     responses:
 *       '200':
 *         description: Ejercicio creado, aprobación pendiente.
 *       '400':
 *         description: Error al crear el ejercicio.
 */

/**
 * @swagger
 * /admin/aprove-excersice:
 *   put:
*     summary: Aprobar un ejercicio pendiente.
 *     description: Aprueba un ejercicio pendiente de la base de datos.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               excersiceId:
 *                 type: string
 *             required:
 *               - excersiceId
 *     responses:
 *       '200':
 *         description: Ejercicio aprobado exitosamente.
 *       '400':
 *         description: Error al aprobar el ejercicio.
 *       '404':
 *         description: Ejercicio pendiente no encontrado.
 *       '500':
 *         description: Debes tener los permisos correspondientes para aprobar los ejercicios.
 */

/**
 * @swagger
 * /user/post-excersice:
 *   post:
 *     summary: Agregar un comentario a un ejercicio.
 *     description: Agrega un comentario a un ejercicio específico en la base de datos.
 *     tags:
 *       - Exercises
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
 *                   excericeId:
 *                     type: string
 *                   commentInfo:
 *                     type: string
 *             required:
 *               - formData
 *               - excericeId
 *               - commentInfo
 *     responses:
 *       '200':
 *         description: Comentario agregado correctamente.
 *       '400':
 *         description: Error en los datos enviados.
 *       '500':
 *         description: Error al agregar el comentario.
 */
