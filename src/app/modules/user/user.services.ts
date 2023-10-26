import prisma from '../../../shared/prisma';

const createToDB = async (data: any) => {
  const find = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (find) {
    throw new Error('User already exists');
  } else {
    const result = await prisma.user.create({
      data: data,
    });
    return result;
  }
};
const getAllFromDB = () => {
  return;
};
const getSingleFromDB = () => {
  return;
};
const updateToDB = () => {
  return;
};
const deleteFromDB = () => {
  return;
};

export const userService = {
  createToDB,
  getAllFromDB,
  getSingleFromDB,
  updateToDB,
  deleteFromDB,
};
