import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  email: string;

  @Column({ length: 15, nullable: false })
  name: string;

  @Column({ length: 2000 })
  avatar: string;
}
