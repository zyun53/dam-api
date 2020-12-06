import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DamsService } from './dams/dams.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DamsService],
})
export class AppModule {}
