import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
// import dotenv from 'dotenv';
// dotenv.config();

// process.env.MONGO

mongoose.connect("mongodb+srv://saradvakeyur:keyur1507@auth.jbkdgmw.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=auth")
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000, () =>{
    console.log('server listening on port 3000');
});


app.use('/api/user',userRoutes);