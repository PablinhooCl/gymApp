/**
 * @swagger
 * /user/create-routine:
 *   post:
 *     summary: Create a new routine
 *     description: Create a new routine with the provided details
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
 *                   distribution:
 *                     type: string
 *                     description: The distribution of the routine (e.g., full body, split)
 *                   description:
 *                     type: string
 *                     description: The description of the routine
 *                   privacy:
 *                     type: string
 *                     description: The privacy setting of the routine (e.g., public, private)
 *                   createdBy:
 *                     type: string
 *                     format: uuid
 *                     description: The ID of the user who created the routine
 *                   days:
 *                     type: object
 *                     description: Object representing each day of the week with its exercises
 *     responses:
 *       200:
 *         description: Routine created successfully
 *       400:
 *         description: Error creating routine
 */

/**
 * @swagger
 * /user/update-routine:
 *   put:
 *     summary: Update a routine
 *     description: Update an existing routine with the provided details
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routineId:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the routine to update
 *               distribution:
 *                 type: string
 *                 description: The distribution of the routine (e.g., full body, split)
 *               description:
 *                 type: string
 *                 description: The description of the routine
 *               privacy:
 *                 type: string
 *                 description: The privacy setting of the routine (e.g., public, private)
 *               days:
 *                 type: object
 *                 description: Object representing each day of the week with its exercises
 *     responses:
 *       200:
 *         description: Routine updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the update operation
 *                 updatedRoutine:
 *                   $ref: '#/components/schemas/Routine'
 *       400:
 *         description: Error updating routine
 *       404:
 *         description: Routine not found
 *       401:
 *         description: Unauthorized - Only the creator can update the routine
 */
