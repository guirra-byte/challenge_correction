import { Request, Response } from 'express';
import { CreateChallengeUseCase } from './CreateChallengeUseCase';

export class CreateChallengeController {

  constructor(private createChallengeUseCase: CreateChallengeUseCase) { }

  async handle(request: Request, response: Response) {

    const { title, instructionsUrl } = request
      .body;

    try {

      const createChallenge = await this
        .createChallengeUseCase
        .execute(title, instructionsUrl);

      return response
        .status(201)
        .send();
    }

    catch (exception) {

      return response
        .status(400)
        .send(exception);
    }
  }
}