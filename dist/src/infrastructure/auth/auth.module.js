"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProviderModule = void 0;
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const jwt_2 = require("./jwt");
let AuthProviderModule = exports.AuthProviderModule = class AuthProviderModule {
};
exports.AuthProviderModule = AuthProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: jwt_2.jwtSecret,
                signOptions: { expiresIn: "10d" },
            }),
        ],
        providers: [jwt_2.JwtStrategy],
    })
], AuthProviderModule);
//# sourceMappingURL=auth.module.js.map