import { Article, MutableArticle } from "../../../domain/articles/article.entity";
import { RequestDto, ResponseDto } from "../dto";
import { WithOptional } from "../../../utils/types";
export declare class ArticleDto implements Article {
    id: number;
    authorId: number;
    title: string;
    description: string | null;
    body: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ArticleResponse implements ResponseDto<Article, ArticleDto> {
    data: Article;
    constructor(data: Article);
    fromEntity: () => ArticleDto;
}
export declare class CreateArticleDto implements WithOptional<MutableArticle, "description" | "published"> {
    title: string;
    description?: string;
    body: string;
    published?: boolean;
}
export declare class CreateArticleRequest implements RequestDto<MutableArticle, CreateArticleDto> {
    data: CreateArticleDto;
    constructor(data: CreateArticleDto);
    toEntity: () => MutableArticle;
}
declare const UpdateArticleDto_base: import("@nestjs/common").Type<Partial<CreateArticleDto>>;
export declare class UpdateArticleDto extends UpdateArticleDto_base {
}
export declare class UpdateArticleRequest implements RequestDto<Partial<MutableArticle>, UpdateArticleDto> {
    data: UpdateArticleDto;
    constructor(data: UpdateArticleDto);
    toEntity: () => Partial<MutableArticle>;
}
export {};
