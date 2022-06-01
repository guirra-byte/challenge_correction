import { Request, Response } from 'express';
import { FindOneStudentUseCase } from './FindOneStudentUseCase';

export class FindOneStudentController {

  constructor(private findOneStudentUseCase: FindOneStudentUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { email } = request.body;

    try {

      const findStudent = await this
        .findOneStudentUseCase
        .execute(email);

      return response
        .status(200)
        .json({ findStudent });
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }
  }
}