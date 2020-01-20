import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function AddTask(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Reminder, setReminder] = useState("");
  const [ListTittle, setListTittle] = useState("");
  const [Note, setNote] = useState("");
  // const [, set] = useState(initialState);
  useEffect(() => {
    setOpen(props.setModal);
  }, [props.setModal]);

  const handleClose = () => {
    setNote("");
    props.closeTaskModal();
  };

  const validateForm = () => {
    props.addTask(ListTittle, Reminder, Note);
    handleClose();
  };
  const handleListChange = event => {
    const myValue = event.target.value;
    setListTittle(myValue);
  };
  const handleEventChange = event => {
    const myValue = event.target.value;
    setReminder(myValue);
  };
  const handleInputChange = event => {
    const myValue = event.target.value;
    setNote(myValue);
  };
  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <FormControl className={classes.formControl} data-testid="addtask">
            <InputLabel htmlFor="grouped-select">List</InputLabel>
            <Select
              // selectProps={{ "data-testid": "changeList" }}
              data-testid="changeList"
              defaultValue={ListTittle}
              onChange={handleListChange}
              input={<Input id="grouped-select1" />}
            >
              {props.TaskList.map((text, index) => {
                if (index == 0) {
                  return;
                }
                return (
                  <MenuItem key={index} value={index}>
                    {text}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Remind On</InputLabel>
            <Select
              // selectProps={{ "data-testid": "changeDay" }}
              data-testid="changeDay"
              defaultValue={Reminder}
              onChange={handleEventChange}
              input={<Input id="grouped-select2" />}
            >
              <MenuItem
                value={0}
                // inputProps={{ "data-testid": "Today" }}
                // data-testid="Today"
              >
                Today
              </MenuItem>
              <MenuItem value={1}>Tommorow</MenuItem>
              <MenuItem value={2}>Upcoming</MenuItem>
            </Select>
          </FormControl>
          <h2 id="simple-modal-title">Notes</h2>
          <TextField
            inputProps={{ "data-testid": "changeText" }}
            value={Note}
            onChange={handleInputChange}
            id="simple-modal-description"
          />
          <button
            // onClick=={handleClose}
            color="primary"
            data-testid="okbtn"
            onClick={validateForm}
          >
            OK
          </button>
          <button onClick={handleClose} color="primary" data-testid="cancelbtn">
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
