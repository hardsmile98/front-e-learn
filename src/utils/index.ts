/* eslint-disable import/prefer-default-export */

function shuffle(array: Array<Object>): Array<Object> {
  return array.sort(() => Math.random() - 0.5);
}

export {
  shuffle,
};
