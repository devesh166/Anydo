import "@testing-library/jest-dom/extend-expect";

// import React from "react";
// import Adapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";
// import renderer, { create } from "react-test-renderer";
// import { shallow, mount, configure } from "enzyme";
// import Container from "./Container";

// configure({ adapter: new Adapter() });

// describe("Container test suit", () => {
//   it("Snapshot test", () => {
//     const comp = renderer.create(<Container />);
//     let tree = comp.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   // it("test incr btn", () => {
//   //   let spy = jest.fn();

//   //   const wrapper = shallow(<Biscuits />);
//   //   const btn = wrapper.find("#btn");
//   //   btn.simulate("click");
//   //   expect(spy).toBeDefined();
//   // });
//   it("test decr btn", () => {
//     // const component = create(<Container />);
//     // const instance = component.root;
//     // const button = instance.findByType("button");
//     // button.props.onClick();
//     // expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//   });
// });

// // describe("removeButton", () => {
// //   it("should call remove on click", () => {
// //     const mock = jest.spyOn(Bis, "incrementBiscuits");
// //     mock.mockImplementation(() => {});
// //     const component = shallow(<Biscuits />);
// //     component.find("#btn").simulate("click");
// //     expect(mock).toHaveBeenCalled();
// //     mock.mockRestore();
// //   });
// // });
