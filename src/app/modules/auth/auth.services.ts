import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const loginToDB = async (data: any) => {
  const find = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });
  if (!find) {
    throw new Error('User not found');
  } else {
    const token = jwtHelpers.createToken(
      { id: find.id, name: find.name, email: find.email, role: find.role },
      config.jwt.secret as Secret,
      config.jwt.expires_in as string
    );
    return {
      token: token,
    };
  }
};

export const authService = {
  loginToDB,
};
