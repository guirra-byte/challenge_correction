import { Challenge } from '@prisma/client';

export interface IFindStudentRequestProps {

  name: string,
  email: string,
  id: string,
  challenge?: Challenge[],
  created_at?: Date,
  password?: string

}

export interface IStudentRepository {

  create(name: string, email: string, password: string, challenges: Challenge[]): Promise<void>
  findOne(email: string): Promise<IFindStudentRequestProps | undefined>
  findById(sub: string): Promise<IFindStudentRequestProps | undefined>
  findAll(): Promise<IFindStudentRequestProps[]>
  removeStudent(email: string): Promise<void>
}