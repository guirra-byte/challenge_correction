import { Request, Response, NextFunction } from 'express';
import { prisma } from '../Prisma/Client/Client';


export const verifyStudentAlreadyExists = async (request: Request, response: Response, next: NextFunction) => {

  const { email } = request.body;

  const verifyStudentExists = await prisma
    .student
    .findUnique(
      {
        where: { email: email },
        select: {

          name: true,
          email: true,
          id: true,
          challenge: true
        }
      });

  if (!verifyStudentExists) {

    return response
      .status(400)
      .send();
  }

  next();
}