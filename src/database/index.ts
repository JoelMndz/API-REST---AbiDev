import mongoose,{connect} from 'mongoose';
import {MONGO_URI} from '../config';

export const connectDB = ()=>{
  mongoose.set('strictQuery', true);
  connect(MONGO_URI as string,()=>{
    console.log('Conectado a MONGODB');    
  });
}