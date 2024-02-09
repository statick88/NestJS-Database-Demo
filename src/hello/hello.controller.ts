// src/hello/hello.controller.ts

import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../database/database.service'; // Importa el servicio de base de datos

@Controller('hello')
export class HelloController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  getHello(): any[] {
    return this.databaseService.getData(); // Usa el método correcto del servicio de base de datos
  }
}
