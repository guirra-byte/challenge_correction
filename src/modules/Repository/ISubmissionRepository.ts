export interface IFindSubmissionRequestProps {

  props: {

    student_id: string,
    challenge_id: string,
    created_at?: Date
  },
  id?: string
}

export interface ISubmissionRepository {

  create(student_id: string, challenge_id: string): Promise<void>
  findAll(): Promise<IFindSubmissionRequestProps[]>
}