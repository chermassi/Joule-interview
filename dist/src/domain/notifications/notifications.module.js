"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("../notifications/notifications.service");
const email_module_1 = require("../../infrastructure/email/email.module");
const prisma_module_1 = require("../../infrastructure/prisma/prisma.module");
let NotificationsModule = exports.NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        providers: [notifications_service_1.NotificationService],
        imports: [email_module_1.EmailModule, prisma_module_1.PrismaModule],
        exports: [notifications_service_1.NotificationService],
    })
], NotificationsModule);
//# sourceMappingURL=notifications.module.js.map