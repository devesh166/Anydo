import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
  }
}));

export default function AddList(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [ListName, setListName] = useState("");
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };
  useEffect(() => {
    setOpen(props.setModal);
  }, [props.setModal]);

  const handleClose = () => {
    props.closeListModal();
  };
  const handleInputChange = event => {
    const myValue = event.target.value;
    setListName(myValue);
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
          <h2 id="simple-modal-title">Add List </h2>
          <p id="simple-modal-description">
            <input
              value={ListName}
              onChange={handleInputChange}
              data-testid="input"
            ></input>
          </p>
          <button onClick={handleClose} color="primary" data-testid="closebtn">
            Cancel
          </button>
          <button
            data-testid="AddListModal"
            onClick={() => {
              if (ListName) {
                props.addList(ListName);
              }
              setListName("");
              handleClose();
            }}
            color="primary"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
}
