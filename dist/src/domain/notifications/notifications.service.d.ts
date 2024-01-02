import { EmailService } from "../../infrastructure/email/email.service";
import { Article } from "../articles/article.entity";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
export declare class NotificationService {
    private emailService;
    private prisma;
    constructor(emailService: EmailService, prisma: PrismaService);
    notifyPublishedArticle: (article: Article) => Promise<void>;
}
