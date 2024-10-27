import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db'; 
import noteRoutes from  './routes/notes'
import authRoutes from  './routes/auth'

// 
dotenv.config()

// connect DB
db()

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', noteRoutes) // notes  routes
app.use('/api', authRoutes) // auth  routes


const PORT =  process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})