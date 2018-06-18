type CurryingFunction = (
  ...fns: (Function | undefined)[]
) => <T>(...args: T[]) => void

export const callAll: CurryingFunction = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args))
}
