import React from "react";
import "./styles/MainCard.css";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubCard from "./SubCard";


export default function MainCard() {
  return (
    <Card className="mainCard">
      <CardContent>
        <div className="mainCard__header">
        <h5>Front-end Planned</h5>
          <MoreHorizIcon />
        </div>
        <SubCard />
        <SubCard />
        <SubCard />
        <SubCard />
        
      </CardContent>
    </Card>
    
  );
}
