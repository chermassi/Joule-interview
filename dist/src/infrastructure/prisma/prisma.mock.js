"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTest = void 0;
const objects_1 = require("../../utils/objects");
const generatePersistanceData = (data) => {
    const incrementedId = ((0, objects_1.getMax)(data, "id") ?? 0) + 1;
    const now = new Date();
    return {
        id: incrementedId,
        createdAt: now,
        updatedAt: now,
    };
};
const UserModel = {
    data: [],
    loadData: {
        common: () => {
            const user = {
                email: "user@email.com",
                password: "password",
                followedBy: [],
                following: [],
            };
            UserModel.create({ data: user });
        },
    },
    create: ({ data }) => {
        const user = {
            ...data,
            ...generatePersistanceData(UserModel.data),
        };
        UserModel.data.push(user);
        return user;
    },
    findUnique: ({ where: { id } }) => {
        return UserModel.data.filter((user) => user.id === id)[0];
    },
};
const ArticleModel = {
    data: [],
    loadData: {
        common: () => {
            const article = {
                authorId: 1,
                title: "A first article",
                description: "Splendid description",
                body: "This is the article body",
                published: true,
            };
            ArticleModel.create({ data: article });
        },
    },
    create: ({ data }) => {
        const article = {
            ...data,
            ...generatePersistanceData(ArticleModel.data),
        };
        ArticleModel.data.push(article);
        return article;
    },
};
exports.PrismaTest = {
    user: UserModel,
    article: ArticleModel,
    loadUserData: UserModel.loadData.common,
    cleanup: () => {
        UserModel.data = [];
        ArticleModel.data = [];
    },
};
//# sourceMappingURL=prisma.mock.js.map