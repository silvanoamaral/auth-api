import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('logout')
  logout(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  register() {
    // Logic for user registration
    return { message: 'User registered' };
  }

  @Post('profile')
  profile() {
    // Logic for fetching user profile
    return { message: 'User profile fetched' };
  }

  @Post('refresh')
  refresh() {
    // Logic for refreshing user session
    return { message: 'User session refreshed' }; 
  }
}
