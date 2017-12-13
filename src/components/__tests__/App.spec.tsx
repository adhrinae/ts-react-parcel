import * as React from "react";
import { mount } from "enzyme";
import App from "../App";
import Switch from "../Switch";

function sel(testId: string): string {
  return `[data-test="${testId}"]`;
}

describe("App component", () => {
  it("renders with default state", () => {
    const wrap = mount(<App />);
    const initState = { timesClicked: 0, on: false };

    expect(wrap.containsMatchingElement(<Switch />)).toBe(true);
    expect(wrap.state()).toMatchObject(initState);
  });

  it("shows click count when toggled less than 4 times", () => {
    const wrap = mount(<App />);
    const toggleButton = wrap.find(".toggle button");

    toggleButton.simulate("click");
    toggleButton.simulate("click");

    expect(wrap.find(sel("click-counter")).text()).toBe("Click count: 2");
  });

  it("shows warning message when toggled more than 4 times", () => {
    const wrap = mount(<App />);
    const toggleButton = wrap.find(".toggle button");

    for (let i = 0; i <= 4; i += 1) {
      toggleButton.simulate("click");
    }

    expect(wrap.find(sel("click-warning")).exists()).toBeTruthy();
  });
});
