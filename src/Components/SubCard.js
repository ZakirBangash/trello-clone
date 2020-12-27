import React from "react";
import "./styles/SubCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Button from "@material-ui/core/Button"
export default function SubCard({ title }) {
  
  const Test = ()=>{
    console.log('clicked card')
  }
  
  return (
<Card className="subCard" onClick={Test}>
      <CardContent>
        <div className="subCard__Content">
          <h6>{title}</h6>
          <CreateOutlinedIcon className="subCard__pencil" />
        </div>
      </CardContent>
    </Card>
  );
}
