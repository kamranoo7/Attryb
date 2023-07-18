let express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Route/user.routes")
let app=express()
require("dotenv").config()
app.use(express.json())
app.use("/users",userRouter)



//Server connection
app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch{
        console.log(err)
        console.log("Not Connected To DB")
    }
    console.log("Server is running")
})