import React from "react";
import "./styles/MainCard.css";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function MainCard() {
  return (
    <div className="test">
    <Card className="mainCard">
      <CardContent>
        <div className="mainCard__header">
        <h4>Front-end Planned</h4>
          <MoreHorizIcon />
        </div>
         
      
      </CardContent>
    </Card>
    </div>
  );
}
