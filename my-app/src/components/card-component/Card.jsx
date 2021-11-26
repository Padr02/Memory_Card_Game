import React from "react";
import backside from "./backside.jpg";
import "./Card.css";

export default function Card(props) {
  return (
    <img
      className="card-img"
      src={props.targeted ? props.image : backside}
      alt=""
      onClick={props.onClick}
    />
  );
}
