import { Router } from 'express'

const divisionRouter = Router()

divisionRouter.get('/', (request, response) => {
  return response.json({ message: 'Divisions first endpoint'})
})

divisionRouter.get('/:name', (request, response) => {
  return response.json({ message: 'Divisions first endpoint'})
})

export default divisionRouter
