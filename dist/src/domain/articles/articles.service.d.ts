import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Article, MutableArticle } from "./article.entity";
import { NotificationService } from "../notifications/notifications.service";
import { Mutable } from "../../utils/types";
export declare class ArticlesService {
    private prisma;
    private notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationService);
    create: (article: Mutable<Article>) => Promise<void>;
    publish: (id: number) => void;
    findAll: () => Promise<Article[]>;
    findMine: (authorId: number) => Promise<Article[]>;
    findDrafts: (authorId: number) => import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne: (id: number) => import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update: (id: number, article: Partial<MutableArticle>, userId: number) => Promise<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove: (id: number, userId: number) => Promise<{
        id: number;
        authorId: number;
        title: string;
        description: string;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
