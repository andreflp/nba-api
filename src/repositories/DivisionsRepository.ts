import { EntityRepository, getCustomRepository, getRepository, Repository } from 'typeorm'

import AppError from '../errors/AppError'
import Conference from '../models/Conference'
import Division from '../models/Division'

interface Request {
  name: string
}

@EntityRepository(Division)
class DivisionsRepository extends Repository<Division> {
  public async findDivisionsByConference({ name }: Request): Promise<Division[]> {
    const conferenceRepository = getRepository(Conference)
    const divisionRepository = getRepository(Division)

    const conference = await conferenceRepository.createQueryBuilder("conferences")
      .where("LOWER(name) = LOWER(:name)", { name })
      .getOne()

    if (!conference) {
      throw new AppError('This conference does not exist.')
    }

    const divisions = await divisionRepository.createQueryBuilder("divisions")
      .where("divisions.conference_id = :conferenceId", { conferenceId: conference.id })
      .getMany()

    return divisions
  }
}

export default DivisionsRepository
