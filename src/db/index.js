import mongoose from "mongoose";


const connectDB=async()=>{
    try{
        const connectionDB=await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected: ${connectionDB.connection.host}`);
    }catch(error){
        console.error("Mongoose connection Error : ",error);
        process.exit(1);

        
    }
}

export default connectDB