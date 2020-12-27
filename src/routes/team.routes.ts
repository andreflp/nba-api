import { Router } from 'express'
import { getRepository } from 'typeorm'
import Team from '../models/Team'
import authentication from '../middlewares/authentication'

const teamRouter = Router()

teamRouter.use(authentication)

teamRouter.get('/', async (request, response) => {
  const teamRepository = getRepository(Team)

  const teams = await teamRepository.find({ relations: ['conference', 'division']})

  return response.json(teams)
})

teamRouter.get('/:name', async (request, response) => {
  const { name } = request.params
  const teamRepository = getRepository(Team)

  const teams = await teamRepository.createQueryBuilder('teams')
    .where('LOWER(nick_name) LIKE :nickName', { nickName: `%${name.toLowerCase()}%` })
    .orWhere('LOWER(name) LIKE :name', { name: `%${name.toLowerCase()}%` })
    .getMany()

  return response.json(teams)
})

export default teamRouter
