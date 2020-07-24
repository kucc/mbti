import { Injectable, Get } from '@nestjs/common';
import { QuestionEntity } from './question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  public constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) {}

  public async getAllQuestion() {
    return await this.questionRepository.find();
  }
}
