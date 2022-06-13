import { IStudentRepository } from '../IStudentRepository';
import { prisma } from '../../shared/infra/Prisma/Client/Client';
import { IFindStudentRequestProps } from '../IStudentRepository';
import { Challenge } from '@prisma/client';

export class StudentRepository implements IStudentRepository {

  private repository: typeof prisma

  constructor() {

    this.repository = prisma;
  }

  private static INSTANCE: StudentRepository;

  public static getInstance(): StudentRepository {

    if (!StudentRepository.INSTANCE) {

      StudentRepository.INSTANCE = new StudentRepository();
    }

    return StudentRepository.INSTANCE;
  }

  async create(name: string, email: string, password: string, challenges: Challenge[]): Promise<void> {


    const student = await this
      .repository
      .student
      .create({

        data: {
          name,
          email,
          password,
        }
      });
  }

  async findOne(email: string): Promise<IFindStudentRequestProps | undefined> {

    const findOneStudent = await this
      .repository
      .student
      .findUnique(
        {
          where: { email: email },
          select: {

            name: true,
            email: true,
            created_at: true,
            id: true,
            challenge: true,
          }
        });

    const requestFindOneStudent = {} as IFindStudentRequestProps

    Object
      .assign(requestFindOneStudent, {

        name: findOneStudent.name,
        email: findOneStudent.email,
        created_at: findOneStudent.created_at,
        id: findOneStudent.id,
        challenge: findOneStudent.challenge

      });

    return requestFindOneStudent;
  }

  async findAll(): Promise<IFindStudentRequestProps[]> {

    const students: IFindStudentRequestProps[] = [];

    const findAllStudents = await this
      .repository
      .student
      .findMany({
        select: {

          name: true,
          email: true,
          id: true,
          created_at: true,
          challenge: true
        }
      });

    for (let index = 0; index >= findAllStudents.length; index++) {

      const studentIndex = findAllStudents[index];

      const studentProps: IFindStudentRequestProps = {

        name: studentIndex.name,
        email: studentIndex.email,
        id: studentIndex.id,
        created_at: studentIndex.created_at,
        challenge: studentIndex.challenge

      }

      students
        .push(studentProps);
    }

    return students;
  }

  async removeStudent(email: string): Promise<void> {

    const findAndRemoveStudent = await this
      .repository
      .student
      .delete({ where: { email: email } });
  }

  async findById(sub: string): Promise<IFindStudentRequestProps> {

    const findStudentById = await this
      .repository
      .student
      .findUnique(
        {
          where: { id: sub },
          select: {

            name: true,
            email: true,
            id: true,
            created_at: true,
            challenge: true,
            password: true
          }
        });


    return findStudentById;
  }

}