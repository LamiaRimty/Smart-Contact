import { StrictMode } from "react";

function Card(props){
    return(
        <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img" src={props.img} alt="avatar-img"/>
        </div>

        <div className="bottom">
            <div className="info">
            <p>{props.tel}</p>
            <p>{props.email}</p>
            </div>
        </div>
      </div>
    );
}
export default Card;