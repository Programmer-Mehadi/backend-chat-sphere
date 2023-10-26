import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { authService } from './auth.services';

const loginUser = catchAsync(async (req, res) => {
  const data = { ...req.body };
  const result = await authService.loginToDB(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Login successfully',
    data: result,
  });
});

export const authController = {
  loginUser,
};
