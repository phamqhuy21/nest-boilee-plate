import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ROLE } from './declare.type';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  displayname: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLE, default: ROLE.USER })
  role: ROLE;
}
