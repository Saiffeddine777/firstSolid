import connection from "../Database";

export interface IUser {
    name : string;
    email:string;
    phoneNumber :string;
}

const UserSchema = new connection.Schema<IUser>({
    name:{
     type:String,
     required:true
    },
    email:{
     type:String,
     required:true
    },
    phoneNumber:{
     type:String,
     required:true
    }
})

const User = connection.model<IUser>("User",UserSchema)

export default User

