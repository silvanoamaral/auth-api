import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    async getAllUsers() {
        return {
            message: 'Hello World',
        }
    }
}
