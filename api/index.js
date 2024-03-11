import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import path from 'path';
import cookieParser from 'cookie-parser';
dotenv.config()

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("Connected to MnogoDB");
})  
.catch((e)=>{
    console.log(e);
});

const app = express();

const  __dirname = path.resolve();

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','dist','index.html'));
});
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () =>{
    console.log('server listening on port 3000');
});


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal  Server Error";
    return  res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
});
