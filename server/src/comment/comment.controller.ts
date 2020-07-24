import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  public constructor(private commentService: CommentService) {}

  @Get('/:result')
  async getCommentsByResult(@Param('result') result: string) {
    // TODO : add Pipe on Param
    const user = await this.commentService.getCommentByResult(result);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
