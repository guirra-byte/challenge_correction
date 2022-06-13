import { Correction } from "@prisma/client"


export interface ICorrectionRequestProps {

  props: {

    submission_id: string,
    grade: number,
    created_at: Date
  }

}


export interface ICorrectionRepository {

  create(submission_id: string, grade: number): Promise<any>
  findOneCorrection(correction_id: string): Promise<ICorrectionRequestProps | undefined>
  findAllCorrections(): Promise<Correction[]>
}