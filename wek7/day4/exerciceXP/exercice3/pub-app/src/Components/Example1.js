// src/Components/Example1.js
import React, { Component } from "react";
import data from "../data.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Réseaux sociaux</h2>
        <ul>
          {data.SocialMedias.map((media, index) => (
            <li key={index}>{media}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
