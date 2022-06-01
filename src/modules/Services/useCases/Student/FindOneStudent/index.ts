import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { FindOneStudentUseCase } from "./FindOneStudentUseCase";
import { FindOneStudentController } from "./FindOneStudentController";

const studentRepository = StudentRepository.getInstance();

const findOneStudentUseCase = new FindOneStudentUseCase(studentRepository);

const findOneStudentController = new FindOneStudentController(findOneStudentUseCase);

export { findOneStudentController }