import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import { IStudentRepository } from '../../../../../Repository/IStudentRepository';
import { AppError } from '../../../../../Errors/AppError';

interface ITokenRequestProps {

  token: string
  student: {

    name: string
    email: string
    id: string
    challenges?: string[]
  }
}

export const tokenPass = "1ea8cf5a5c90000dba49637b65063c57";

export class CreateStudentAuthTokenUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  async execute(email: string, password: string) {

    const verifyStudentExists = await this
      .studentRepository
      .findOne(email);

    if (!verifyStudentExists) {

      throw new AppError("Email or Password are incorrect!");
    }

    const findStudentById = await this
      .studentRepository
      .findById(verifyStudentExists.id);

    const comparePassword = await compare(password, findStudentById.password);

    if (!comparePassword) {

      throw new AppError("Email or Password are incorrect, password!");
    }

    const { id } = verifyStudentExists;

    const token = sign({}, tokenPass, {

      subject: id,
      expiresIn: "1d"
    });

    const tokenRequestProps: ITokenRequestProps = {

      token: token,
      student: {

        name: verifyStudentExists.name,
        email: verifyStudentExists.email,
        id: verifyStudentExists.id,
      }
    }

    return tokenRequestProps;

  }
}