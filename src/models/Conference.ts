import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Division from './Division'
import Team from './Team'

@Entity('conferences')
export class Conference {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Team, team => team.conference)
  teams: Team[]

  @OneToMany(() => Division, division => division.conference)
  divisions: Division[]
}

export default Conference
