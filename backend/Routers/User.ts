import {Router} from "express"
import * as UserController from "../Controllers/User"
const UserRouter = Router()
 

UserRouter.post("/create",UserController.makeAUser)
UserRouter.get("/all",UserController.findAllUsers)
UserRouter.get("/one/:id",UserController.findOneUser)
UserRouter.put("/update/:id",UserController.updateUser)
UserRouter.delete("/delete/:id",UserController.removeOneUser)


export default UserRouter;