import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from 'src/comment/comment.entity';

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

  @OneToMany(
    type => CommentEntity,
    comment => comment.user,
  )
  public comments: CommentEntity[];
}
