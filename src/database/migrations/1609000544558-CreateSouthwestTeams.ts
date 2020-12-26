import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreateSouthwestTeams1609000544558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Southwest' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Dallas', 'Mavericks', 'American Airlines Center', 'Dallas, Texas', ARRAY ['2011'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/dallas-mavericks.png', '${division.conferenceId}', '${division.id}'),
        ('Houston', 'Rockets', 'Toyota Center', 'Houston, Texas', ARRAY ['1994', '1995'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/houston-rockets.png', '${division.conferenceId}', '${division.id}'),
        ('Memphis', 'Grizzlies', 'FedExForum', 'Memphis, Tennessee', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/memphis-grizzlies.png', '${division.conferenceId}', '${division.id}'),
        ('New Orleans', 'Pelicans', 'Smoothie King Center', 'New Orleans, Louisiana', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/new-orleans-pelicans.png', '${division.conferenceId}', '${division.id}'),
        ('San Antonio', 'Spurs', 'AT&T Center', 'San Antonio, Texas', ARRAY ['1999', '2003', '2005', '2007', '2014'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/san-antonio-spurs.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
