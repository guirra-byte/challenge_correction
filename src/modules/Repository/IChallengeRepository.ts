export interface IFindChallengeRequestProps {

  props: {

    title: string,
    instructionsUrl: string
  },
  id?: string
}

export interface IChallengeRepository {

  create(title: string, instructionsUrl: string): Promise<void>
  findOne(title: string): Promise<IFindChallengeRequestProps | undefined>
  findAll(): Promise<IFindChallengeRequestProps[]>
  findById(sub: string): Promise<IFindChallengeRequestProps | undefined>

}