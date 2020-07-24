import { Controller, Get } from '@nestjs/common';

import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  public constructor(private readonly questionService: QuestionService) {}

  @Get()
  public async getAllQuestions() {
    return await this.questionService.getAllQuestion();
  }
}
