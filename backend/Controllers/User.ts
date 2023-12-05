import {Request,Response, json} from "express"
import { IUser } from "../Models/User"
import * as UserService from "../Services/User"

export const makeAUser = async function(req:Request<IUser>,res:Response):Promise<void>{
    const {name , email ,phoneNumber} = req.body
    try{
      const newUser = await UserService.createUser({name , email ,phoneNumber})
      res.status(200).json(newUser)
    }
    catch(err){
      res.status(500).json(err)
      throw err
    }
}

export const findAllUsers = async function(req:Request,res:Response):Promise<void>{
  try{
    const Users = await UserService.getAllUser()
    res.status(200).json(Users)
  }
  catch(err){
    res.status(500).json(err)
    throw err
  }
}

export const findOneUser = async function (req:Request,res:Response):Promise<void>{
  const id :string = req.params.id
  try{ 
    const user = await UserService.getOneUser(id)
    res.status(200).json(user)
  }
  catch(err){
    res.status(500).json(err)
    throw err
  }
}

export const removeOneUser = async function(req:Request,res:Response):Promise<void>{
  const id :string = req.params.id
  try{
    const user = await UserService.deleteOne(id)
    res.status(200).json({message:"User Deleted"})
  }
  catch(err){
    res.status(500).json(err)
    throw err
  }
}

export const updateUser = async function(req:Request,res:Response):Promise<void>{
   const id :string = req.params.id
   const data :any = req.body
   try{
    const updated = await UserService.update(id,data)
    res.status(200).json(updated)
   }
   catch(err){
    res.status(500).json(err)
    throw err
   }
}