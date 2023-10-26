import express from 'express';
import { authRouter } from '../modules/auth/auth.routes';
import { userRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    routes: userRouter,
  },
  {
    path: '/auth',
    routes: authRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
