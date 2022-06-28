export interface IJob {
  id: number,
  img: string,
  name: string,
  position: string,
  countResponse: number,
  createAt: string,
  salary: string,
  employment: string,
  type: string,
}

export interface IJobDetail extends IJob {
  markdown: string,
}
