import express,{Express} from "express"
import cors from "cors"
import UserRouter from "./Routers/User"



const app:Express = express()
app.use(cors())
app.use(express.json())  

app.use("/api/users",UserRouter)

app.listen(4500,()=>{
    console.log("hello first bun server on 4500");
})