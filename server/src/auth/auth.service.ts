import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      const payload = {
        username: user.username,
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      };
      return {
        Token: await this.jwtService.signAsync(payload),
      };
    }
    throw new BadRequestException();
  }
}
