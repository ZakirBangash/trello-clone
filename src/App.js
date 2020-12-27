import React, {
  useContext,
  useState
} from "react";

import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import Card from "./Components/MainCard";
import Test from "./test.js";
import Button from "@material-ui/core/Button"
import GlobalContext from "./GlobalState";
import TransitionsModal from './test'



function App() {

  const { cards } = useContext(GlobalContext);
  
  console.log(cards)

  return (
    <div className="app">
      {cards.map((card, index) => (
        <Card title={card.title} subCards={card.subCards} />
      ))}
    <div className="app__button">
     <Button variant="contained">
        <AddIcon /> Add Another list
     </Button>
    </div>
   

    </div>
  );
}

export default App;
