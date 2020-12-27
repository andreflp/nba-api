import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreateAtlanticTeams1608997707786 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Atlantic' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Boston', 'Celtics', 'TD Garden', 'Boston, Massachusetts', ARRAY ['1957', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1968', '1969', '1974', '1976', '1981', '1984', '1986', '2008'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/boston-celtics.png', '${division.conferenceId}', '${division.id}'),
        ('Brooklyn', 'Nets', 'Barclays Center', 'New York City, New York', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/brooklyn-nets.png', '${division.conferenceId}', '${division.id}'),
        ('New York', 'Knicks', 'Madison Square Garden', 'New York City, New York', ARRAY ['1970', '1973'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/new-york-knicks.png', '${division.conferenceId}', '${division.id}'),
        ('Philadelphia', '76ers', 'Wells Fargo Center', 'Philadelphia, Pennsylvania', ARRAY ['1955', '1967', '1983'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/philadelphia-76ers.png', '${division.conferenceId}', '${division.id}'),
        ('Toronto', 'Raptors', 'Scotiabank Arena', 'Toronto, Ontario', ARRAY ['2019'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/toronto-raptors.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
