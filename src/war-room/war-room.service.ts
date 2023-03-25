import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WarRoom } from 'src/schemas/war-room.schema';


@Injectable()
export class WarRoomService {
    constructor(@InjectModel(WarRoom.name) private readonly warRoom: Model<WarRoom>) {}

    async create(dto: WarRoom): Promise<WarRoom> {
        const createWarRoom = new this.warRoom(dto);
        return createWarRoom.save();
    }

    async findAll(): Promise<WarRoom[]> {
        return this.warRoom.find().exec();
    }

    async getWarRoom(id){
        return this.warRoom.findById(id);
    }

    async update(id: string, dto: WarRoom): Promise < WarRoom > {
        return this.warRoom.findByIdAndUpdate(id, dto);
    }
}
