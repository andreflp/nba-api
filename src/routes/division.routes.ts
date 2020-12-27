import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import Division from '../models/Division'
import TeamsRepository from '../repositories/TeamsRepository'
import authentication from '../middlewares/authentication'

const divisionRouter = Router()

divisionRouter.use(authentication)

divisionRouter.get('/', async (request, response) => {
  const divisionRepository = getRepository(Division)

  const teams = await divisionRepository.find()

  return response.json(teams)
})

divisionRouter.get('/:name', async (request, response) => {
  const { name } = request.params
  const divisionRepository = getRepository(Division)

  const division = await divisionRepository.createQueryBuilder('teams')
    .where('LOWER(name) = LOWER(:name)', { name })
    .getOne()

  return response.json(division)
})

divisionRouter.get('/:name/teams', async (request, response) => {
  const { name } = request.params
  const teamRepository = getCustomRepository(TeamsRepository)

  const teams = await teamRepository.findTeamsByDivision({ name })

  return response.json(teams)
})

export default divisionRouter
