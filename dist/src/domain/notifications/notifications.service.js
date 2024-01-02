"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../../infrastructure/email/email.service");
const prisma_service_1 = require("../../infrastructure/prisma/prisma.service");
let NotificationService = exports.NotificationService = class NotificationService {
    constructor(emailService, prisma) {
        this.emailService = emailService;
        this.prisma = prisma;
        this.notifyPublishedArticle = async (article) => {
            const author = await this.prisma.user.findUnique({
                where: { id: article.authorId },
                select: {
                    email: true,
                    followedBy: {
                        select: {
                            email: true,
                        },
                    },
                },
            });
            if (!author.followedBy)
                return;
            this.emailService.sendEmail(`New article from ${author.email}`, `Check out the new article from ${author.email} at https://blog/articles/${article.id}`, author.followedBy.map(({ email }) => email));
        };
    }
};
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_service_1.EmailService,
        prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notifications.service.js.map