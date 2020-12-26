import React from "react";
import "./styles/SubCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export default function SubCard() {
  return (

      <Card className="subCard">
        <CardContent>
            <div className="subCard__Content">
            <h6>Welcome to sub CArd</h6>
             <CreateOutlinedIcon className="subCard__pencil" />
            </div>
            
         </CardContent>
      </Card>
  );
}
