import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PageComponentsDocument = HydratedDocument<PageComponents>;

@Schema()
export class PageComponents {
    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string
    
    @Prop()
    type: string;

    @Prop()
    name: string;

    @Prop()
    subType: string;

}

export const PageComponentsSchema = SchemaFactory.createForClass(PageComponents);
