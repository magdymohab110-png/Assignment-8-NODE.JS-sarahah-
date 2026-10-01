import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName : {
        type:String,
        required: [true , "first name is required"],
        trim : true,
        minLength : 2,
        maxLength : 20
    },
    lName :{
        type : String,
        required : [true , "last name is required"],
        trim : true,
        minLength : 2,
        maxLength : 20
    },
    email :{
        type : String,
        required : [true , "email is required"],
        trim : true,
        unique : true,
        lowercase : true,
        validate:{
            validator : function(v){
                return v.includes("@");
            },message : "email invalid"
        },
    },
    password :{
        type : String,
        required: [true , "password is required"],
        trim : true
    },
    age:{
        type : Number,
        required: [true , "age is requied"],
        min : 18,
        max : 60
    },
    gender :{
        type : String,
        enum :["male" , "female"],
        default :"male"
    },
    prfileImage : String,
    phone:{
        type : String,
        required : true
    },
    provider :{
        type : String,
        enum :["system" , "google"],
        default : "system"
    },
    isConfirmed :{
        type : Boolean,
        default : false
    }
} ,{
    timestamps : true,
    strict : true, // default true
    strictQuery : true, // default true
    toJSON :{ virtuals : true},
    toObject : {virtuals : true}
})


const userModel = mongoose.models.User || mongoose.model("User" , userSchema);

export default userModel