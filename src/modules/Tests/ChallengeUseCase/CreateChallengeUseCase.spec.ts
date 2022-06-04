import { ChallengeRepositoryInMemory } from '../../Repository/in-memory/ChallengeRepositoryInMemory/ChallengeRepositoryInMemory';
import { CreateChallengeUseCase } from '../../Services/useCases/Challenge/CreateChallenge/CreateChallengeUseCase';

let challengeRepository: ChallengeRepositoryInMemory;
let createChallengeUseCase: CreateChallengeUseCase;

describe("Create a new Challenge!", () => {

  beforeEach(async () => {

    challengeRepository = new ChallengeRepositoryInMemory();
    createChallengeUseCase = new CreateChallengeUseCase(challengeRepository);
  });

  test("Should be create a new Challenge!", async () => {

    const challenge = {

      title: "Challenge Title Test",
      instructionsUrl: "Challenge InstructionsUrl Test"
    }

    const { title, instructionsUrl } = challenge;

    await createChallengeUseCase
      .execute(title, instructionsUrl);

    const findChallenge = await challengeRepository
      .findOne(title);

    expect(findChallenge)
      .toHaveProperty("id");
  })
});
