import React from "react";
import "./styles/MainCard.css";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubCard from "./SubCard";
import CardButton from "./CardButton";


export default function MainCard({title,subCards}) {
  return (
    <Card className="mainCard">
      <CardContent>
        <div className="mainCard__header">
        <h5>{title}</h5>
          <MoreHorizIcon />
        </div>
    
        {subCards.map((subCard)=>(
        <SubCard title={subCard.title}/>  
        ))}
 
        
      </CardContent>
      <CardButton />
    </Card>
    
  );
}
