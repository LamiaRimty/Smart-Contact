import React from "react";
import Card from "./Card";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     <Card
           name= "Jaya Ahsan"
           img= "https://i.pinimg.com/564x/73/16/aa/7316aa46e85f0d0c06768a76f7330eac.jpg"
           tel= "+1788787"
           email= "jaya@gmail.com"
     />
    </div>
  );
}

export default App;
