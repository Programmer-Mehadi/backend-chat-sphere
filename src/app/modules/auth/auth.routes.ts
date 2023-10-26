import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authController } from './auth.controller';
import { authValidation } from './auth.validations';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.login),
  authController.loginUser
);

export const authRouter = router;
