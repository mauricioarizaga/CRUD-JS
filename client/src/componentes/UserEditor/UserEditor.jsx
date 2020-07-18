import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, FormControl, InputGroup } from "react-bootstrap";
import {
  buscarUsuarioEditar,
  editarUsuario,
  eliminarUsuario,
} from "../../redux/actions";
const axios = require("axios");
export class UserEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buscado: null,
    };

    this.buscarUsuarioEditar = props.buscarUsuarioEditar;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.buscador = React.createRef();
    this.nombrecompleto = React.createRef();
    this.dni = React.createRef();
    this.domicilio = React.createRef();
    this.edad = React.createRef();
    this.genero = React.createRef();
    this.fechanacimiento = React.createRef();
    this.id = React.createRef();
  }
  handleSubmit(event) {
    var usuario = {
      id: this.id.current.value,
      nombrecompleto: this.nombrecompleto.current.value,
      dni: this.dni.current.value,
      domicilio: this.domicilio.current.value,
      edad: this.edad.current.value,
      genero: this.genero.current.value,
      fechanacimiento: this.fechanacimiento.current.value,
    };
    axios
      .put("http://localhost:3001/usuario/editar", {
        nombrecompleto: usuario.nombrecompleto,
        dni: usuario.dni,
        domicilio: usuario.domicilio,
        edad: usuario.edad,
        genero: usuario.genero,
        fechanacimiento: usuario.fechanacimiento,
        id: usuario.id,
      })
  }

  handleSearch(event) {
    axios
      .get("http://localhost:3001/usuario/buscar/" + this.buscador.current.value)
      .then((response) => {
        this.setState({ buscado: response.data })
      })

  };

  handleDelete(event) {
    if (this.id.current.value) {
      axios
        .delete("http://localhost:3001/usuario/" + this.id.current.value);
      alert("El usuario ha sido borrado");
      this.nombrecompleto.current.value = "";
      this.dni.current.value = "";
      this.domicilio.current.value = "";
      this.edad.current.value = "";
      this.genero.current.value = "";
      this.fechanacimiento.current.value = "";
      this.id.current.value = "";
    } else {
      alert("No se ha encontrado el usuario para eliminar");
    }
  }

  buscar() {
    if (this.state.buscado) {
      this.nombrecompleto.current.value = this.state.buscado.nombrecompleto;
      this.dni.current.value = this.state.buscado.dni;
      this.domicilio.current.value = this.state.buscado.domicilio;
      this.edad.current.value = this.state.buscado.edad;
      this.genero.current.value = this.state.buscado.genero;
      this.fechanacimiento.current.value = this.state.buscado.fechanacimiento;
      this.id.current.value = this.state.buscado.id;
      this.setState({ buscado: null })
    } else {
      return alert("El producto no fue encontrado y/o no existe");
    }
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              Buscar DNI Usuario
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="DNI"
            aria-label="dni"
            aria-describedby="basic-addon1"
            onChange={(e) => this.handleSearch(e)}
            ref={this.buscador}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={(e) => this.buscar(e)}>
              Editar
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={this.id} readOnly />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" ref={this.nombrecompleto} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDni">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName1">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="number" ref={this.dni} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDomicilio">
                <Form.Label>Domicilio</Form.Label>
                <Form.Control type="text" ref={this.domicilio} />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName2">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" ref={this.edad} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridGenero">
                <Form.Label>Genero</Form.Label>
                <Form.Control type="text" ref={this.genero} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFNac">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date" ref={this.fechanacimiento} />
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Button variant="success" type="submit">
            Editar
          </Button>
          <Button variant="danger" onClick={(e) => this.handleDelete(e)}>
            Eliminar
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usuarios: state.usuarios,
    //    buscado: state.buscado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buscarUsuarioEditar: (datos) => dispatch(buscarUsuarioEditar(datos)),
    editarUsuario: (datos) => dispatch(editarUsuario(datos)),
    eliminarUsuario: (datos) => dispatch(eliminarUsuario(datos)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditor);
