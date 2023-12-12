import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JWTSecret } from 'src/config/config';
import * as jwt from 'jsonwebtoken';
import { UserRO } from './user.entity';
import { createSha } from './utils/createSha';

const defaultUser = {
  id: 1,
  email: 'afef@gmail.com',
  password: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
};

@Injectable()
export class UserService {
  constructor() {}

  async login(email: string, password: string): Promise<UserRO> {
    const hashedPassword = createSha(password);
    if (
      email === defaultUser.email &&
      hashedPassword === defaultUser.password
    ) {
      const token = jwt.sign({ email }, JWTSecret, { expiresIn: '48h' });
      return { email: defaultUser.email, id: defaultUser.id, token };
    }
    throw new HttpException('Unauthorized', HttpStatus.BAD_REQUEST);
  }
}
