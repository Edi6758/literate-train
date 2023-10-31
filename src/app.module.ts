import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValuesModule } from './values/values.module';

@Module({
  imports: [ValuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
