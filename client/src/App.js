import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import { UserEditor } from "./componentes/UserEditor/UserEditor";
import { RegistroUsuario } from "./componentes/RegistroUsuario/RegistroUsuario";
import Users2535 from "./componentes/Usuarios/Users2535";
import Todos from "./componentes/Usuarios/Todos";

import Usuario from "./componentes/Usuarios/Usuario";

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/editor" component={UserEditor} />
      <Route exact path="/registro" component={RegistroUsuario} />
      <Route exact path="/usuario" component={Usuario} />
      <Route exact path="/2535" component={Users2535} />
      <Route exact path="/todos" component={Todos} />
    </React.Fragment>
  );
}

export default App;
