const User = require("../models/user.models");
const UserService = require("../services/user.services");

const UserController = {
  getUsers: async (req, res) => {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

  getUserByUsername: async (req, res) => {
    try {
      const user = await UserService.getUserByUsername(req.params.username);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await UserService.deleteUser(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

module.exports = UserController;