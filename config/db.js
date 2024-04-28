import mongoose from "mongoose";



const connectDb = async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect to database succesfully 
    Conneted To Mongodb Databse ${conn.connection.host}`)
}
catch(error){
    console.log("error in connecting database")

}
};

export default connectDb;