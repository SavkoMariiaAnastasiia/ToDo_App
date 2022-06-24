import React from "react";
import {Button} from '@mui/material'
import TomatoButton from "./styles/App"


function App() {
  return (
      <div className="App">
        <div className="list">
          <div className="list_content">
            <strong>1.Stady</strong>
            <div>fsdfshsfdhfh</div>
          </div>
          <Button variant="outlined" color="error" size="small">delete</Button>
            <TomatoButton>TomatoButton</TomatoButton>
        </div>
      </div>
  );
}

export default App;