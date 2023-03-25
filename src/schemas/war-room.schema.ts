import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type WarRoomDocument = HydratedDocument<WarRoom>;

@Schema({ timestamps: true, collection:'warrooms'})
export class WarRoom {
    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string
    
    @Prop()
    createBy: number;

    @Prop()
    content: string

}

function getJson(){

}

export const WarRoomSchema = SchemaFactory.createForClass(WarRoom);
