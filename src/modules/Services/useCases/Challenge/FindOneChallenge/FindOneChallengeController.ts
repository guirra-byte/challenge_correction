import { Request, Response } from 'express';
import { FindOneChallengeUseCase } from './FindOneChallengeUseCase';

export class FindOneChallengeController {

  constructor(private findOneChallengeUseCase: FindOneChallengeUseCase) { }

  async handle(request: Request, response: Response) {

    const { title } = request
      .body;

    try {

      const findOneChallenge = await this
        .findOneChallengeUseCase
        .execute(title);

      return response
        .status(200)
        .json(findOneChallenge);
    }

    catch (exception) {

      return response
        .status(400)
        .json({ message: { exception } });
    }
  }
}