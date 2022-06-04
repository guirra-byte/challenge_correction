import { IChallengeRepository, IFindChallengeRequestProps } from "../../IChallengeRepository";
import { prisma } from "../../../Prisma/Client/Client";
import { Challenge } from '../../../model/class/challenge';

export class ChallengeRepositoryInMemory implements IChallengeRepository {

  private repository: Challenge[]

  constructor() {

    this.repository = []
  }

  private static INSTANCE: ChallengeRepositoryInMemory;

  public static getInstance(): ChallengeRepositoryInMemory {

    if (!ChallengeRepositoryInMemory.INSTANCE) {

      ChallengeRepositoryInMemory
        .INSTANCE = new ChallengeRepositoryInMemory();
    }

    return ChallengeRepositoryInMemory
      .INSTANCE;
  }

  async create(title: string, instructionsUrl: string): Promise<void> {

    const challengeProps = {

      title: title,
      instructionsUrl: instructionsUrl
    }

    const createChallengeProps = Challenge
      .create(challengeProps);

    await this
      .repository
      .push(createChallengeProps);
  }

  async findOne(title: string): Promise<IFindChallengeRequestProps | undefined> {

    const findOneChallenge = await this
      .repository
      .find((challenge) => title === challenge.props.title);

    if (findOneChallenge === undefined) {

      const requestFindOneChallengeUndefined = undefined;
      return requestFindOneChallengeUndefined;
    }

    const findOneChallengeRequestProps: IFindChallengeRequestProps = {

      props: {

        title: findOneChallenge.props.title,
        instructionsUrl: findOneChallenge.props.instructionsUrl
      },
      id: findOneChallenge.id
    }

    return findOneChallengeRequestProps;
  }

  async findAll(): Promise<IFindChallengeRequestProps[]> {

    const challenges: IFindChallengeRequestProps[] = []

    const findAllChallenges = await this
      .repository;

    findAllChallenges.forEach(async (challenge) => {

      const challengeProps: IFindChallengeRequestProps = {

        props: {

          title: challenge.props.title,
          instructionsUrl: challenge.props.instructionsUrl
        },
        id: challenge.id
      }

      await challenges
        .push(challengeProps);

    });

    return challenges;

  }

  async findById(sub: string): Promise<IFindChallengeRequestProps | undefined> {

    const findChallenge = await this
      .repository
      .find((challenge) => sub === challenge.id);

    if (findChallenge === undefined) {

      const findChallengeUndefinedRequest = undefined;
      return findChallengeUndefinedRequest;
    }

    const challengeProps: IFindChallengeRequestProps = {

      props: {

        title: findChallenge.props.title,
        instructionsUrl: findChallenge.props.instructionsUrl
      },
      id: findChallenge.id
    }

    return challengeProps;
  }
}