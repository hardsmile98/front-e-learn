/* eslint-disable import/prefer-default-export */
interface ICourse {
  id: number | string,
  name: string,
  progress: {
    value: number,
    all: number
  }
}

export type {
  ICourse,
};
