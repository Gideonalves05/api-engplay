import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}
    
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDTO: CreateUserDto) {
        return this.userService.create(createUserDTO);
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDTO: UpdateUserDto) {
        return this.userService.update(id, updateUserDTO);
    }
     
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }
}
