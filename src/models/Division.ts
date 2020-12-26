import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Conference from './Conference'
import Team from './Team'

@Entity('divisions')
export class Division {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => Conference, conference => conference.divisions, { eager: true })
  @JoinColumn({ name: 'conference_id' })
  conference: Conference

  @Column({ name: 'conference_id'})
  conferenceId: string

  @OneToMany(() => Team, team => team.division)
  teams: Team[]
}

export default Division
