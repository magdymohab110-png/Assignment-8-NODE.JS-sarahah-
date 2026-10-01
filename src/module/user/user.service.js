import { Decrypt, Encrypt } from "../../common/security/encrypt.js";
import { Compare, Hash } from "../../common/security/hash.js";
import * as dbService from "../../DB/db.service.js"
import userModel from "../../DB/model/user.model.js"


// sign up user

export const signUp = async(req,res ,next)=>{
const {fName , lName , email , password , age , gender , phone } = req.body;
if( await dbService.findOne({
    model : userModel,
    data : {email : email.toLowerCase()}
})){
    throw new Error("email already exist" , {cause : 409})
}

const user = await dbService.create({
    model : userModel,
    data : {fName , lName , email , password : Hash(password , 12) , age , gender , phone : Encrypt(phone)}
})
return res.status(201).json({message : "user Created successfully" , user})

};
 // ===============================================================================

 // sign in user
 
export const signIn = async (req,res,next) =>{
const {email , password} = req.body;
const user = await dbService.findOne({
    model : userModel,
    data : {email : email.toLowerCase()}
});
if(!user){
    throw new Error("user not exist" , {cause : 404});
}


if(!Compare(password, user.password)){
    throw new Error("invalid password" , {cause : 400});
}

return res.status(200).json({message : "done" , user : {...user._doc , phone : Decrypt(user.phone)}})
}