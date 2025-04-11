"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveGlobalSecurity = exports.resolveSecurity = exports.SecurityError = exports.SecurityErrorCode = void 0;
var SecurityErrorCode;
(function (SecurityErrorCode) {
    SecurityErrorCode["Incomplete"] = "incomplete";
    SecurityErrorCode["UnrecognisedSecurityType"] = "unrecognized_security_type";
})(SecurityErrorCode || (exports.SecurityErrorCode = SecurityErrorCode = {}));
class SecurityError extends Error {
    constructor(code, message, options) {
        super(message, options);
        this.code = code;
        this.name = "SecurityError";
    }
    static incomplete() {
        return new SecurityError(SecurityErrorCode.Incomplete, "Security requirements not met in order to perform the operation");
    }
    static unrecognizedType(type) {
        return new SecurityError(SecurityErrorCode.UnrecognisedSecurityType, `Unrecognised security type: ${type}`);
    }
}
exports.SecurityError = SecurityError;
function resolveSecurity(...options) {
    const state = {
        basic: { username: "", password: "" },
        headers: {},
        queryParams: {},
        cookies: {},
    };
    const option = options.find((opts) => opts.every((o) => Boolean(o.value)));
    if (option == null) {
        return null;
    }
    option.forEach((spec) => {
        if (spec.value == null) {
            return;
        }
        const { type } = spec;
        switch (type) {
            case "apiKey:header":
                state.headers[spec.fieldName] = spec.value;
                break;
            case "apiKey:query":
                state.queryParams[spec.fieldName] = spec.value;
                break;
            case "apiKey:cookie":
                state.cookies[spec.fieldName] = spec.value;
                break;
            case "http:basic":
                applyBasic(state, spec);
                break;
            case "http:bearer":
                applyBearer(state, spec);
                break;
            case "oauth2":
                applyBearer(state, spec);
                break;
            case "openIdConnect":
                applyBearer(state, spec);
                break;
            default:
                spec;
                throw SecurityError.unrecognizedType(type);
        }
    });
    return state;
}
exports.resolveSecurity = resolveSecurity;
function applyBasic(state, spec) {
    if (spec.value == null) {
        return;
    }
    if ("fieldName" in spec) {
        state.basic[spec.fieldName] = spec.value;
    }
    else {
        state.basic = spec.value;
    }
}
function applyBearer(state, spec) {
    if (spec.value == null) {
        return;
    }
    let value = spec.value;
    if (value.slice(0, 7).toLowerCase() !== "bearer ") {
        value = `Bearer ${value}`;
    }
    state.headers[spec.fieldName] = value;
}
function resolveGlobalSecurity(security) {
    return resolveSecurity([
        {
            value: security === null || security === void 0 ? void 0 : security.apiKey,
            fieldName: "Authorization",
            type: "apiKey:header",
        },
    ], [
        {
            value: security === null || security === void 0 ? void 0 : security.bearerAuth,
            fieldName: "Authorization",
            type: "http:bearer",
        },
    ]);
}
exports.resolveGlobalSecurity = resolveGlobalSecurity;
//# sourceMappingURL=security.js.map