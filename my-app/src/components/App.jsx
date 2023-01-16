import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
    return(
        <Card 
        key={contact.id}
        img={contact.img}
        name={contact.name}
        tel={contact.tel}
        email={contact.email}
        />
    );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="http://cdn.ecommercedns.uk/files/3/232753/7/13018607/57a.jpg"/>
     
     { contacts.map(createCard)}
    
    </div>
  );
}

export default App;
