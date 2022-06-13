import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { tokenPass } from '../../../../../../Services/useCases/Student/Token/Auth/CreateStudentAuthTokenUseCase';
import { IStudentRepository } from '../../../../../../Repository/IStudentRepository';
import { AppError } from '../../../Errors/AppError';

export interface ITokenPayloadRequestProps {

  sub: string
  name: string
  email: string
}

export const VerifyStudentAuthTokenUseCase = async (request: Request, response: Response, next: NextFunction) => {

  let repository: IStudentRepository;

  const bearerToken = request
    .headers
    .authorization;

  if (bearerToken === undefined) {

    throw new AppError("Token is missing!")
  }

  const splitBearerToken = bearerToken.split(" ");
  const token = splitBearerToken[1];

  try {

    const verifyToken = verify(token, tokenPass) as ITokenPayloadRequestProps;

    const { sub } = verifyToken;

    const student = await repository
      .findById(sub);

    if (!student) {

      throw new AppError("This student does exists!");
    }

    request.student = {

      student_id: student.id
    }

    next();
  }
  catch {

    throw new AppError("Token is invalid!")
  }

}