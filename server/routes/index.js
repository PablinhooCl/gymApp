const express = require('express');

var router = express.Router();

const userController = require('../controllers/userController');
const routineController = require('../controllers/routineController');
const excersiceController = require('../controllers/excerciseController');
const API = require('../configuration/api');

router
  .post('/new-user', userController.userSignUp, API.sendVerification)
  .put('/user/:verificationId', API.userVerification)
  .put('/user/add-data', userController.userAddInfo)
  .post('/login', userController.userLogin)
  .put('/user/profile-pic', userController.userAddProfileImg)
  .post('/user/create-routine', routineController.createRoutine)
  .put('/user/update-routine', routineController.updateRoutine)
  .post('/user/post-excersice', excersiceController.createPendingExcercise)
  .post('/admin/aprove-excersice', excersiceController.createPendingExcercise)
  .get('/user/info', userController.userInfo)
  .put('/user/post-excersice', excersiceController.addCommentExcercise);

module.exports = router;
