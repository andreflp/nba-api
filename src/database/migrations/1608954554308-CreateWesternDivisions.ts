import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Conference from '../../models/Conference'

export class CreateWesternDivisions1608954554308 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const conference: any = await getRepository(Conference).findOne({ where: { name: 'Western' } })

    await queryRunner.query(`
      INSERT INTO divisions (name, conference_id)
      VALUES
        ('Northwest', '${conference.id}'),
        ('Pacific', '${conference.id}'),
        ('Southwest', '${conference.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM divisions;`)
  }
}
