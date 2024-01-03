// comments.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { Comment } from '../comments/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  createComment = async (comment: Omit<Comment, 'id' | 'createdAt'>) => {
    return this.prisma.comment.create({
      data: comment,
    });
  };

  getCommentsByArticleId = async (articleId: number): Promise<Comment[]> => {
    return this.prisma.comment.findMany({
      where: {
        articleId,
      },
    });
  };
}
