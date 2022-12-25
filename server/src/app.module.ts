import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
})
export class AppModule {}
