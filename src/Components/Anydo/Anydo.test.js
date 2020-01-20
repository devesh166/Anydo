import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

import React from "react";

import Anydo from "./Anydo";
describe("Anydo test suit", () => {
  it("check component ", () => {
    const mockedFunction = jest.fn();
    const mockedFunction2 = jest.fn();
    const dom = render(
      <Anydo
        //Addlist
        setListModal={true}
        closeListModal={mockedFunction}
        addList={mockedFunction2}
        //Addtask
        TaskList={[1, 2, 3]}
        setModal={true}
        addTask={mockedFunction}
        closeTaskModal={mockedFunction2}
        //Sidebar
        List={["ALL Tasks", "Personal", "Work", "Grocery List"]}
        selectedList={() => {}}
        //card
        Task={[
          ["Personal", "Personal", "Personal"],
          ["Personal", "Personal", "Personal"],
          ["Personal", "Personal", "Personal"]
        ]}
      />
    );
    expect(dom.getByTestId("anydo_comp")).toBeInTheDocument();
    expect(dom.getByTestId("icon")).toBeInTheDocument();
  });
});
