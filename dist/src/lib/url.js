"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrlParam = exports.pathToFunc = void 0;
const hasOwn = Object.prototype.hasOwnProperty;
function pathToFunc(pathPattern, options) {
    const paramRE = /\{([a-zA-Z0-9_]+?)\}/g;
    return function buildURLPath(params = {}) {
        return pathPattern.replace(paramRE, function (_, placeholder) {
            if (!hasOwn.call(params, placeholder)) {
                throw new Error(`Parameter '${placeholder}' is required`);
            }
            const value = params[placeholder];
            if (typeof value !== "string" && typeof value !== "number") {
                throw new Error(`Parameter '${placeholder}' must be a string or number`);
            }
            return (options === null || options === void 0 ? void 0 : options.charEncoding) === "percent"
                ? encodeURIComponent(`${value}`)
                : `${value}`;
        });
    };
}
exports.pathToFunc = pathToFunc;
function parseUrlParam(url, key) {
    if (!url)
        return null;
    const parsed = new URL(url);
    const param = parsed.searchParams.get(key);
    return param || null;
}
exports.parseUrlParam = parseUrlParam;
//# sourceMappingURL=url.js.map