import React, { Component } from "react";
import './style.css'

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form
        className="form-main"
        onSubmit={this._handleNote.bind(this)}
      >
        <input
          className="input-name"
          type="text"
          placeholder="Título"
          onChange={this._handleTitle.bind(this)}
        />

        <textarea
          className="input-description"
          placeholder="Escreva sua nota..."
          cols="20"
          rows="2"
          onChange={this._handleChangeText.bind(this)}
        />

        <button
          type="submit"
          className="input-button">
          Criar Nota
          </button>
      </form>
    );
  }
}

export default FormularioCadastro;