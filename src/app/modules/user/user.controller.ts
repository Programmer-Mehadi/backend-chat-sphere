import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.services';

const createData = catchAsync(async (req, res) => {
  const data = { ...req.body, role: 'user' };
  const result = await userService.createToDB(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const userController = {
  createData,
};
