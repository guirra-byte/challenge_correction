import { Challenge } from "../../model/class/challenge";
import { prisma } from "../../Prisma/Client/Client";
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

    return findOneChallenge;
  }

  async findAll(): Promise<IFindChallengeRequestProps[]> {

    const findAllChallenges = await this.repository.challenge.findMany({
      select: {

        title: true,
        instructionsUrl: true,
        id: true

      }
    });

    return findAllChallenges;
  }

}