import express from 'express'
import {connect} from 'mongoose'
import userRoutes from './routes/userRoutes.ts'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config()
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dataBaseUrl = process.env.DATABASE_URL || ''

app.use('/api', userRoutes)
app.get('/', (req, res) => {
    res.send('API customer service is running')
})

connect(dataBaseUrl).then(() => {
    console.log('Connected to MongoDB')
    app.listen(3002, () => {
        console.log(`App listening on port 3002`)
    })
}).catch((err) => {
    console.error(err)
})



