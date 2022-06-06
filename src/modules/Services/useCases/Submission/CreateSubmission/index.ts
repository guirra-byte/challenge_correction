import { SubmissionRepository } from "../../../../Repository/Implementations/SubmissionRepository";
import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { ChallengeRepository } from "../../../../Repository/Implementations/ChallengeRepository";

import { CreateSubmissionUseCase } from "./CreateSubmissionUseCase";
import { CreateSubmissionController } from "./CreateSubmissionController";

const submissionRepository = SubmissionRepository.getInstance();
const studentRepository = StudentRepository.getInstance();
const challengeRepository = ChallengeRepository.getInstance();

const createSubmissionUseCase = new CreateSubmissionUseCase(submissionRepository, studentRepository, challengeRepository);

const createSubmissionController = new CreateSubmissionController(createSubmissionUseCase);

export { createSubmissionController }