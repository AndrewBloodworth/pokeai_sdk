"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClientSDK_client;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSDK = void 0;
const http_1 = require("./http");
const security_1 = require("./security");
const url_1 = require("./url");
const encodings_1 = require("./encodings");
const base64_1 = require("./base64");
class ClientSDK {
    constructor(init) {
        _ClientSDK_client.set(this, void 0);
        this.unpackHeaders = http_1.unpackHeaders;
        this.matchStatusCode = http_1.matchStatusCode;
        this.matchResponse = http_1.matchResponse;
        this.templateURLComponent = url_1.pathToFunc;
        this.resolveSecurity = security_1.resolveSecurity;
        this.resolveGlobalSecurity = security_1.resolveGlobalSecurity;
        const url = init.baseURL;
        url.pathname = url.pathname.replace(/\/+$/, "") + "/";
        __classPrivateFieldSet(this, _ClientSDK_client, init.client, "f");
        this.baseURL = url;
    }
    async fetch$(conf, options) {
        var _a, _b, _c;
        const { method, path, query, headers: opHeaders, security } = conf;
        const reqURL = new URL((_a = conf.baseURL) !== null && _a !== void 0 ? _a : this.baseURL);
        const inputURL = new URL(path, reqURL);
        if (path) {
            reqURL.pathname += inputURL.pathname.replace(/^\/+/, "");
        }
        let finalQuery = query || "";
        const secQuery = [];
        for (const [k, v] of Object.entries((security === null || security === void 0 ? void 0 : security.queryParams) || {})) {
            secQuery.push((0, encodings_1.encodeForm)(k, v, { charEncoding: "percent" }));
        }
        if (secQuery.length) {
            finalQuery += `&${secQuery.join("&")}`;
        }
        if (finalQuery) {
            const q = finalQuery.startsWith("&") ? finalQuery.slice(1) : finalQuery;
            reqURL.search = `?${q}`;
        }
        const headers = new Headers(opHeaders);
        const username = (security === null || security === void 0 ? void 0 : security.basic.username) || "";
        const password = (security === null || security === void 0 ? void 0 : security.basic.password) || "";
        if (username) {
            const encoded = (0, base64_1.stringToBase64)([username, password].join(":"));
            headers.set("Authorization", `Basic ${encoded}`);
        }
        const securityHeaders = new Headers((security === null || security === void 0 ? void 0 : security.headers) || {});
        for (const [k, v] of securityHeaders) {
            headers.set(k, v);
        }
        let cookie = headers.get("cookie") || "";
        for (const [k, v] of Object.entries((security === null || security === void 0 ? void 0 : security.cookies) || {})) {
            cookie += `; ${k}=${v}`;
        }
        cookie = cookie.startsWith("; ") ? cookie.slice(2) : cookie;
        headers.set("cookie", cookie);
        const userHeaders = new Headers((_b = options === null || options === void 0 ? void 0 : options.fetchOptions) === null || _b === void 0 ? void 0 : _b.headers);
        for (const [k, v] of userHeaders) {
            headers.set(k, v);
        }
        const req = new Request(reqURL, {
            ...options === null || options === void 0 ? void 0 : options.fetchOptions,
            body: (_c = conf.body) !== null && _c !== void 0 ? _c : null,
            headers,
            method,
        });
        return __classPrivateFieldGet(this, _ClientSDK_client, "f").request(req);
    }
}
exports.ClientSDK = ClientSDK;
_ClientSDK_client = new WeakMap();
//# sourceMappingURL=sdks.js.map