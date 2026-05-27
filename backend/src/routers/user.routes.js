const express = require("express");
const { body, param } = require("express-validator");
const validate = require("../middlewares/validate");
const UserController = require("../controllers/usercontroller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


router.get("/", authMiddleware, UserController.getUsers);


router.get(
  "/:id",
  [param("id").isMongoId().withMessage("El ID no es válido")],
  validate,
  authMiddleware,
  UserController.getUserById
);


router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("El ID no es válido"),
    body("username").optional().notEmpty().withMessage("El username no puede estar vacío"),
    body("email").optional().isEmail().withMessage("El email debe ser válido"),
  ],
  validate,
  authMiddleware,
  UserController.updateUser
);


router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("El ID no es válido")],
  validate,
  authMiddleware,
  UserController.deleteUser
);


router.get(
  "/by-username/:username",
  [param("username").notEmpty().withMessage("El username es requerido")],
  validate,
  UserController.getUserByUsername
);

module.exports = router;
