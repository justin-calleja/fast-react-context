import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Todo as TodoModel } from '@prisma/client';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(): Promise<{ data: TodoModel[] }> {
    const todos = await this.todoService.todos();
    return { data: todos };
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string): Promise<{ data: TodoModel }> {
    const todo = await this.todoService.todo({ id: Number(id) });
    if (!todo) {
      throw new NotFoundException();
    }

    return { data: todo };
  }
}
