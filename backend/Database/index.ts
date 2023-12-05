import mongoose from "mongoose";

// const connect:any; 

const connection =  await mongoose.connect("mongodb://localhost:27017/testbun")  


export default connection