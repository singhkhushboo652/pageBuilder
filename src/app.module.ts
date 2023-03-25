import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PageComponentsModule } from './page-components/page-components.module';
import { WarRoomModule } from './war-room/war-room.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/madfunnel'), PageComponentsModule, WarRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
