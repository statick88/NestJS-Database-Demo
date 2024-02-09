import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  getHello(): any[] {
    return this.databaseService.getData();
  }
}
