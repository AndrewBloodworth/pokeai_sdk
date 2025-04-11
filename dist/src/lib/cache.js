"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const lru_cache_1 = require("lru-cache");
class Cache {
    constructor(options) {
        this.cache = new lru_cache_1.LRUCache({
            max: 100,
            ttl: 1000 * 60 * 5,
            ...options,
        });
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, value) {
        this.cache.set(key, value);
    }
    has(key) {
        return this.cache.has(key);
    }
    delete(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
}
exports.Cache = Cache;
//# sourceMappingURL=cache.js.map