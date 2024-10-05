import express from 'express'
import dotenv from 'dotenv'
import { connect } from './DB/connection.js'
import router from './routes/userRoutes.js'
import cors from 'cors'

const app = express()

dotenv.config()

const URL = process.env.URL
const PORT = process.env.PORT

connect(URL)

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(PORT ,()=>{
    console.log('Server UP!')
})