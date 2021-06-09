// Imports
// React Imports
import React from "react";
// enzyme imports
import { shallow } from "enzyme";
// Component Imports
import CountDownTimer from "./CountDownTimer";

describe("CountDownTimer component tests", () => {
  let container:any;
  beforeEach(() => (container = shallow(<CountDownTimer />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  });
})