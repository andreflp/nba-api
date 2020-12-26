import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreateNorthwestTeams1609000520379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Northwest' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Denver', 'Nuggets', 'Ball Arena', 'Denver, Colorado', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/denver-nuggets.png', '${division.conferenceId}', '${division.id}'),
        ('Minnesota', 'Timberwolves', 'Target Center', 'Minneapolis, Minnesota', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/minnesota-timberwolves.png', '${division.conferenceId}', '${division.id}'),
        ('Oklahoma City', 'Thunder', 'Chesapeake Energy Arena', 'Oklahoma City, Oklahoma', ARRAY ['1979'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/oklahoma-city-thunder.png', '${division.conferenceId}', '${division.id}'),
        ('Portland', 'Trail Blazers', 'Moda Center', 'Portland, Oregon', ARRAY ['1977'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/portland-trail-blazers.png', '${division.conferenceId}', '${division.id}'),
        ('Utah', 'Jazz', 'Vivint Smart Home Arena', 'Salt Lake City, Utah', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/utah-jazz.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
