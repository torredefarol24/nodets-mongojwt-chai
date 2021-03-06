import {Router} from 'express'
import UserController from '../controllers/user/userController'

let userRouter: Router = Router()

userRouter.post("/create", UserController.createNewUser)
userRouter.post("/authenticate", UserController.loginUser)
userRouter.post('/refresh/token', UserController.refreshToken)

export default userRouter
