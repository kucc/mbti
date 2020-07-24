import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2000, nullable: false })
  content: string;

  @Column({ length: 4, nullable: false })
  result: string;

  @Column()
  userId: number;

  @ManyToOne(
    type => UserEntity,
    user => user.comments,
  )
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  public user: UserEntity;
}
