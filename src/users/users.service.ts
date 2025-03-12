import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';


@Injectable()
export class UsersService {
    private users : User[]= [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    getAllUsers(role? : "ADMIN" | "INTERN" | "ENGINEER"){
        if(role){
            return this.users.filter(user => user.role === role); 
        }
        return this.users;
    } 

    getUserById(id:Number){
        return this.users.find(user => user.id === id);
    }

    createUser(user:User){
        user.id = Date.now();
        this.users.push(user);
        return user;
    }
    updateUser(id:Number,user:User){
        this.users = this.users.map( u => u.id === id ? {...u ,...user}:u);
        return this.getUserById(id);
    }
    removeUser(id:Number){
        const removedUser = this.getUserById(id);
        this.users = this.users.filter( u => u.id !== id);
        return removedUser;
    }


}

