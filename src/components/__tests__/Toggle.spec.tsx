import * as React from 'react'
import { mount } from 'enzyme'
import Toggle from '../Toggle'

function sel(testId: string): string {
  return `[data-test="${testId}"]`
}

type MockChildProps = { on: boolean | undefined }
const onToggle = jest.fn()
const onReset = jest.fn()
const MockChild: ({ on }: MockChildProps) => JSX.Element = ({ on }) => (
  <div data-test="mock-child">I'm {on ? 'on!' : 'off!'}</div>
)

test('Toggle Component renders with default state', () => {
  const wrap = mount(
    <Toggle
      onToggle={onToggle}
      onReset={onReset}
      render={toggle => <MockChild on={toggle.on} />}
    />
  )

  expect(wrap.find(sel('mock-child')).text()).toBe("I'm off!")
})

test("Toggle Component renders differently when gets 'on' prop", () => {
  const wrap = mount(
    <Toggle
      on={true}
      onToggle={onToggle}
      onReset={onReset}
      render={toggle => <MockChild on={toggle.on} />}
    />
  )

  expect(wrap.find(sel('mock-child')).text()).toBe("I'm on!")
})
