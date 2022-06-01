import { Entity } from "../Entity";

type SubmissionProps = {

  student_id: string
  challenge_id: string
  created_at?: Date

}

export class Submission extends Entity<SubmissionProps>{

  private constructor(props: SubmissionProps, id?: string) {

    super(props, id);
  }

  static create(props: SubmissionProps, id?: string) {

    const { created_at } = props;
    created_at ?? new Date();
    props.created_at = created_at;

    const createSubmission = new Submission(props, id);
    return createSubmission;
  }
}