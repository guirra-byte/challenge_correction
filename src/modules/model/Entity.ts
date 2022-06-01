import { v4 as uuidV4 } from 'uuid';

export class Entity<T>{

  id: string
  props: T

  constructor(props: T, id?: string) {

    this.id = id ?? uuidV4();
    this.props = props;
  }
}