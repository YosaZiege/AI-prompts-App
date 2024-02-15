// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  console.log("process");
  try {
    await mongoose.connect(process.env.MONGODB_URI.toString(), {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
