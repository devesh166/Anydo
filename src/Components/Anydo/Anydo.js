import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";

import AddList from "../Modal/AddList";
import AddTask from "../Modal/AddTask";
// import PropTypes from "prop-types";

function Anydo(props) {
  return (
    <div>
      <Header
        handleDrawer={props.handleDrawer}
        openTaskModal={props.openTaskModal}
      />

      <Sidebar
        ListTittle={"All Task"}
        selectedList={props.selectedList}
        toggleSidebar={props.toggleSidebar}
        List={props.List}
        CardTittle={props.CardTittle}
        addList={props.addList}
        addTask={props.addTask}
        Task={props.Task}
      >
        <AddList
          closeListModal={props.closeListModal}
          setModal={props.SetListModal}
          addList={props.addList}
        />
        <AddTask
          setModal={props.setModal}
          TaskList={props.TaskList}
          addTask={props.addTask}
          closeTaskModal={props.closeTaskModal}
        />

        <Card Task={props.Task} />
      </Sidebar>
    </div>
  );
}

export default Anydo;
