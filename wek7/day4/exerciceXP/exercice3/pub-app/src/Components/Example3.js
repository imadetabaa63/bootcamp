// src/Components/Example3.js
import React, { Component } from "react";
import data from "../data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Expériences professionnelles</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <h4>{exp.company}</h4>
            <p>Poste : {exp.role}</p>
            <p>Période : {exp.years}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
