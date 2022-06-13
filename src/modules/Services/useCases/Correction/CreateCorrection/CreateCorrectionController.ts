import { Request, Response } from 'express';
import { CreateCorrectionUseCase } from './CreateCorrectionUseCase';

export class CreateCorrectionController {

  constructor(private createCorrectionUseCase: CreateCorrectionUseCase) { }

  async handle(request: Request, response: Response) {

    const { submission_id, grade } = request.body;

    try {

      const createCorrection = await this
        .createCorrectionUseCase
        .execute(submission_id, grade);

      return response
        .status(201)
        .send();
    }
    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }

  }
}