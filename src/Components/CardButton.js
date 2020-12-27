import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "./styles/CardButton.css";
import AddIcon from "@material-ui/icons/Add";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Input from "@material-ui/core/Input";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import GlobalContext from "../GlobalState";

const CardButton = () => {
  const [add, setAdd] = React.useState(false);
  const [addCard, setAddCard] = React.useState("");
  const handleClose = () => {
    setAdd(false);
  };

  const { addUser } = useContext(GlobalContext);

  const addAnotherCard = () => {
    addUser(addCard);
    setAddCard("");
  };

  return (
    <>
      <span className="cardButton"  onClick={() => setAdd(true)} >
        {!add ? (
          <Button variant="contained" >
            <AddIcon />
            <p> Add another card </p>
          </Button>
        ) : (
          ""
        )}
      </span>
      {add ? (
        <div className="cardButton__addCard"   onBlur={ handleClose}>
          
          <Input
          
           autoFocus
            value={addCard}
            onChange={(e) => {
              setAddCard(e.target.value);
              
            }}
            className="cardButton__input"
            placeholder="Enter card Title here..."
          />
          <Fab
           
            onMouseDown={addAnotherCard}
            color="primary"
            className="cardButton__AddIcon"
            size="small"
            disabled={!addCard}
          >
            <AddIcon />
          </Fab>
          <Fab
            color="secondary"
            className="cardButton__AddIcon"
            size="small"
            onClick={handleClose}
          >
            <ClearIcon />
          </Fab>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default CardButton;
