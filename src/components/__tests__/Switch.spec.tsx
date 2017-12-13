import * as React from "react";
import { shallow } from "enzyme";
import Switch from "../Switch";

describe("Switch component", () => {
  it("renders without any props", () => {
    const wrap = shallow(<Switch />);

    expect(wrap.hasClass("toggle")).toBeTruthy();
    expect(
      wrap.containsMatchingElement(<input className="toggle-input" type="checkbox" />)
    ).toBeTruthy();
    expect(
      wrap.containsMatchingElement(<button className=" toggle-btn toggle-btn-off" />)
    ).toBeTruthy();
  });

  it("renders different buttons according to 'on' props", () => {
    const wrap = shallow(<Switch />);

    wrap.setProps({ on: true });
    expect(wrap.find("button").hasClass("toggle-btn-on")).toBeTruthy();

    wrap.setProps({ on: false });
    expect(wrap.find("button").hasClass("toggle-btn-off")).toBeTruthy();
  });

  it("invokes onClick function", () => {
    const onClick = jest.fn();
    const wrap = shallow(<Switch onClick={onClick} />);

    wrap.find("button").simulate("click");

    expect(onClick).toHaveBeenCalled();
  });
});
