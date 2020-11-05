import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import './style.css';

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas-ul">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas-li" key={index}>

              < CardNota title={nota.title} text={nota.text} />
            </li>
          );
        })
        }
      </ul >
    );
  }
}

export default ListaDeNotas;
