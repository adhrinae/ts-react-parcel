type CurryingFunction = (...fns: Function[]) => <T>(...args: T[]) => void;

export const compose: CurryingFunction = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};
