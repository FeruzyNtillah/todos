import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/todos'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/todos', todoRoutes)

const PORT = 3001
const MONGO_URI = 'mongodb://localhost:27017/todos'

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => console.error('MongoDB connection error:', err))