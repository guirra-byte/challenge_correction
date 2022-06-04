import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";
import { FindOneChallengeUseCase } from "./FindOneChallengeUseCase";
import { FindOneChallengeController } from "./FindOneChallengeController";

const challengeRepository = ChallengeRepository.getInstance();

const findOneChallengeUseCase = new FindOneChallengeUseCase(challengeRepository);

const findOneChallengeController = new FindOneChallengeController(findOneChallengeUseCase);

export { findOneChallengeController }