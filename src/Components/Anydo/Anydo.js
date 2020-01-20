import React from "react";
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";
import Card from "../Card/index";

import AddList from "../Modal/AddList/index";
import AddTask from "../Modal/AddTask/index";
// import PropTypes from "prop-types";

function Anydo(props) {
  return (
    <div data-testid="anydo_comp">
      <Header
        handleDrawer={props.handleDrawer}
        openTaskModal={props.openTaskModal}
      />
      <AddList
        closeListModal={props.closeListModal}
        setModal={props.setListModal}
        addList={props.addList}
      />
      <AddTask
        setModal={props.setModal}
        TaskList={props.TaskList}
        addTask={props.addTask}
        closeTaskModal={props.closeTaskModal}
      />
      <Sidebar
        ListTittle={"All Task"}
        selectedList={props.selectedList}
        toggleSidebar={props.toggleSidebar}
        List={props.List}
        CardTittle={props.CardTittle}
        addList={props.openListModal}
        addTask={props.addTask}
        Task={props.Task}
      >
        <Card Task={props.Task} />
      </Sidebar>
    </div>
  );
}

export default Anydo;
