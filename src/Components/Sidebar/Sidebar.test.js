import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import React from "react";

describe("Sidebar test suit", () => {
  it("Add button ", () => {
    const { getByTestId } = render(
      <Sidebar
        List={["ALL Tasks", "Personal", "Work", "Grocery List"]}
        selectedList={() => {}}
      />
    );
    expect(screen.getByTestId("drawer1")).toBeInTheDocument();

    fireEvent.click(getByTestId("ListBtn1"));
    expect(screen.queryByText("Today")).toBeNull();

    /// expect(screen.getByText("Notes")).toBeInTheDocument();
  });
});
