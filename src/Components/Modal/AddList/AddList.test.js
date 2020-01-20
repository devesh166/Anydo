import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import AddList, { handleClose } from "./AddList";
import React from "react";
// const [OpenModal, setOpenModal] = React.useState(initialState);
describe("Modal 2 test suit", () => {
  it("AddList Modal ", () => {
    const mockedFunction = jest.fn();
    const mockedFunction2 = jest.fn();

    const dom = render(
      <AddList
        setModal={true}
        closeListModal={mockedFunction}
        addList={mockedFunction2}
      />
    );
    expect(dom.getByTestId("AddListModal")).toBeInTheDocument();

    fireEvent.click(dom.getByTestId("AddListModal"));
    expect(mockedFunction).toHaveBeenCalled();

    fireEvent.click(dom.getByTestId("closebtn"));
    expect(mockedFunction).toHaveBeenCalled();

    fireEvent.change(dom.getByTestId("input"), { target: { value: "23" } });
    expect(dom.getByTestId("input").value).toBe("23");

    fireEvent.click(dom.getByTestId("AddListModal"));
    expect(mockedFunction2).toHaveBeenCalled();
    // expect(screen.queryByText("Today")).toBeNull();

    /// expect(screen.getByText("Notes")).toBeInTheDocument();
  });
});
