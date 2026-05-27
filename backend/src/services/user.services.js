const User = require("../models/user.models");

const UserService = {
  getUsers: async () => await User.find(),

  getUserById: async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  },

  getUserByUsername: async (username) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  },

  updateUser: async (id, newData) => {
    const updated = await User.findByIdAndUpdate(id, newData, { new: true });
    if (!updated) throw new Error("Usuario no encontrado");
    return updated;
  },

  deleteUser: async (id) => {
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) throw new Error("Usuario no encontrado");
    return deleted;
  }
};

module.exports = UserService;