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
exports.UpdateArticleRequest = exports.UpdateArticleDto = exports.CreateArticleRequest = exports.CreateArticleDto = exports.ArticleResponse = exports.ArticleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ArticleDto {
}
exports.ArticleDto = ArticleDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ArticleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ArticleDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ArticleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    __metadata("design:type", String)
], ArticleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ArticleDto.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ArticleDto.prototype, "published", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ArticleDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ArticleDto.prototype, "updatedAt", void 0);
class ArticleResponse {
    constructor(data) {
        this.fromEntity = () => {
            return {
                id: this.data.id,
                authorId: this.data.authorId,
                title: this.data.title,
                description: this.data.description,
                body: this.data.body,
                published: this.data.published,
                createdAt: this.data.createdAt,
                updatedAt: this.data.updatedAt,
            };
        };
        this.data = data;
    }
}
exports.ArticleResponse = ArticleResponse;
class CreateArticleDto {
    constructor() {
        this.published = false;
    }
}
exports.CreateArticleDto = CreateArticleDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateArticleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CreateArticleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateArticleDto.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: false }),
    __metadata("design:type", Boolean)
], CreateArticleDto.prototype, "published", void 0);
class CreateArticleRequest {
    constructor(data) {
        this.toEntity = () => {
            return {
                title: this.data.title,
                description: this.data.description ?? "",
                body: this.data.body,
                published: this.data.published ?? false,
            };
        };
        this.data = data;
    }
}
exports.CreateArticleRequest = CreateArticleRequest;
class UpdateArticleDto extends (0, swagger_1.PartialType)(CreateArticleDto) {
}
exports.UpdateArticleDto = UpdateArticleDto;
class UpdateArticleRequest {
    constructor(data) {
        this.toEntity = () => {
            return {
                title: this.data.title,
                description: this.data.description,
                body: this.data.body,
                published: this.data.published,
            };
        };
        this.data = data;
    }
}
exports.UpdateArticleRequest = UpdateArticleRequest;
//# sourceMappingURL=article.dto.js.map