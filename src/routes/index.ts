import { Router } from 'express'
import divisionRouter from './division.routes'
import conferenceRouter from './conference.routes'
import teamRouter from './team.routes'

const routes = Router()

routes.use('/conference', conferenceRouter)
routes.use('/division', divisionRouter)
routes.use('/team', teamRouter)

export default routes
