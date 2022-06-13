import { IStudentRepository } from "../../../../Repository/IStudentRepository";
import { hash } from "bcryptjs";
import { AppError } from "../../../../shared/infra/http/Errors/AppError";

import { Challenge } from "@prisma/client";


export class CreateStudentUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  async execute(name: string, email: string, password: string, challenges: Challenge[]): Promise<void> {

    const hashThePassword = await hash(password, 10);

    const createStudent = await this
      .studentRepository
      .create(name, email, hashThePassword, challenges);

    return createStudent;
  }
}