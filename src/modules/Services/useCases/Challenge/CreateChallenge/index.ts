import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";
import { CreateChallengeUseCase } from "./CreateChallengeUseCase";
import { CreateChallengeController } from "./CreateChallengeController";

const challengeRepository = ChallengeRepository.getInstance();

const createChallengeUseCase = new CreateChallengeUseCase(challengeRepository);

const createChallengeController = new CreateChallengeController(createChallengeUseCase);

export { createChallengeController };