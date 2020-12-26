import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'
import Conference from '../../models/Conference'

export class CreateEasternDivisions1608954542514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const conference: any = await getRepository(Conference).findOne({ where: { name: 'Eastern' } })

    await queryRunner.query(`
      INSERT INTO divisions (name, conference_id)
      VALUES
        ('Atlantic', '${conference.id}'),
        ('Central', '${conference.id}'),
        ('Southeast', '${conference.id}');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM divisions;`)
  }
}
