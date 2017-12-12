type CurryingFunction = (...fns: Function[]) => <T>(...args: T[]) => void;

const compose: CurryingFunction = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};

export default compose;
