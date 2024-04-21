import express from 'express'
import {connect} from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.ts'

dotenv.config()
const app = express()
const port = 3000
const dataBaseUrl = process.env.DATABASE_URL || ''

app.use('/api', userRoutes)
app.get('/', (req, res) => {
    res.send('API customer service is running')
})

connect(dataBaseUrl).then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch((err) => {
    console.error(err)
})



