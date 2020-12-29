import { Router } from 'express'
import divisionRouter from './division.routes'
import conferenceRouter from './conference.routes'
import teamRouter from './team.routes'
import userRouter from './user.routes'
import authenticationRouter from './authentication.routes'

const routes = Router()

routes.use('/auth', authenticationRouter)
routes.use('/users', userRouter)
routes.use('/conferences', conferenceRouter)
routes.use('/divisions', divisionRouter)
routes.use('/teams', teamRouter)

export default routes
