import React from "react";
import { shallow } from "enzyme";
import Calculator from "../../components/Calculator";

describe("Calculator component", () => {
  it("Should render successfully", (done) => {
    const component = shallow(<Calculator />);

    expect(true).toBe(true);
    done();
  });
});
