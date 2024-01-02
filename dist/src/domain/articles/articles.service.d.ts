import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Article, MutableArticle } from "./article.entity";
import { NotificationService } from "../notifications/notifications.service";
import { Mutable } from "../../utils/types";
export declare class ArticlesService {
    private readonly prisma;
    private readonly notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationService);
    create(article: Mutable<Article>): Promise<void>;
    publish(id: number): Promise<void>;
    findAll(): Promise<Article[]>;
    findMine(authorId: number): Promise<Article[]>;
    findDrafts(authorId: number): Promise<Article[]>;
    findOne(id: number): Promise<Article | null>;
    update(id: number, article: Partial<MutableArticle>, userId: number): Promise<Article>;
    remove(id: number, userId: number): Promise<Article>;
}
