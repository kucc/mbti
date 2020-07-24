import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, nullable: false })
  title: string;

  @Column({ length: 2000, nullable: false })
  description: string;

  @Column({ length: 300, nullable: false })
  option1: string;

  @Column({ length: 300, nullable: false })
  option2: string;

  @Column({ length: 3, nullable: false })
  option1Meta: string;

  @Column({ length: 3, nullable: false })
  option2Meta: string;

  @Column()
  answer: number;
}
