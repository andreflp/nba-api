import { Router } from 'express'
import divisionRouter from './division.routes'
import conferenceRouter from './conference.routes'
import teamRouter from './team.routes'

const routes = Router()

routes.use('/conferences', conferenceRouter)
routes.use('/divisions', divisionRouter)
routes.use('/teams', teamRouter)

export default routes
