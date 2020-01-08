import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { shallow, mount, configure } from "enzyme";

// import App from './App';

configure({ adapter: new Adapter() });

describe("Container test suit", () => {
  //   it("Snapshot test", () => {
  //     const comp = renderer.create(<Biscuits />);
  //     let tree = comp.toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });

  it("test incr btn", () => {
    let spy = jest.fn();

    const wrapper = shallow(<Biscuits />);
    const btn = wrapper.find("#btn");
    btn.simulate("click");
    expect(spy).toBeDefined();
  });
  it("test decr btn", () => {
    let mockSubmit = jest.fn();

    const wrapper = shallow(<Biscuits func={mockSubmit} />);
    const btn = wrapper.find("button").at(0);
    btn.simulate("click");
    expect(mockSubmit).toBeDefined();
  });
});

// describe("removeButton", () => {
//   it("should call remove on click", () => {
//     const mock = jest.spyOn(Bis, "incrementBiscuits");
//     mock.mockImplementation(() => {});
//     const component = shallow(<Biscuits />);
//     component.find("#btn").simulate("click");
//     expect(mock).toHaveBeenCalled();
//     mock.mockRestore();
//   });
// });
