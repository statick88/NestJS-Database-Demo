import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [],
  controllers: [AppController, HelloController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
