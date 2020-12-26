import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import Conference from '../models/Conference'
import DivisionsRepository from '../repositories/DivisionsRepository'

const conferenceRouter = Router()

conferenceRouter.get('/', async (request, response) => {
  const conferenceRepository = getRepository(Conference)

  const conferences = await conferenceRepository.find()

  return response.json(conferences)
})

conferenceRouter.get('/:name', async (request, response) => {
  const { name } = request.params
  const conferenceRepository = getRepository(Conference)

  const conference = await conferenceRepository.createQueryBuilder('conferences')
    .where('LOWER(name) = LOWER(:name)', { name })
    .getOne()

  return response.json(conference)
})

conferenceRouter.get('/:name/divisions', async (request, response) => {
  const { name } = request.params
  const divisionsRepository = getCustomRepository(DivisionsRepository)

  const divisions = await divisionsRepository.findDivisionsByConference({ name })

  return response.json(divisions)
})

export default conferenceRouter
