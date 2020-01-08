import React from "react";
import { action } from "@storybook/addon-actions";
// import  Addfrom '@storybook/react/demo';
import AddTask from "../Components/Modal/AddTask";
import AddList from "../Components/Modal/AddList";
import { storiesOf } from "@storybook/react";

export default {
  title: "Modal"
};
const List = ["ALL Tasks", "Personal", "Work", "Grocery List"];
storiesOf("Modal", module)
  .add("AddTask", () => <AddTask setModal={true} TaskList={List} />)
  .add("AddList", () => <AddList setModal={true} />);
