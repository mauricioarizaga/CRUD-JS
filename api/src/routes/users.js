const server = require("express").Router();
const { Router } = require("express");
const router = Router();
const { Users } = require("../models/index.js");

server.post("/nuevo", (req, res) => {
  Users.create({
    nombrecompleto: req.body.nombrecompleto,
    dni: req.body.dni,
    domicilio: req.body.domicilio,
    edad: req.body.edad,
    genero: req.body.genero,
    fechanacimiento: req.body.fechanacimiento,
  }).then((user) => {
    res.json(user);
    return user;
  });
});

server.get("/buscar/:dni", function (req, res) {
  Users.findOne({
    where: { dni: req.params.dni },
  }).then((user) => res.json(user));
});

server.delete("/:id", function (req, res) {
  delUsuario(req.params).then(() => {
    res.sendStatus(200);
  });
});

function delUsuario(user) {
  console.log(user);
  if (user.id) {
    return Users.destroy({
      where: {
        id: user.id,
      },
    });
  } else {
    return "Ese usuario no existe";
  }
}

server.put("/editar", function (req, res) {
  Users.findOne({
    where: {
      id: req.body.id,
    },
  })
    .then((user) => {
      res.json(user);
      return user;
    })
    .then((user) =>
      user.update({
        nombrecompleto: req.body.nombrecompleto,
        dni: req.body.dni,
        domicilio: req.body.domicilio,
        edad: req.body.edad,
        genero: req.body.genero,
        fechanacimiento: req.body.fechanacimiento,
      })
    )
    .then((result) => {
      res.json(result);
      return result;
    });
});

server.get("/todos", function (req, res) {
  Users.findAll().then((users) => res.json(users));
});

module.exports = server;
