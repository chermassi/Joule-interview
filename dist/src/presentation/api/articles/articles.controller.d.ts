import { ArticlesService } from "../../../domain/articles/articles.service";
import { ArticleDto, CreateArticleDto, UpdateArticleDto } from "./article.dto";
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto, request: any): Promise<void>;
    findAll(): Promise<ArticleDto[]>;
    findMine(request: any): Promise<import("../../../domain/articles/article.entity").Article[]>;
    findDrafts(request: any): Promise<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<ArticleDto>;
    update(id: string, updateArticleDto: UpdateArticleDto, request: any): Promise<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string, request: any): Promise<ArticleDto>;
}
