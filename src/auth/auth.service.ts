import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async login(data: LoginDto): Promise<any> {
    // Logic for user login
    return { message: 'User logged in', data };
  }

  async logout(userId: string): Promise<any> {
    // Logic for user logout
    return { message: 'User logged out', userId };
  }
}
