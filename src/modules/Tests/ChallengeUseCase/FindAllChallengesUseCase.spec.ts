import { ChallengeRepositoryInMemory } from "../../Repository/in-memory/ChallengeRepositoryInMemory/ChallengeRepositoryInMemory";
import { FindAllChallengesUseCase } from "../../Services/useCases/Challenge/FindAllChallenges/FindAllChallengesUseCase";

let challengeRepository: ChallengeRepositoryInMemory;
let findAllChallengesUseCase: FindAllChallengesUseCase;

describe("List all Challenges", () => {

  beforeEach(async () => {

    challengeRepository = new ChallengeRepositoryInMemory();
    findAllChallengesUseCase = new FindAllChallengesUseCase(challengeRepository);
  });

  test("Should be able List all Challenges", async () => {

    const challenges = {

      challenge1: {

        title: "Database Query Challenge",
        instructionsUrl: "Challenge1 InstructionsUrl Test"
      },

      challenge2: {

        title: "API Test Implementation",
        instructionsUrl: "Challenge2 Instructions Test"

      }
    }

    const { challenge1, challenge2 } = challenges;

    await challengeRepository
      .create(challenge1.title, challenge1.instructionsUrl);

    await challengeRepository
      .create(challenge2.title, challenge2.instructionsUrl);

    const findAllChallenges = await findAllChallengesUseCase
      .execute();

    const findUniqueChallenge = async (challenge: string) => {

      const findChallenge = await challengeRepository
        .findOne(challenge);

      return findChallenge;

    }

    const findChallenge1 = await findUniqueChallenge(challenges.challenge1.title);
    const findChallenge2 = await findUniqueChallenge(challenges.challenge2.title);

    expect(findAllChallenges)
      .toMatchObject([findChallenge1, findChallenge2]);


  })
});