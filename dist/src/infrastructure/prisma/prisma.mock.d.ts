import { Mutable } from "../../utils/types";
import { Article } from "../../domain/articles/article.entity";
import { User } from "../../domain/users/user.entity";
interface ModelTest<T> {
    data: T[];
    loadData: {
        [key: string]: () => void;
    };
    create?: ({ data }: {
        data: Mutable<T>;
    }) => T;
    findUnique?: ({ where: { id } }: {
        where: {
            id: any;
        };
    }) => T;
}
export interface PrismaServiceTest {
    user: ModelTest<User>;
    article: ModelTest<Article>;
    loadUserData: () => void;
    cleanup: () => void;
}
export declare const PrismaTest: PrismaServiceTest;
export {};
