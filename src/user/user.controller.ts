import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() userData: { name: string; email: string }) {
        return this.userService.createUser(userData);
    }

    @Get()
    async getAllUsers() {
        return this.userService.listUsers();
    }
}
