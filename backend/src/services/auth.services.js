const bcrypt = require("bcryptjs");
const User = require("../models/user.models"); 
const generateJWT = require("../utils/generateJWT.js");
const axios = require("axios");

const AuthService = {
  register: async ({ email, password, username }) => {
    try {
      //const apiKey = process.env.ABSTRACT_API_KEY; 
     // const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);

      //if (!response.data.is_valid_format.value || response.data.deliverability !== "DELIVERABLE") {
      //  return { statusCode: 400, message: "El email no es válido o no puede recibir correos" };
     // }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return { statusCode: 404, message: "El usuario ya existe" };
      }

      const encodedPassword = bcrypt.hashSync(password, 10);
      const newUser = new User({
        username,
        email,
        password: encodedPassword
      });

      await newUser.save();
      return { user: { id: newUser._id, username: newUser.username, email: newUser.email } };

    } catch (error) {
      console.error(error);
      return { statusCode: 500, message: "Error en el registro" };
    }
  },

  login: async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });  
    if (!user)
      return { statusCode: 404, message: "El usuario no existe" };

    const validatedPassword = bcrypt.compareSync(password, user.password);
    if (!validatedPassword)
      return { statusCode: 401, message: "Credenciales inválidas" };

    const token = await generateJWT(user._id);

    return { token, user: { id: user._id, username: user.username, email: user.email } };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, message: "Error en el login" };
  }
}

};

module.exports = AuthService;
