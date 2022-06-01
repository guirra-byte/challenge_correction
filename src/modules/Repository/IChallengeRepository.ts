export interface IFindChallengeRequestProps {

  title: string
  instructionsUrl: string
  id?: string
}

export interface IChallengeRepository {

  create(title: string, instructionsUrl: string): Promise<void>
  findOne(title: string): Promise<IFindChallengeRequestProps | undefined>
  findAll(): Promise<IFindChallengeRequestProps[]>



}