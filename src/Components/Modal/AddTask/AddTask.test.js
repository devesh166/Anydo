import "@testing-library/jest-dom/extend-expect";
import {
  render,
  waitForElement,
  fireEvent,
  screen
} from "@testing-library/react";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait
} from "@testing-library/dom";
import AddTask from "./AddTask";
import React from "react";

describe("Modal test suit", () => {
  it("AddTask Modal", async () => {
    const mockedFunction = jest.fn();
    const mockedFunction2 = jest.fn();
    const dom = render(
      <AddTask
        TaskList={[1, 2, 3, "personal"]}
        setModal={true}
        addTask={mockedFunction}
        closeTaskModal={mockedFunction2}
      />
    );
    expect(dom.getByTestId("addtask")).toBeInTheDocument();

    fireEvent.click(dom.getByTestId("cancelbtn"));
    expect(mockedFunction2).toHaveBeenCalled();

    fireEvent.click(dom.getByTestId("okbtn"));
    expect(mockedFunction).toHaveBeenCalled();

    // fireEvent.change(dom.getByText("changeList"), { target: { value: "0" } });
    // expect(dom.getByTestId("changeList").value).toBeUndefined();

    // fireEvent.change(dom.getByTestId("changeDay"), { target: { value: "0" } });
    // expect(dom.getByTestId("changeDay").value).toBeUndefined();
    // fireEvent.click(dom.getByTestId("changeDay"));
    // fireEvent.click(dom.getByTestId("Today"));
    // const dropdownElement = waitForElement(() => dom.getByTestId("changeList"));    personal
    dropdownElement = await waitForElement(() => dom.getByTestId("changeList"));
    fireEvent.mouseDown(dropdownElement);

    // const dropdown = dom.container.querySelector(".Dropdown-placeholder");
    // fireEvent.click(dropdown);

    fireEvent.change(dom.getByTestId("changeText"), {
      target: { value: "23" }
    });
    expect(dom.getByTestId("changeText").value).toBe("23");
    // fireEvent.click(getByTestId("AddTaskModal"));    cancelbtn
    // expect(screen.queryByText("Today")).toBeNull();

    /// expect(screen.getByText("Notes")).toBeInTheDocument();
  });
});
