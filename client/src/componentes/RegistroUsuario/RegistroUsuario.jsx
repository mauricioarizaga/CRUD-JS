import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, FormControl, Container } from "react-bootstrap";
import { registrarUsuario } from "../../redux/actions";

export function RegistroUsuario() {
  const dispatch = useDispatch();
  var [nombrecompleto, setNombre] = useState("");
  var [dni, setDni] = useState();
  var [domicilio, setDomicilio] = useState();
  var [edad, setEdad] = useState();
  var [genero, setGenero] = useState("");
  var [fechanacimiento, setNacimiento] = useState();

  var usuario = {
    nombrecompleto,
    dni,
    domicilio,
    edad,
    genero,
    fechanacimiento,
  };

  function handleSubmit() {
    dispatch(registrarUsuario(usuario));
    alert("El usuario se ha creado satisfactoriamente");
  }

  return (
    <Container>
      <h3>Alta</h3>
      <Form onSubmit={(e) => handleSubmit()}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Nombre y Apellido:</Form.Label>
            <FormControl
              required
              type="text"
              value={nombrecompleto}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>DNI:</Form.Label>
            <FormControl
              required
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Domicilio:</Form.Label>
            <FormControl
              required
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Edad:</Form.Label>
            <FormControl
              required
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Genero:</Form.Label>
            <FormControl
              required
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={7}>
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <FormControl
              required
              type="date"
              value={fechanacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit" variant="success">
          Crear Cuenta
        </Button>
      </Form>
    </Container>
  );
}
