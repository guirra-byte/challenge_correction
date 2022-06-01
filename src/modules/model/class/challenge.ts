import { Entity } from "../Entity";

type ChallengeProps = {

  title: string,
  instructionsUrl: string
}

export class Challenge extends Entity<ChallengeProps>{

  private constructor(props: ChallengeProps, id?: string) {

    super(props, id);
  }

  static create(props: ChallengeProps, id?: string) {

    const newChallenge = new Challenge(props, id);
    return newChallenge;

  }
}