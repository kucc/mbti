import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  public constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  public async createComment(
    content: string,
    result: string,
    userId: number,
  ): Promise<CommentEntity> {
    const comment = this.commentRepository.create({
      content,
      result,
      userId,
    });

    await this.commentRepository.save(comment);

    return comment;
  }

  public async getCommentByResult(result: string) {
    const comments = await this.commentRepository.find({
      where: {
        result,
      },
    });

    return comments;
  }
}
