import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService} from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //represent route -> /users
export class UsersController {

    constructor(private readonly us:UsersService) {}

    @Get() //represent route -> /users 
    getAllUsers(@Query('role') role?: "ADMIN" | "INTERN" | "ENGINEER"){
        return this.us.getAllUsers(role); //Return all users
    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id: Number) {
        return this.us.getUserById(id) //Return user with id
    }

    @Post()
    createUser(@Body(ValidationPipe) user:CreateUserDto){
        return this.us.createUser(user);
    }

    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe) id: Number , @Body(ValidationPipe) user:UpdateUserDto){
        return this.us.updateUser(id, user);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:Number){
        return this.us.removeUser(id);
    }

}
