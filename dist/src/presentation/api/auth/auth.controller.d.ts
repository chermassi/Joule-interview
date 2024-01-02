import { AuthService } from "../../../domain/auth/auth.service";
import { LoginDto } from "./auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: LoginDto): Promise<{
        accessToken: string;
    }>;
    me(request: any): {
        email: any;
    };
}
