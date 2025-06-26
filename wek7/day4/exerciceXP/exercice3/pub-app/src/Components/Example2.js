// src/Components/Example2.js
import React, { Component } from "react";
import data from "../data.json";

class Example2 extends Component {
  render() {
    const { Frontend, Backend } = data.Skills;
    return (
      <div>
        <h2>Compétences</h2>
        <h4>Frontend</h4>
        <ul>
          {Frontend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4>Backend</h4>
        <ul>
          {Backend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
