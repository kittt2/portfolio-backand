import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            reuired:true,
            umique:true,
        },
        text:{
            type:String,
            reuired:true,
        }
    },{timestamps:true }
);
export default mongoose.model("data",userSchema);