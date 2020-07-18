import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import styles from "./Producto.module.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Producto(producto) {
  const carrito = useSelector((store) => store.carrito);
  const {
    nombrecompleto,
    edad,
    valor,
    id,
    categorias,
    imagen,
    cantidad,
  } = producto;
  const dispatch = useDispatch();

  function chequear(source, target) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].id === target.id) {
        return true;
      }
    }
  }

  return (
    <div className={styles.producto}>
      <h3>{nombrecompleto}</h3>
      <div>
        <h5>${edad}</h5>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    producto: state.Producto,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto);
