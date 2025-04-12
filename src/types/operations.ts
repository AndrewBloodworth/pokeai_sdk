export type Paginated<Result> = Result & { next: Paginator<Result | null> };
export type Paginator<Result> = () => Promise<Paginated<Result> | null>;
