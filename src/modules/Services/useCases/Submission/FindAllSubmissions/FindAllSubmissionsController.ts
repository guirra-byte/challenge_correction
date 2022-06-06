import { Request, Response } from 'express';
import { FindAllSubmissionsUseCase } from './FindAllSubmissionsUseCase';

export class FindAllSubmissionsController {

  constructor(private findAllSubmissionsUseCase: FindAllSubmissionsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    try {

      const findAllSubmissions = await this
        .findAllSubmissionsUseCase
        .execute();

      return response
        .status(200)
        .json({ findAllSubmissions });
    }

    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }
  }
}