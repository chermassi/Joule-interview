import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Request,
    Logger, // Import Logger for logging
} from "@nestjs/common";
import { ArticlesService } from "../../../domain/articles/articles.service";
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
} from "@nestjs/swagger";
import {
    ArticleDto,
    ArticleResponse,
    CreateArticleDto,
    CreateArticleRequest,
    UpdateArticleDto,
    UpdateArticleRequest,
} from "./article.dto";
import { JwtAuthGuard } from "../auth/auth.guard";

@Controller("articles")
@ApiTags("articles")
export class ArticlesController {
    // Initialize logger for this controller
    private readonly logger = new Logger(ArticlesController.name);

    constructor(private readonly articlesService: ArticlesService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post()
    @ApiCreatedResponse({ type: ArticleDto })
    create(@Body() createArticleDto: CreateArticleDto, @Request() request) {
        try {
            // Log a message when creating an article for a specific user
            this.logger.log(`Creating article for user ${request.user.id}`);
            const article = new CreateArticleRequest(createArticleDto).toEntity();
            return this.articlesService.create({
                ...article,
                authorId: request.user.id,
            });
        } catch (error) {
            // Log an error if there's an issue during article creation
            this.logger.error(`Error creating article: ${error.message}`);
            throw error;
        }
    }

    @Get()
    @ApiOkResponse({ type: ArticleDto, isArray: true })
    async findAll() {
        try {
            // Log a message when fetching all articles
            this.logger.log("Fetching all articles");
            const articles = await this.articlesService.findAll();
            return articles.map((article) =>
                new ArticleResponse(article).fromEntity(),
            );
        } catch (error) {
            // Log an error if there's an issue during article retrieval
            this.logger.error(`Error fetching articles: ${error.message}`);
            throw error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get("/mine")
    @ApiOkResponse({ type: ArticleDto, isArray: true })
    findMine(@Request() request) {
        try {
            // Log a message when fetching articles for a specific user
            this.logger.log(`Fetching articles for user ${request.user.id}`);
            return this.articlesService.findMine(request.user.id);
        } catch (error) {
            // Log an error if there's an issue during article retrieval
            this.logger.error(`Error fetching articles: ${error.message}`);
            throw error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get("/drafts")
    @ApiOkResponse({ type: ArticleDto, isArray: true })
    async findDrafts(@Request() request) {
        try {
            // Log a message when fetching draft articles for a specific user
            this.logger.log(`Fetching draft articles for user ${request.user.id}`);
            return this.articlesService.findDrafts(request.user.id);
        } catch (error) {
            // Log an error if there's an issue during article retrieval
            this.logger.error(`Error fetching draft articles: ${error.message}`);
            throw error;
        }
    }

    @Get("/:id")
    @ApiOkResponse({ type: ArticleDto })
    async findOne(@Param("id") id: number) {
        try {
            // Log a message when fetching a specific article by ID
            this.logger.log(`Fetching article with ID: ${id}`);
            const article = await this.articlesService.findOne(+id);
            return new ArticleResponse(article).fromEntity();
        } catch (error) {
            // Log an error if there's an issue during article retrieval
            this.logger.error(`Error fetching article: ${error.message}`);
            throw error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateArticleDto: UpdateArticleDto,
        @Request() request,
    ) {
        try {
            // Log a message when updating a specific article by ID for a user
            this.logger.log(`Updating article with ID: ${id} for user ${request.user.id}`);
            const article = new UpdateArticleRequest(updateArticleDto).toEntity();
            return this.articlesService.update(+id, article, request.user.id);
        } catch (error) {
            // Log an error if there's an issue during article update
            this.logger.error(`Error updating article: ${error.message}`);
            throw error;
        }
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Delete(":id")
    async remove(@Param("id") id: string, @Request() request) {
        try {
            // Log a message when deleting a specific article by ID for a user
            this.logger.log(`Deleting article with ID: ${id} for user ${request.user.id}`);
            const deletedArticle = await this.articlesService.remove(
                +id,
                request.user,
            );
            return new ArticleResponse(deletedArticle).fromEntity();
        } catch (error) {
            // Log an error if there's an issue during article deletion
            this.logger.error(`Error deleting article: ${error.message}`);
            throw error;
        }
    }
}
