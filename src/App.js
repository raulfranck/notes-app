import React, { Component } from "react";

import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newArrayNotes = [...this.state.notas, newNote]
    const newState = {
      notas: newArrayNotes
    }

    this.setState(newState)
  }

  render() {
    return (
      <section className="container">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
