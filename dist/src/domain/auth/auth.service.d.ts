import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
