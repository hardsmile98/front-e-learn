/* eslint-disable import/prefer-default-export */

function shuffle(array: Array<Object>): Array<Object> {
  return array.sort(() => Math.random() - 0.5);
}

function debounce(func: any, timeout = 300) {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export {
  shuffle,
  debounce,
};
