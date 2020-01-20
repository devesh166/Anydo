import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";
import React from "react";
import Side from "../Sidebar/Sidebar";
import Sidebar from "../Sidebar/Sidebar";
describe("Header test suit", () => {
  it("Add button ", () => {
    const { getByTestId } = render(<Header />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();

    const side = render(
      <Sidebar
        List={["ALL Tasks", "Personal", "Work", "Grocery List"]}
        selectedList={() => {}}
      />
    );
    fireEvent.click(getByTestId("icon"));
    expect(side.getByTestId("drawer")).toBeInTheDocument();
    // fireEvent.click(getByTestId("icon"));
    // expect(side.queryByText("Work")).to();
    // expect(screen.queryByText("Personel")).toBeNull();

    /// expect(screen.getByText("Notes")).toBeInTheDocument();
  });
});
