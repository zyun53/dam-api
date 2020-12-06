import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DamsService } from './dams/dams.service';
import { DamsController } from './dams/dams.controller';
import { DamsModule } from './dams/dams.module';

@Module({
  imports: [DamsModule],
  controllers: [AppController, DamsController],
  providers: [AppService, DamsService],
})
export class AppModule {}
