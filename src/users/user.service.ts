// src/users/user.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    if (
      !createUserDto.name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new BadRequestException('Name, email and password are required');
    }
    const newUser: User = { id: this.users.length + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (
      !updateUserDto.name ||
      !updateUserDto.email ||
      !updateUserDto.password
    ) {
      throw new BadRequestException('Name, email and password are required');
    }
    const updatedUser = { ...user, ...updateUserDto };
    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
    return updatedUser;
  }

  deleteUser(id: number): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(userIndex, 1);
  }

  private findUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
}