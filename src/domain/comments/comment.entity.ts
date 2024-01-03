// comment.entity.ts
import { Prisma } from '@prisma/client';

export interface Comment {
  id: number;
  articleId: number;
  userId: number;
  content: string;
  createdAt: Date;
}
