import express from 'express'
import connectDB from './client/db.js';
import 'dotenv/config'
import usersRouter from './routes/usersRouter.js';


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', usersRouter)

connectDB();
 
app.listen(3000, () => {
    console.log('le serveur tourne sur le port 3000')
})



