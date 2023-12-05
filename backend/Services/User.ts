import User from "../Models/User";
import { IUser } from "../Models/User";

export const createUser = async function ({name,email,phoneNumber} :IUser):Promise<IUser>{
   try{
      return await User.create({
        name:name,
        email:email,
        phoneNumber:phoneNumber
      })
      
   }
   catch(err){
    throw err 
   }
}

export const getAllUser = async function():Promise<IUser[]>{
   try{
      return await User.find()
   }
   catch(err){
     throw err
   }
}

export const getOneUser = async function(id:string):Promise<IUser|null>{
   try{
     return await User.findById(id)
   }
   catch(err){
      throw err
   }
}

export const deleteOne = async function(id:string):Promise<void>{
   try{
     await User.deleteOne({_id:id});
   }
   catch(err){
      throw err
   }
}

export const update = async function (id:string,data:any):Promise<IUser|null>{
   try{
     await User.updateOne({_id:id},data)
     return await User.findById(id)
   }
   catch(err){
     throw err
   }
}