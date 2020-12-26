import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import 'express-async-errors'

import routes from './routes'
import cors from 'cors'
import createConnection from './database'
import { errorMiddleware } from './middlewares/ErrorsMiddleware'

createConnection()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errorMiddleware)

export default app;
