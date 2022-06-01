import { IFindStudentRequestProps, IStudentRepository } from "../../IStudentRepository";
import { Student } from '../../../model/class/student';
import { Challenge, Student as StudentClient } from '@prisma/client';

export class StudentRepositoryInMemory implements IStudentRepository {

  private repository: Student[]

  constructor() {

    this.repository = [];
  }

  async create(name: string, email: string, password: string, challenges: Challenge[]): Promise<void> {

    const student = {

      name: name,
      email: email,
      password: password,
      challenges: challenges
    }

    const createStudent = Student
      .create(student);

    await this
      .repository
      .push(createStudent);
  }

  async findOne(email: string): Promise<IFindStudentRequestProps | undefined> {

    const findOneStudent = await this
      .repository
      .find((student) => email === student.props.email);

    if (findOneStudent === undefined) {

      const requestUndefined = undefined;
      return requestUndefined;
    }

    const studentRequestProps: IFindStudentRequestProps = {

      name: findOneStudent.props.name,
      email: findOneStudent.props.email,
      id: findOneStudent.id,
    }

    return studentRequestProps;
  }

  async findAll(): Promise<IFindStudentRequestProps[]> {

    let students: IFindStudentRequestProps[] = []

    const findAll = this
      .repository
      .forEach(async (student) => {

        const { name, email, challenges } = student
          .props;

        const studentRequestProps: IFindStudentRequestProps = {

          name: name,
          email: email,
          challenge: challenges,
          id: student.id
        }

        await students
          .push(studentRequestProps);

        return students;
      });

    await findAll;
    return students;
  }

  async removeStudent(email: string): Promise<void> {

    const findStudentIndex = await this
      .repository
      .findIndex((student) => email === student.props.email);

    const removeStudent = await this
      .repository
      .splice(findStudentIndex, 1);
  }

  async findById(sub: string): Promise<IFindStudentRequestProps> {

    const findStudentById = await this
      .repository
      .find((student) => sub === student.id);

    const { props, id } = findStudentById;

    const findStudentRequestProps: IFindStudentRequestProps = {

      name: props.name,
      email: props.email,
      challenge: props.challenges,
      id: id,
      password: props.password
    }

    return findStudentRequestProps;
  }
}
