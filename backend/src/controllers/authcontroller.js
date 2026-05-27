const AuthService = require("../services/auth.services");

const AuthController = {
  register: async (req, res) => {
    try {
      const result = await AuthService.register(req.body);


      return res.status(201).json("usuario creado");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  },

  login: async (req, res) => {
    try {
      const result = await AuthService.login(req.body);

      if (result.statusCode) {
        return res.status(result.statusCode).json({ message: result.message });
      }

      return res.status(200).json({ token: result.token, user: result.user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  }
};

module.exports = AuthController;