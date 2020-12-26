import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import Conference from './Conference'
import Division from './Division'

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Conference, conference => conference.teams, { eager: true })
  @JoinColumn({ name: 'conference_id' })
  conference: Conference

  @Column({ name: 'conference_id'})
  conferenceId: string

  @ManyToOne(() => Division, division => division.teams, { eager: true })
  @JoinColumn({ name: 'division_id' })
  division: Division

  @Column({ name: 'division_id'})
  divisionId: string

  @Column()
  name: string

  @Column({ name: 'nick_name' })
  nickName: string

  @Column()
  arena: string

  @Column()
  location: string

  @Column('text', { array: true })
  titles: string[]

  @Column()
  logo: string
}

export default Team
