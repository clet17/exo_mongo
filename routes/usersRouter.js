import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUsersById, updateUser } from "../controllers/userController.js";
import { VerifyUserFields } from "../middlewares/verifyUserCreation.js";

const usersRouter = Router()

usersRouter.get('/users', getAllUsers)
usersRouter.get('/users/:id', getUsersById)

usersRouter.post('/users',VerifyUserFields, createUser)

usersRouter.put('/users/:id', updateUser)

usersRouter.delete('/users/:id', deleteUser)

export default usersRouter