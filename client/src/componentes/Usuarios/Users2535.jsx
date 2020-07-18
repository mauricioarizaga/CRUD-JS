import React, { Component } from "react";
import axios from "axios";
import Usuario from "./Usuario";
import { Table } from "react-bootstrap";

class Users2535 extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }
  componentWillMount() {
    this.buscarTodos();
  }

  buscarTodos() {
    axios.get("http://localhost:3001/usuario/todos").then((response) => {
      this.setState({ usuarios: response.data }, () => {});
    });
  }
  render() {
    const users = this.state.usuarios.map((usuario, i) => {
      if (
        this.state.usuarios[i].edad > 25 &&
        this.state.usuarios[i].edad < 35
      ) {
        return <Usuario key={usuario.id} item={usuario} />;
      }
    });
    return (
      <div>
        <h4>Usuarios</h4>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Edad</th>
              <th>Domicilio</th>
              <th>DNI</th>
              <th>Genero</th>
              <th>Fecha de Nacimiento</th>
            </tr>
          </thead>

          <tbody>{users}</tbody>
        </Table>
      </div>
    );
  }
}

export default Users2535;
