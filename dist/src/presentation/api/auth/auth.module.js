"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const prisma_module_1 = require("../../../infrastructure/prisma/prisma.module");
const auth_service_1 = require("../../../domain/auth/auth.service");
const auth_module_1 = require("../../../infrastructure/auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let AuthApiModule = exports.AuthApiModule = class AuthApiModule {
};
exports.AuthApiModule = AuthApiModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthProviderModule],
        controllers: [auth_controller_1.AuthController],
        providers: [jwt_1.JwtService, auth_service_1.AuthService],
    })
], AuthApiModule);
//# sourceMappingURL=auth.module.js.map