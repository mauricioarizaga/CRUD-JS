import axios from "axios";

export function registrarUsuario(usuario) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/usuario/nuevo", {
        nombrecompleto: usuario.nombrecompleto,
        dni: usuario.dni,
        domicilio: usuario.domicilio,
        edad: usuario.edad,
        genero: usuario.genero,
        fechanacimiento: usuario.fechanacimiento,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "CREAR_USUARIO", payload: data });
      });
  };
}

export function buscarUsuarioEditar(dni) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/usuario/buscar/" + dni)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "BUSCAR_USUARIO_DNI", payload: data });
      });
  };
}
export function eliminarUsuario(id) {
  return function (dispatch) {
    axios
      .delete("http://localhost:3001/usuario/" + id)
      .then(dispatch({ type: "ELIMINAR_USUARIO" }));
  };
}
export function editarUsuario(datos) {
  return function (dispatch) {
    axios
      .put("http://localhost:3001/usuario/editar", {
        nombrecompleto: datos.nombrecompleto,
        dni: datos.dni,
        domicilio: datos.domicilio,
        edad: datos.edad,
        genero: datos.genero,
        fechanacimiento: datos.fechanacimiento,
        id: datos.id,
      })
      .then(dispatch({ type: "EDITAR_USUARIO" }));
  };
}
