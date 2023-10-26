import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userController } from './user.controller';
import { userValidation } from './user.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(userValidation.create),
  userController.createData
);
// router.get('/', userController.getAllData);
// router.get('/', userController.getSingleData);
// router.put('/:id', userController.updateData);
// router.delete('/:id', userController.deleteData);

export const userRouter = router;
