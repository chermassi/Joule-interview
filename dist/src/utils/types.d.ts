export type Mutable<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
export type WithOptional<T, K extends keyof T> = Partial<T> & Omit<T, K>;
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
