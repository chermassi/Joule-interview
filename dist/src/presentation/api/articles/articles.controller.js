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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("../../../domain/articles/articles.service");
const swagger_1 = require("@nestjs/swagger");
const article_dto_1 = require("./article.dto");
const auth_guard_1 = require("../auth/auth.guard");
let ArticlesController = exports.ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    create(createArticleDto, request) {
        const article = new article_dto_1.CreateArticleRequest(createArticleDto).toEntity();
        return this.articlesService.create({
            ...article,
            authorId: request.user.id,
        });
    }
    async findAll() {
        const articles = await this.articlesService.findAll();
        return articles.map((article) => new article_dto_1.ArticleResponse(article).fromEntity());
    }
    findMine(request) {
        return this.articlesService.findMine(request.user.id);
    }
    async findDrafts(request) {
        return this.articlesService.findDrafts(request.user.id);
    }
    async findOne(id) {
        const article = await this.articlesService.findOne(+id);
        return new article_dto_1.ArticleResponse(article).fromEntity();
    }
    update(id, updateArticleDto, request) {
        const article = new article_dto_1.UpdateArticleRequest(updateArticleDto).toEntity();
        return this.articlesService.update(+id, article, request.user.id);
    }
    async remove(id, request) {
        const deletedArticle = await this.articlesService.remove(+id, request.user);
        return new article_dto_1.ArticleResponse(deletedArticle).fromEntity();
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: article_dto_1.ArticleDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.CreateArticleDto, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: article_dto_1.ArticleDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)("/mine"),
    (0, swagger_1.ApiOkResponse)({ type: article_dto_1.ArticleDto, isArray: true }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findMine", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)("/drafts"),
    (0, swagger_1.ApiOkResponse)({ type: article_dto_1.ArticleDto, isArray: true }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findDrafts", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiOkResponse)({ type: article_dto_1.ArticleDto }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, article_dto_1.UpdateArticleDto, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "remove", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, common_1.Controller)("articles"),
    (0, swagger_1.ApiTags)("articles"),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map