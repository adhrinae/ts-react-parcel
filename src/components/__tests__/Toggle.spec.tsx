import * as React from "react";
import { mount } from "enzyme";
import Toggle from "../Toggle";

function sel(testId: string): string {
  return `[data-test="${testId}"]`;
}

describe("Toggle component", () => {
  type MockChildProps = { on: boolean | undefined };
  const onToggle = jest.fn();
  const onReset = jest.fn();
  const MockChild: ({ on }: MockChildProps) => JSX.Element = ({ on }) => (
    <div data-test="mock-child">I'm {on ? "on!" : "off!"}</div>
  );

  it("renders with default state", () => {
    const wrap = mount(
      <Toggle
        onToggle={onToggle}
        onReset={onReset}
        render={toggle => <MockChild on={toggle.on} />}
      />
    );

    expect(wrap.find(sel("mock-child")).text()).toBe("I'm off!");
  });

  it("renders differently when gets 'on' prop", () => {
    const wrap = mount(
      <Toggle
        on={true}
        onToggle={onToggle}
        onReset={onReset}
        render={toggle => <MockChild on={toggle.on} />}
      />
    );

    expect(wrap.find(sel("mock-child")).text()).toBe("I'm on!");
  });
});
