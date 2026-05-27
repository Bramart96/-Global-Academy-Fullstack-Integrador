const express = require("express");
const { body } = require("express-validator");
const validate = require("../middlewares/validate");
const AuthController = require("../controllers/authcontroller");

const router = express.Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").isEmail().withMessage("El email no es válido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("El password debe tener al menos 6 caracteres"),
  ],
  validate,
  AuthController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("El email no es válido"),
    body("password").notEmpty().withMessage("El password es requerido"),
  ],
  validate,
  AuthController.login
);

module.exports = router;