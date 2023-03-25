import { Module } from '@nestjs/common';
import { WarRoomService } from './war-room.service';
import { WarRoomController } from './war-room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WarRoomSchema, WarRoom } from 'src/schemas/war-room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WarRoom.name, schema: WarRoomSchema}])
  ],
  providers: [WarRoomService],
  controllers: [WarRoomController]
})
export class WarRoomModule {}
