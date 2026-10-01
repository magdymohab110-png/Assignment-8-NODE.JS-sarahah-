import mongoose from "mongoose";

async function connectDB() {
 try {
 await mongoose.connect("mongodb+srv://mohab:12345@cluster0.lqcy3on.mongodb.net/Assignment_8(Sarahah)" , {serverSelectionTimeoutMS : 5000});
 console.log("DB connected successfully");
    
 } catch (error) {
 console.log("DB failed to connect");
    
 }   
}

export default connectDB