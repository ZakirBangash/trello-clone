import React from "react";
import "./styles/SubCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../test";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function SubCard({ title }) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Test = () => {
    <TransitionsModal list />;
  };

  return (
    <>
      <Card className="subCard" onClick={handleOpen}>
        <CardContent>
          <div className="subCard__Content">
            <h6>{title}</h6>
            <CreateOutlinedIcon className="subCard__pencil" />
          </div>
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">We will work on this later</h2>
            <p id="transition-modal-description">
             Here the things will go 
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
