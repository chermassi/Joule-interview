import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// Importing the entire 'dotenv' library and assigning it to the namespace 'dotenv'
import * as dotenv from 'dotenv';


// Loading and configuring environment variables from the .env file using dotenv
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Joule Interview")
        .setDescription("The Joule Interview API description")
        .setVersion("0.1")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}
bootstrap();
