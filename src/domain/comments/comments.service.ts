import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Comment } from "./comment.entity";


@Injectable()
export class CommentsService {
    constructor(private readonly prisma: PrismaService) {}

    // Create comment
    async createComment(commentData: {
        articleId: number;
        userId: number;
        content: string;
    }): Promise<Comment> {
        const { articleId, userId, content } = commentData;

        // Check if the article exists
        const article = await this.prisma.article.findUnique({
            where: { id: articleId },
        });

        if (!article) {
            throw new NotFoundException(`Article with ID ${articleId} not found`);
        }

        // Check if the user exists
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        // Create the comment
        return this.prisma.comment.create({
            data: {
                content,
                article: { connect: { id: articleId } },
                user: { connect: { id: userId } },
            },
        });
    }

    // Get comments by article ID
    async getCommentsByArticleId(articleId: number): Promise<Comment[]> {
        // Check if the article exists
        const article = await this.prisma.article.findUnique({
            where: { id: articleId },
        });

        if (!article) {
            throw new NotFoundException(`Article with ID ${articleId} not found`);
        }

        // Retrieve comments for the specified article
        return this.prisma.comment.findMany({
            where: { articleId },
            include: { user: true }, // Include user details in the response
        });
    }
}
