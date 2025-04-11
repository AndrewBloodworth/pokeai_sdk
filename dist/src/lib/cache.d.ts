import { LRUCache } from "lru-cache";
export declare class Cache {
    private cache;
    constructor(options?: LRUCache.Options<string, any, unknown>);
    get(key: string): any | undefined;
    set(key: string, value: any): void;
    has(key: string): boolean;
    delete(key: string): void;
    clear(): void;
}
export type CacheConfig = LRUCache.Options<string, any, unknown>;
//# sourceMappingURL=cache.d.ts.map