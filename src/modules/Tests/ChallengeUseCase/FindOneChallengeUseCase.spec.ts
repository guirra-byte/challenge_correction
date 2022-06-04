import { ChallengeRepositoryInMemory } from "../../Repository/in-memory/ChallengeRepositoryInMemory/ChallengeRepositoryInMemory";
import { FindOneChallengeUseCase } from "../../Services/useCases/Challenge/FindOneChallenge/FindOneChallengeUseCase";

let challengeRepository: ChallengeRepositoryInMemory;
let findOneChallengeUseCase: FindOneChallengeUseCase;

describe("Find Challenge", () => {

  beforeEach(async () => {

    challengeRepository = new ChallengeRepositoryInMemory();
    findOneChallengeUseCase = new FindOneChallengeUseCase(challengeRepository);
  });

  test("Should be able Find Challenge", async () => {

    const challenge = {

      title: "Challenge Title Test",
      instructionsUrl: "Challenge InstructionsUrl Test"
    }

    const { title, instructionsUrl } = challenge;

    await challengeRepository
      .create(title, instructionsUrl);

    const findChallenge = await findOneChallengeUseCase
      .execute(title);

    expect(findChallenge.props)
      .not
      .toBeUndefined();

    expect(findChallenge)
      .toHaveProperty("id");
  });


});