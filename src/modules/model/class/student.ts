import { Entity } from "../Entity";
import { Challenge } from "@prisma/client";

type StudentProps = {

  name: string
  email: string
  password: string
  challenges?: Challenge[]

}

export class Student extends Entity<StudentProps>{

  constructor(props: StudentProps, id?: string) {

    super(props, id);
  }

  static create(props: StudentProps, id?: string) {

    const createStudent = new Student(props, id);
    return createStudent;
  }
}