import express from 'express'
import connectDB from './client/db.js';
import 'dotenv/config'
import cors from 'cors'

import usersRouter from './routes/usersRouter.js';
import recettesRouter from './routes/recettesRouter.js';
import authRouter from './routes/authRouter.js';


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/api', usersRouter, recettesRouter, authRouter)


connectDB();
 
app.listen(3000, () => {
    console.log('le serveur tourne sur le port 3000')
})



