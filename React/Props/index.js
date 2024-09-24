// Props are a function in react that allows to create a design in a separate function and be filled with actual information using React.

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    
    <Card
      name="Assad uddin Owaise"
      img="https://upload.wikimedia.org/wikipedia/commons/3/38/Asaduddin.jpg"
      tel="+1938477233"
      email="Owwaisi@gmail.com"
    />
    <Card
      name="Narendra Modi"
      img="https://www.india.com/wp-content/uploads/2017/05/PM-Modi-coy.jpg"
      tel="+987654321"
      email="modi@gov.in"
    />
  </div>,
  document.getElementById("root")
);
