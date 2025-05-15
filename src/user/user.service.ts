import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService) {}

    async createUser(data: any) {
        return this.prismaService.user.create({
            data,
        });
    }

    async listUsers() {
        return this.prismaService.user.findMany();
    }
}
