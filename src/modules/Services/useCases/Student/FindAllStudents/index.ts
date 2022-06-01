import { StudentRepository } from "../../../../Repository/Implementations/StudentRepository";
import { FindAllStudentUseCase } from "./FindAllStudentUseCase";
import { FindAllStudentController } from "./FindAllStudentsController";

const studentRepository = StudentRepository.getInstance();

const findAllStudentUseCase = new FindAllStudentUseCase(studentRepository);

const findAllStudentController = new FindAllStudentController(findAllStudentUseCase);

export { findAllStudentController }