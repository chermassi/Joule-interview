"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserCanMutateArticle = void 0;
const canUserMutateArticle = (article, userId) => {
    return article.authorId === userId;
};
const validateUserCanMutateArticle = (article, userId) => {
    if (!canUserMutateArticle(article, userId)) {
        throw new Error("User cannot mutate article");
    }
};
exports.validateUserCanMutateArticle = validateUserCanMutateArticle;
//# sourceMappingURL=rules.js.map