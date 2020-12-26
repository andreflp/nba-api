import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateConferences1608952218169 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO conferences (name)
      VALUES
        ('Western'),
        ('Eastern');
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM conferences;`)
  }

}
