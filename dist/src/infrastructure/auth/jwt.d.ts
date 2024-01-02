import { Strategy } from "passport-jwt";
import { PrismaService } from "../prisma/prisma.service";
export declare const jwtSecret = "zjP9h6ZI5LoSKCRj";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prismaService;
    constructor(prismaService: PrismaService);
    validate(payload: {
        userId: number;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
