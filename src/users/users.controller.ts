import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService} from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users') //represent route -> /users
export class UsersController {

    constructor(private readonly us:UsersService) {}

    @Get() //represent route -> /users 
    getAllUsers(@Query('role') role?: "ADMIN" | "INTERN" | "ENGINEER"): User[] {
        return this.us.getAllUsers(role); //Return all users
    }

    @Get(':id')
    getUserById(@Param('id') id: String) {
        return this.us.getUserById(+id) //Return user with id
    }

    @Post()
    createUser(@Body() user:User){
        return this.us.createUser(user);
    }

    @Patch(':id')
    updateUser(@Param('id') id: String , @Body() user:User){
        return this.us.updateUser(+id, user);
    }

    @Delete(':id')
    remove(@Param('id') id:String){
        return this.us.removeUser(+id);
    }

}
