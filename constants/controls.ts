const goForward = (
  getScrollPosition: number,
  forward: number,
  setForward: (prop: number) => void
) => {
  setForward(getScrollPosition + 5);
  scrollBy(forward, 0);
};

const goBackward = (
  getScrollPostion: number,
  backward: number,
  setBackward: (prop: number) => void
) => {
  setBackward(getScrollPostion + 5);
  scrollBy(backward, 0);
};

export { goForward, goBackward };
