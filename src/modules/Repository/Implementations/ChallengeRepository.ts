import { Challenge } from "../../model/class/challenge";
import { prisma } from "../../shared/infra/Prisma/Client/Client";
import { IChallengeRepository, IFindChallengeRequestProps } from "../IChallengeRepository";

export class ChallengeRepository implements IChallengeRepository {

  constructor(private repository: typeof prisma) { }

  private static INSTANCE: ChallengeRepository;

  public static getInstance(): ChallengeRepository {

    if (!ChallengeRepository.INSTANCE) {

      ChallengeRepository.INSTANCE = new ChallengeRepository(prisma);
    }

    return ChallengeRepository
      .INSTANCE;
  }

  async create(title: string, instructionsUrl: string): Promise<void> {

    const challengeProps = {

      title: title,
      instructionsUrl: instructionsUrl
    }

    const newChallenge = Challenge
      .create({ title, instructionsUrl });

    const { props, id } = newChallenge;

    const createChallenge = await this
      .repository
      .challenge
      .create({
        data: {

          title: props.title,
          instructionsUrl: props.instructionsUrl

        }
      });
  }

  async findOne(title: string): Promise<IFindChallengeRequestProps> {

    const findOneChallenge = await this
      .repository
      .challenge
      .findUnique(
        {
          where: { title: title },
          select: {

            title: true,
            instructionsUrl: true,
            id: true

          }
        });

    const findOneChallengeRequestProps: IFindChallengeRequestProps = {

      props: {

        title: findOneChallenge.title,
        instructionsUrl: findOneChallenge.instructionsUrl
      },
      id: findOneChallenge.id
    }

    return findOneChallengeRequestProps;
  }

  async findAll(): Promise<IFindChallengeRequestProps[]> {

    const findAllChallenges = await this.repository.challenge.findMany({
      select: {

        title: true,
        instructionsUrl: true,
        id: true

      }
    });

    const challenges: IFindChallengeRequestProps[] = [];

    findAllChallenges.forEach(async (challenge) => {

      const challengeRequestProps: IFindChallengeRequestProps = {

        props: {

          title: challenge.title,
          instructionsUrl: challenge.instructionsUrl
        },
        id: challenge.id
      }

      await challenges
        .push(challengeRequestProps);
    });

    return challenges;
  }

  async findById(sub: string): Promise<IFindChallengeRequestProps | undefined> {

    const findChallengeById = await this
      .repository
      .challenge
      .findUnique({ where: { id: sub } });

    const findChallengeRequest: IFindChallengeRequestProps = {

      props: {

        title: findChallengeById.title,
        instructionsUrl: findChallengeById.instructionsUrl
      },
      id: findChallengeById.id
    }

    return findChallengeRequest;
  }
}