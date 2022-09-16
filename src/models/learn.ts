interface IWord {
  id: number | string,
  word: string,
  translate: string,
  type: string,
}

interface IWordRepeat extends IWord {
  words: Array<string>,
  answer: number,
}

interface ILearnResponse {
  moneyForWord: number,
  words: Array<IWord>
}

export type {
  IWord,
  IWordRepeat,
  ILearnResponse,
};
