export type Paginated<Result> = Result & {
    next: Paginator<Result>;
};
export type Paginator<Result> = (() => Promise<Paginated<Result>>) | null;
//# sourceMappingURL=operations.d.ts.map