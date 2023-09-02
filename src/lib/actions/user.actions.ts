import { User } from '@prisma/client';
import prisma from '../prisma';

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function createUser({
  id,
  email,
  name,
  mobile,
  enroll,
  college,
  branch,
  year,
}: User) {
  return await prisma.user.create({
    data: {
      id,
      email,
      name,
      mobile,
      enroll,
      college,
      branch,
      year,
      onboarded: true,
    },
  });
}
