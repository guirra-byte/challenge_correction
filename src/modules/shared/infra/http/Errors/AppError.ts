
export class AppError {

  statusCode: number
  msg: string

  constructor(msg: string, statusCode = 400) {

    this.msg = msg;
    this.statusCode = statusCode
  }
}