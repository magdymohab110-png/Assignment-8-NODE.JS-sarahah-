import { port } from './config/config.js';
import express from "express";
import connectDB from './DB/connectionDB.js';
import userRouter from './module/user/user.controller.js';


const app = express();

const bootstrap = async()=>{
    app.use(express.json());
    
    app.get("/" , (req,res,next)=>{
        return res.status(200).json({message : "hello in our Assingment 8 (sarahah)"});
    })

    await connectDB();
    
    app.use("/users" , userRouter);

    
    app.all("{/*demo}" , (req,res,next)=>{
        throw new Error(`the Url : ${req.originalUrl} with method : ${req.method} not found`
            ,{cause :404}
        );
    })
    
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.cause || 500).json({err : err.message , stack :err.stack});
});
    
    app.listen(port , ()=>{
        console.log(`server is running in port : ${port}`);
        
    })
}


export default bootstrap