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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/prisma/prisma.service");
const rules_1 = require("./rules");
const notifications_service_1 = require("../notifications/notifications.service");
let ArticlesService = exports.ArticlesService = class ArticlesService {
    constructor(prisma, notificationService) {
        this.prisma = prisma;
        this.notificationService = notificationService;
    }
    async create(article) {
        const createdArticle = await this.prisma.article.create({
            data: { ...article },
        });
        if (createdArticle.published) {
            this.notificationService.notifyPublishedArticle(createdArticle);
        }
    }
    async publish(id) {
        const updatedArticle = await this.prisma.article.update({
            where: { id },
            data: { published: true },
        });
        this.notificationService.notifyPublishedArticle(updatedArticle);
    }
    async findAll() {
        return await this.prisma.article.findMany({
            where: { published: true },
        });
    }
    async findMine(authorId) {
        return this.prisma.article.findMany({
            where: { authorId },
        });
    }
    async findDrafts(authorId) {
        return this.prisma.article.findMany({
            where: { published: false, authorId },
        });
    }
    async findOne(id) {
        return this.prisma.article.findUnique({ where: { id } });
    }
    async update(id, article, userId) {
        const persistedArticle = await this.prisma.article.findUnique({
            where: { id },
        });
        (0, rules_1.validateUserCanMutateArticle)(persistedArticle, userId);
        return this.prisma.article.update({
            where: { id },
            data: article,
        });
    }
    async remove(id, userId) {
        const article = await this.prisma.article.findUnique({ where: { id } });
        (0, rules_1.validateUserCanMutateArticle)(article, userId);
        return this.prisma.article.delete({ where: { id } });
    }
};
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationService])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map