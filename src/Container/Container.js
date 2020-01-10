import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Card from "../Components/Card/Card";
import cloneDeep from "clone-deep";
import AddList from "../Components/Modal/AddList";
import AddTask from "../Components/Modal/AddTask";
import Anydo from "../Components/Anydo/Anydo";
function Container() {
  const [open, setOpen] = React.useState(true);
  const handleDrawer = () => {
    if (!open) setOpen(true);
    else setOpen(false);
  };
  const [ListModal, setListModal] = useState(false);
  const [TaskModal, setTaskModal] = useState(false);
  const TempArr = [[], [], []]; //today , tomm, someday
  const [List, setList] = React.useState([
    "ALL Tasks",
    "Personal",
    "Work",
    "Grocery List"
  ]);
  const [CardTittle, setCardTittle] = React.useState(List[0]);
  const [Task, setTask] = React.useState([
    cloneDeep(TempArr),
    cloneDeep(TempArr),
    cloneDeep(TempArr),
    cloneDeep(TempArr)
  ]);
  const [ListIndex, setListIndex] = useState(0);
  const openListModal = () => {
    setListModal(true);
  };
  const closeListModal = () => {
    setListModal(false);
  };
  const openTaskModal = () => {
    setTaskModal(true);
  };
  const closeTaskModal = () => {
    setTaskModal(false);
  };
  const addList = ListName => {
    // setList(List.push(newList));

    setList([...List, ListName]);
    setTask([...Task, cloneDeep(TempArr)]);
  };

  const selectedList = index => {
    setCardTittle(List[index]);
    setListIndex(index);
    console.log(List);
  };

  const addTask = (listIndex, timeIndex, message) => {
    let temp = cloneDeep(Task);
    temp[listIndex][timeIndex].push(message);
    temp[0][timeIndex].push(message);
    // console.log(temp);
    setTask(temp);
  };
  React.useEffect(() => {
    console.log(Task);
  }, [Task]);
  // console.log(Task[0][0][0]);
  return (
    <div>
      <Anydo
        //header
        handleDrawer={handleDrawer}
        openTaskModal={openTaskModal}
        //sidebar
        ListTittle={"All Task"}
        selectedList={selectedList}
        toggleSidebar={open}
        List={List}
        CardTittle={CardTittle}
        addList={openListModal}
        addTask={addTask}
        Task={Task}
        //Addlist modal
        closeListModal={closeListModal}
        setListModal={ListModal}
        addList={addList}
        //addtask modal
        setModal={TaskModal}
        TaskList={List}
        addTask={addTask}
        closeTaskModal={closeTaskModal}
        //card
        Task={Task[ListIndex]}
      ></Anydo>
    </div>
  );
}

export default Container;
