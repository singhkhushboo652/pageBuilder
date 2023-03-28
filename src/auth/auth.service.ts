import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email, password }).exec();
    if (!user) {
      return null;
    }
    return user;
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
    cardDetail: Record<string, any>,
  ): Promise<User> {
    const user = new this.userModel({ name, email, password, cardDetail });
    return user.save();
  }

  async getProfile(uid: number): Promise<User | null> {
    const user = await this.userModel.findOne({ _id: uid }).exec();
    if (!user) {
      return null;
    }
    return user;
  }
}
