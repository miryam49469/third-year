const express = require("express");
const userController= require("../controllers/userController.js");
const userRouter = express.Router();


userRouter.put("/:id",userController.update);

userRouter.post("/",userController.create);

userRouter.delete("/:id",userController.delete);

userRouter.delete("/:id",userController.getById);

module.exports =userRouter;