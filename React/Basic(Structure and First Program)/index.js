//React is a framework of JS which is used for front end development.

//It is revolutionary in a sense that it allows the JS code to be directly be rendered into HTML frontend outlook.

//This allows the website to load different piece of coode at different time making efficient use of internet consumption.

//React also allows the project to be divided into different small sized modules making programn them an easy task. 


import React from "react";//Importing React module
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>// One single Div container being rendered using React
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Biryani</li>
      <li>Kulcha Nihari</li>
      <li>Kebab Paratha</li>
    </ul>
  </div>,
  document.getElementById("root")//Rendered into HTML page
);
