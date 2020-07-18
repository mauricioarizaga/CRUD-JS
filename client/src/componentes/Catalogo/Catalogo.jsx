import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Catalogo.module.css";
import Producto from "../Producto/Producto";
import { Container, Row, Col } from "react-bootstrap";
import { buscarTodos } from "../../redux/actions/index.js";
export class Catalogo extends Component {
  componentDidMount() {
    if (!this.productos) {
      this.props.buscarTodos();
    }
  }

  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col sm={4}></Col>
          <Col sm={8} className={styles.productos}>
            {this.props.productos.map(
              (producto) =>
                !!producto.stock && (
                  <Producto
                    key={producto.id}
                    nombreproducto={producto.nombreproducto}
                    descripcion={producto.descripcion}
                    valor={producto.valor}
                    id={producto.id}
                    imagen={producto.imagen}
                    cantidad={producto.cantidad}
                  />
                )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    productos: state.productos,
    categorias: state.categorias,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buscarTodos: (data) => dispatch(buscarTodos(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
