import express from 'express'
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const PORT = 3000;
app.use(express.json());
app.use(cors())

app.use('/api/student',studentRoutes)
app.get('/', (req, res) => {
  res.send('Backend is running successfully 🚀');
});

try{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("mongoDB connected..")
}catch(error){
    console.log(error)
}
app.listen(PORT,()=>{
    console.log("App is running on the port number : 3000")
})