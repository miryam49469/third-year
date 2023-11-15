const express = require("express");
const userController= require("../controllers/userController.js");
const userRouter = express.Router();


userRouter.put("/:id",userController.update);

userRouter.post("/:id",userController.create);

userRouter.delete("/:id",userController.delete);


module.exports =userRouter;