import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Article, MutableArticle } from "./article.entity";
import { validateUserCanMutateArticle } from "./rules";
import { NotificationService } from "../notifications/notifications.service";
import { Mutable } from "../../utils/types";

@Injectable()
export class ArticlesService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly notificationService: NotificationService,
    ) {}

    // Improved: Used async to ensure proper handling of Promises.
    async create(article: Mutable<Article>): Promise<void> {
        const createdArticle = await this.prisma.article.create({
            data: { ...article },
        });

        // Improved: Check if the article is published and notify if true.
        if (createdArticle.published) {
            this.notificationService.notifyPublishedArticle(createdArticle);
        }
    }

    // Improved: Used async/await and removed unnecessary .then.
    async publish(id: number): Promise<void> {
        const updatedArticle = await this.prisma.article.update({
            where: { id },
            data: { published: true },
        });

        // Improved: Notify about the updated article.
        this.notificationService.notifyPublishedArticle(updatedArticle);
    }

    // Improved: Used async to ensure proper handling of Promises.
    async findAll(): Promise<Article[]> {
        return await this.prisma.article.findMany({
            where: { published: true },
        });
    }

    // Improved: Used async to ensure proper handling of Promises.
    async findMine(authorId: number): Promise<Article[]> {
        return this.prisma.article.findMany({
            where: { authorId },
        });
    }

    // Improved: Used async to ensure proper handling of Promises.
    async findDrafts(authorId: number): Promise<Article[]> {
        return this.prisma.article.findMany({
            where: { published: false, authorId },
        });
    }

    // Improved: Used async to ensure proper handling of Promises.
    async findOne(id: number): Promise<Article | null> {
        return this.prisma.article.findUnique({ where: { id } });
    }

    // Improved: Used async to ensure proper handling of Promises.
    async update(id: number, article: Partial<MutableArticle>, userId: number): Promise<Article> {
        const persistedArticle = await this.prisma.article.findUnique({
            where: { id },
        });

        // Improved: Validate user mutation and throw ForbiddenException if not allowed.
        validateUserCanMutateArticle(persistedArticle, userId);

        return this.prisma.article.update({
            where: { id },
            data: article,
        });
    }

    // Improved: Used async to ensure proper handling of Promises.
    async remove(id: number, userId: number): Promise<Article> {
        const article = await this.prisma.article.findUnique({ where: { id } });

        // Improved: Validate user mutation and throw ForbiddenException if not allowed.
        validateUserCanMutateArticle(article, userId);

        // Prisma's delete method returns the deleted object.
        return this.prisma.article.delete({ where: { id } });
    }
}
