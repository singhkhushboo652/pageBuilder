import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userModel
      .findOne({ email, password }, '-cardDetail -password -__v')
      .exec();
    if (!user) {
      return null;
    }
    const token = this.jwtService.sign({ id: user._id });
    return { token, user };
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
