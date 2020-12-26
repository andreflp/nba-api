import { EntityRepository, getCustomRepository, getRepository, Repository } from 'typeorm'

import AppError from '../errors/AppError'
import Division from '../models/Division'
import Team from '../models/Team'

interface Request {
  name: string
}

@EntityRepository(Team)
class DivisionsRepository extends Repository<Team> {
  public async findTeamsByDivision({ name }: Request): Promise<Team[]> {
    const divisionRepository = getRepository(Division)
    const teamRepository = getRepository(Team)

    const division = await divisionRepository.createQueryBuilder("divisions")
      .where("LOWER(name) = LOWER(:name)", { name })
      .getOne()

    if (!division) {
      throw new AppError('This division does not exist.')
    }

    const teams = await teamRepository.createQueryBuilder("teams")
      .where("teams.division_id = :divisionId", { divisionId: division.id })
      .getMany()

    return teams
  }
}

export default DivisionsRepository
