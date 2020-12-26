import { Router } from 'express'

const conferenceRouter = Router()

conferenceRouter.get('/', (request, response) => {
  return response.json({ message: 'Conference first endpoint'})
})

conferenceRouter.get('/:name', (request, response) => {
  return response.json({ message: request.params.name})
})

export default conferenceRouter
