import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Division from '../../models/Division'

export class CreateCentralTeams1608997716991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const division: any = await getRepository(Division).findOne({ where: { name: 'Central' } })

    await queryRunner.query(`
      INSERT INTO teams (name, nick_name, arena, location, titles, logo, conference_id, division_id)
      VALUES
        ('Chicago', 'Bulls', 'United Center', 'Chicago, Illinois', ARRAY ['1991', '1992', '1993', '1996', '1997', '1998'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/chicago-bulls.png', '${division.conferenceId}', '${division.id}'),
        ('Cleveland', 'Cavaliers', 'Rocket Mortgage FieldHouse', 'Cleveland, Ohio', ARRAY ['2016'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/cleveland-cavaliers.png', '${division.conferenceId}', '${division.id}'),
        ('Detroit', 'Pistons', 'Little Caesars Arena', 'Detroit, Michigan', ARRAY ['1989', '1990', '2004'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/detroit-pistons.png', '${division.conferenceId}', '${division.id}'),
        ('Indiana', 'Pacers', 'Bankers Life Fieldhouse', 'Indianapolis, Indiana', '{}', 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/indiana-pacers.png', '${division.conferenceId}', '${division.id}'),
        ('Milwaukee', 'Bucks', 'Fiserv Forum', 'Milwaukee, Wisconsin', ARRAY ['1971'], 'https://nba-api-logos.s3-sa-east-1.amazonaws.com/milwaukee-bucks.png', '${division.conferenceId}', '${division.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM teams;`)
  }
}
