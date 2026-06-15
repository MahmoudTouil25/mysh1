import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(username: string, password: string): Promise<{ access_token: string }> {
    const adminUsername = this.config.get<string>('ADMIN_USERNAME');
    const adminHash = this.config.get<string>('ADMIN_PASSWORD_HASH');

    const valid =
      username === adminUsername &&
      !!adminHash &&
      (await bcrypt.compare(password, adminHash));

    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: 'admin', username };
    return { access_token: this.jwtService.sign(payload) };
  }
}
