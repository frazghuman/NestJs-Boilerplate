import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    async signUp(
        @Body() authCredencialsDto: AuthCredentialsDto,
        ): Promise<void> {
            return await this.authService.signUp(authCredencialsDto);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signIn(
        @Body() authCredencialsDto: AuthCredentialsDto,
    ): Promise<{accessToken: string}> {
        return await this.authService.signIn(authCredencialsDto);
    }
}
