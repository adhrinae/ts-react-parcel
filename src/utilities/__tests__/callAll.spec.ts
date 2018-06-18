import { callAll } from '../callAll'

test('callAll returns undefined if there is no functions and arguments', () => {
  expect(callAll()()).toBeUndefined()
})

test('callAll executes received functions in order', () => {
  const fn1 = jest.fn()
  const fn2 = jest.fn()
  const fn3 = jest.fn()

  callAll(fn1, fn2, fn3)

  expect(fn1).toHaveBeenCalled
  expect(fn2).toHaveBeenCalled
  expect(fn3).toHaveBeenCalled
})

test('callAll executes received functions with their arguments', () => {
  const args = ['hi', 'hello', 'ola']

  const fn1 = jest.fn()
  const fn2 = jest.fn()
  const fn3 = jest.fn()

  callAll(fn1, fn2, fn3)(...args)

  expect(fn1).toHaveBeenCalledWith(...args)
  expect(fn2).toHaveBeenCalledWith(...args)
  expect(fn3).toHaveBeenCalledWith(...args)
})
