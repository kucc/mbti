import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { SummaryController } from './summary/summary.controller';
import { SummaryModule } from './summary/summary.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, QuestionModule, SummaryModule, TypeOrmModule.forRoot()],
  controllers: [AppController, SummaryController],
  providers: [AppService],
})
export class AppModule {}
