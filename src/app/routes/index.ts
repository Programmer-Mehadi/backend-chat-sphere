import express from 'express';
import { userRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    routes: userRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
