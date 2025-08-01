import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DbCon from './config/db.js'
import AuthRoutes from './routes/Auth.js'
import NotesRoutes from './routes/Notes.js'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
dotenv.config()
const PORT=process.env.PORT
const app=express()

DbCon()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // Replace with your frontend URL


//     origin: "https://notes-theta-henna.vercel.app",
//   credentials: true,
  
}));
 
 // mongoose.connect('mongodb+srv://jaysinghgautam:<db_password>@cluster.ibh37sk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')

app.use(cookieParser())
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/notes',NotesRoutes)

app.get('/',(req,res)=>{
    res.send('hello from backend')
})


app.listen(PORT,()=>{
    console.log(`App is ruuning on Port ${PORT}`)
})




