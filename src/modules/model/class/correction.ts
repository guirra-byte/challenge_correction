import { Entity } from "../Entity";
import { AppError } from '../../shared/infra/http/Errors/AppError';

type CorrectionProps = {

  submission_id: string
  created_at?: Date
  grade: number
}

export class Correction extends Entity<CorrectionProps>{

  private constructor(props: CorrectionProps, id?: string) {

    super(props, id)
  }

  static create(props: CorrectionProps, id?: string) {

    const { grade } = props;

    if (grade < 0 || grade > 10) {

      throw new AppError("Grade are incorrect!");
    }

    const createCorrection = new Correction(props, id);
    return createCorrection;
  }
}

//Segregar a responsabilidade de Submeter um desafio a um Student para outra class;
//Visando respeitar o SRP (Princípio da Responsabildade Única);