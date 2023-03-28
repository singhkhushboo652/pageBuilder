import { Controller, Post, Body, Inject, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // Call the authService to handle user authentication
    return this.authService.validateUser(body.email, body.password);
  }

  // Register
  @Post('register')
  async register(@Body() body: any) {
    // Call the authService to handle user registration
    return this.authService.registerUser(
      body.name,
      body.email,
      body.password,
      body.cardDetail,
    );
  }

  // Get user profile
  @Get('profile/:id')
  async getProfile(@Param('id') uid: number) {
    // Call the authService to handle user profile
    return this.authService.getProfile(uid);
  }
}
