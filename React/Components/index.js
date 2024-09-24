// One of the primary features of React is the ability to divide an app into multiple components, 
//This is done by designing the components in different files and asembling them in a seprate file and rendering them in  a separate file usually named "indes.js"


 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
