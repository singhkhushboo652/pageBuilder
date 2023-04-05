import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PageComponentsModule } from './page-components/page-components.module';
import { WarRoomModule } from './war-room/war-room.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://172.17.0.4:27017/madfunnel'),
    MongooseModule.forRoot('mongodb://172.17.0.3:27017/madfunnel'),
    PageComponentsModule,
    WarRoomModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
