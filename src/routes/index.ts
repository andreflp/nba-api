import { Router } from 'express'
import divisionRouter from './division.routes'
import conferenceRouter from './conference.routes'
import teamRouter from './team.routes'
import userRouter from './user.routes'
import authenticationRouter from './authentication.routes'

const routes = Router()

routes.use('/conferences', conferenceRouter)
routes.use('/divisions', divisionRouter)
routes.use('/teams', teamRouter)
routes.use('/users', userRouter)
routes.use('/auth', authenticationRouter)

export default routes
