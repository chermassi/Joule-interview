"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const articles_module_1 = require("./articles/articles.module");
const auth_module_1 = require("./auth/auth.module");
let ApiModule = exports.ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [articles_module_1.ArticlesApiModule, auth_module_1.AuthApiModule],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map