// src/database/database.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private readonly data: any[] = [];

  constructor() {
    // Emular datos de ejemplo
    for (let i = 1; i <= 10; i++) {
      this.data.push({ id: i, name: `Usuario ${i}` });
    }
  }

  getData(): any[] {
    return this.data;
  }
}
