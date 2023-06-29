import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return JSON.stringify(createUserDto);
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }

  findOne(id: string) {

    function isUser(el){
      if(el == id){
        return true;
      }
    }

    const findDatas = this.users.filter(el=>isUser(el.id))[0];

    return findDatas;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id == id) {
        return { ...user, ...updateUserDto };
      }

      return user;
    });
    
    return this.findOne(id);
  }

  remove(id: string) {
    this.users = this.users.filter((el) => {
      return el.id != id;
    });

    return this.users;
  }
}
