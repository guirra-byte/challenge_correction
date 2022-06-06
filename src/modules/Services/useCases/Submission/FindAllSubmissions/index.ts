import { SubmissionRepository } from "../../../../Repository/Implementations/SubmissionRepository";
import { FindAllSubmissionsUseCase } from "./FindAllSubmissionsUseCase";
import { FindAllSubmissionsController } from "./FindAllSubmissionsController";

const submissionRepository = SubmissionRepository
  .getInstance();

const findAllSubmissionsUseCase = new FindAllSubmissionsUseCase(submissionRepository);

const findAllSubmissionsController = new FindAllSubmissionsController(findAllSubmissionsUseCase);

export { findAllSubmissionsController }