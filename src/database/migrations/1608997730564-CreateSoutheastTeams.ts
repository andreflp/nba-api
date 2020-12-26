import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreateSoutheastTeams1608997730564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Southeast' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Atlanta', 'Hawks', 'State Farm Arena', 'Atlanta, Georgia', ARRAY ['1958'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/atlanta-hawks.png', '${division.conferenceId}', '${division.id}'),
        ('Charlotte', 'Hornets', 'Spectrum Center', 'Charlotte, North Carolina', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/charlotte-hornets.png', '${division.conferenceId}', '${division.id}'),
        ('Miami', 'Heat', 'American Airlines Arena', 'Miami, Florida', ARRAY ['2006', '2012', '2013'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/miami-heat.png', '${division.conferenceId}', '${division.id}'),
        ('Orlando', 'Magic', 'Amway Center', 'Orlando, Florida', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/orlando-magic.png', '${division.conferenceId}', '${division.id}'),
        ('Washington', 'Wizards', 'Capital One Arena', 'Washington, D.C.', ARRAY ['1978'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/washington-wizards.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
