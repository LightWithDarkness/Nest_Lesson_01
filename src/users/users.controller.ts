import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') //represent route -> /users
export class UsersController {

    @Get() //represent route -> /users 
    getAllUsers(@Query('role') role?: "admin"|"intern"|"engineer") {
        return []; //Return all users
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return { id, } //Return user with id
    }

    @Post()
    create(@Body() user:{}){
        return user;
    }

    @Patch(':id')
    update(@Param('id') id: string , @Body() user:{}){
        return {id, ...user};
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return {};
    }

}
