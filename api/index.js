import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("Connected to MnogoDB");
})  
.catch((e)=>{
    console.log(e);
});

const app = express();

app.listen(3000, () =>{
    console.log('server listening on port 3000');
});


app.use('/api/user',userRoutes);