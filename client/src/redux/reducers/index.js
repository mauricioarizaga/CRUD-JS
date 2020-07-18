const initialState = {
  usuarios: [],
  buscado: "",
  usuario: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "CREAR_USUARIO") {
    return {
      ...state,
      usuarios: action.payload,
    };
  }
  if (action.type === "TRAER_USUARIOS") {
    return {
      ...state,
      usuarios: action.payload,
    };
  }

  if (action.type === "ELIMINAR_USUARIO") {
    return {
      ...state,
    };
  }

  return state;
}
export default rootReducer;
