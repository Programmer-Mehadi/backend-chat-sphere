import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    code: z.string({
      required_error: 'Code is required',
    }),
    phone: z.string({
      required_error: 'Phone is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const userValidation = {
  create,
};
