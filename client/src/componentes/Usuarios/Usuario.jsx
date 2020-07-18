import React, { Component } from "react";

class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.item.nombrecompleto}</td>
        <td>{this.state.item.edad}</td>
        <td>{this.state.item.domicilio}</td>
        <td>{this.state.item.dni}</td>
        <td>{this.state.item.genero}</td>
        <td>{this.state.item.fechanacimiento}</td>
      </tr>
    );
  }
}

export default Usuario;
