import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import {Util} from '../system/util'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    async create(@Body() user: Partial<User>): Promise<User> {
        user.email = Util.emailValidate(user.email);
        return this.userService.create(user);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }
}