import { Router } from 'express'

const teamRouter = Router()

teamRouter.get('/', (request, response) => {
  return response.json({ message: 'Team first endpoint'})
})

teamRouter.get('/:name', (request, response) => {
  return response.json({ message: 'Team first endpoint'})
})

export default teamRouter
