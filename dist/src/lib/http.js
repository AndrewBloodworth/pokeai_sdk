"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpackHeaders = exports.matchResponse = exports.matchStatusCode = exports.matchContentType = exports.HTTPClient = void 0;
class HTTPClient {
    constructor(options = {}) {
        this.fetcher = options.fetcher || fetch;
    }
    async request(request) {
        try {
            const res = await this.fetcher(request);
            return res;
        }
        catch (err) {
            throw err;
        }
    }
}
exports.HTTPClient = HTTPClient;
function matchContentType(response, pattern) {
    var _a;
    if (pattern === "*" || pattern === "*/*") {
        return true;
    }
    const contentType = (_a = response.headers.get("content-type")) !== null && _a !== void 0 ? _a : "application/octet-stream";
    const idx = contentType.split(";").findIndex((raw) => {
        const ctype = raw.trim();
        if (ctype === pattern) {
            return true;
        }
        const parts = ctype.split("/");
        if (parts.length !== 2) {
            return false;
        }
        return `${parts[0]}/*` === pattern || `*/${parts[1]}` === pattern;
    });
    return idx >= 0;
}
exports.matchContentType = matchContentType;
const codeRangeRE = new RegExp("^[0-9]xx$", "i");
function matchStatusCode(response, codes) {
    const actual = `${response.status}`;
    const expectedCodes = Array.isArray(codes) ? codes : [codes];
    if (!expectedCodes.length) {
        return false;
    }
    return expectedCodes.some((ec) => {
        const code = `${ec}`;
        if (code === "default") {
            return true;
        }
        if (!codeRangeRE.test(`${code}`)) {
            return code === actual;
        }
        const expectFamily = code.charAt(0);
        if (!expectFamily) {
            throw new Error("Invalid status code range");
        }
        const actualFamily = actual.charAt(0);
        if (!actualFamily) {
            throw new Error(`Invalid response status code: ${actual}`);
        }
        return actualFamily === expectFamily;
    });
}
exports.matchStatusCode = matchStatusCode;
function matchResponse(response, code, contentTypePattern) {
    return (matchStatusCode(response, code) &&
        matchContentType(response, contentTypePattern));
}
exports.matchResponse = matchResponse;
const headerValRE = /, */;
function unpackHeaders(headers) {
    const out = {};
    for (const [k, v] of headers.entries()) {
        out[k] = v.split(headerValRE);
    }
    return out;
}
exports.unpackHeaders = unpackHeaders;
//# sourceMappingURL=http.js.map