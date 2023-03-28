import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    name: 'card_detail',
    required: true,
    type: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      cardNumber: { type: String, required: true },
    },
  })
  cardDetail: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);
