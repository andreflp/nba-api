import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreatePacificTeams1609000534466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Pacific' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Golden State', 'Warriors', 'Chase Center', 'San Francisco, California', ARRAY ['1947', '1956', '1975', '2015', '2017', '2018'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/golden-state-warriors.png', '${division.conferenceId}', '${division.id}'),
        ('Los Angeles', 'Clippers', 'Staples Center', 'Los Angeles, California', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/los-angeles-lakers.png', '${division.conferenceId}', '${division.id}'),
        ('Los Angeles', 'Lakers', 'Staples Center', 'Los Angeles, California', ARRAY ['1949', '1950', '1952', '1953', '1954', '1972', '1980', '1982', '1985', '1987', '1988', '2000', '2001', '2002', '2009', '2010', '2020'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/los-angeles-clippers.png', '${division.conferenceId}', '${division.id}'),
        ('Phoenix', 'Suns', 'PHX Arena', 'Phoenix, Arizona', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/phoenix-suns.png', '${division.conferenceId}', '${division.id}'),
        ('Sacramento', 'Kings', 'Golden 1 Center', 'Sacramento, California', ARRAY ['1951'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/sacramento-kings.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
