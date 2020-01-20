import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import renderer, { create } from "react-test-renderer";
import React from "react";
import Container from "./Container";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("Anydo test suit", () => {
  it("Anydo Snapshot ", () => {
    const comp = renderer.create(<Container />);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it("Drawer open", () => {
  //   const dom = render(<Container />);
  //   expect(dom.getByTestId("drawer")).toBeInTheDocument();
  // });
});

// import "@testing-library/jest-dom/extend-expect";
// // import { render, cleanup } from "@testing-library/react";
// import React from "react";
// // import Adapter from "enzyme-adapter-react-16";
// import { render, cleanup, fireEvent, screen } from "@testing-library/react";
// // import renderer, { create } from "react-test-renderer";
// // import { shallow, mount, configure } from "enzyme";
// import Container from "./Container";

// describe("Header test suit", () => {
//   it("Anydo component ", () => {
//     const { getByTestId } = render(
//       <Container List={["ALL Tasks", "Personal", "Work", "Grocery List"]} />
//     );
//     expect(screen.getByTestId("anyDoComp")).toBeInTheDocument();

//     // fireEvent.click(getByTestId("ListBtn1"));
//   });
// });
// // configure({ adapter: new Adapter() });

// // describe("Container test suit", () => {
// //   it("Snapshot test", () => {
// //     const comp = renderer.create(<Container />);
// //     let tree = comp.toJSON();
// //     expect(tree).toMatchSnapshot();
// //   });

// //   // it("test incr btn", () => {
// //   //   let spy = jest.fn();

// //   //   const wrapper = shallow(<Biscuits />);
// //   //   const btn = wrapper.find("#btn");
// //   //   btn.simulate("click");
// //   //   expect(spy).toBeDefined();
// //   // });
// //   it("test decr btn", () => {
// //     // const component = create(<Container />);
// //     // const instance = component.root;
// //     // const button = instance.findByType("button");
// //     // button.props.onClick();
// //     // expect(button.props.children).toBe("PROCEED TO CHECKOUT");
// //   });
// // });

// // // describe("removeButton", () => {
// // //   it("should call remove on click", () => {
// // //     const mock = jest.spyOn(Bis, "incrementBiscuits");
// // //     mock.mockImplementation(() => {});
// // //     const component = shallow(<Biscuits />);
// // //     component.find("#btn").simulate("click");
// // //     expect(mock).toHaveBeenCalled();
// // //     mock.mockRestore();
// // //   });
// // // });
