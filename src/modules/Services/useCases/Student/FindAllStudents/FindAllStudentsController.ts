import { Request, Response } from 'express';
import { FindAllStudentUseCase } from './FindAllStudentUseCase';

export class FindAllStudentController {

  constructor(private findAllStudentUseCase: FindAllStudentUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    try {

      const findAll = await this
        .findAllStudentUseCase
        .execute();

      return response
        .status(200)
        .json({ findAll });
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }
  }
}