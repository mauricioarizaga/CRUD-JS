const Users = (sequelize, S) => {
  const User = sequelize.define(
    "users",
    {
      nombrecompleto: {
        type: S.STRING,
        allowNull: false,
      },
      dni: {
        type: S.TEXT,
        allowNull: false,
      },
      domicilio: {
        type: S.STRING,
        allowNull: false,
      },
      edad: {
        type: S.INTEGER,
        allowNull: false,
      },
      genero: {
        type: S.STRING,
        allowNull: false,
      },
      fechanacimiento: {
        type: S.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};

module.exports = Users;
