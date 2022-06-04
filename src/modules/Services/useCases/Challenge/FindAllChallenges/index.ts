import { ChallengeRepository } from '../../../../Repository/in-memory/ChallengeRepositoryInMemory/ChallengeRepositoryInMemory';
import { FindAllChallengesUseCase } from './FindAllChallengesUseCase';
import { FindAllChallengesController } from './FindAllChallengesController';

const challengeRepository = ChallengeRepository.getInstance();

const findAllChallengesUseCase = new FindAllChallengesUseCase(challengeRepository);

const findAllChallengesController = new FindAllChallengesController(findAllChallengesUseCase);

export { findAllChallengesController }