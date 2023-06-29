import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(id: string, pass: string){
        const user = await this.usersService.findOne(id);
        this.logger.log("UserInfo: " + user);
        
        if (user?.password !== pass) {
            this.logger.log("Request Password: " + user.password);
            this.logger.log("Password: " + pass);
            throw new UnauthorizedException();
        }

        this.logger.log("not");

        const payload = { id: user.id, password: user.password };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
