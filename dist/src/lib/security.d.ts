import * as models from "../models";
export declare enum SecurityErrorCode {
    Incomplete = "incomplete",
    UnrecognisedSecurityType = "unrecognized_security_type"
}
export declare class SecurityError extends Error {
    code: SecurityErrorCode;
    constructor(code: SecurityErrorCode, message: string, options?: ErrorOptions);
    static incomplete(): SecurityError;
    static unrecognizedType(type: string): SecurityError;
}
export type SecurityState = {
    basic: {
        username: string;
        password?: string;
    };
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    cookies: Record<string, string>;
};
type SecurityInputBasicPacked = {
    type: "http:basic";
    value: {
        username: string;
        password?: string;
    } | null | undefined;
};
type SecurityInputBasic = {
    type: "http:basic";
    value: string | null | undefined;
    fieldName: "username" | "password";
};
type SecurityInputBearer = {
    type: "http:bearer";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputAPIKey = {
    type: "apiKey:header" | "apiKey:query" | "apiKey:cookie";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputOIDC = {
    type: "openIdConnect";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputOAuth2 = {
    type: "oauth2";
    value: string | null | undefined;
    fieldName: string;
};
export type SecurityInput = SecurityInputBasic | SecurityInputBasicPacked | SecurityInputBearer | SecurityInputAPIKey | SecurityInputOAuth2 | SecurityInputOIDC;
export declare function resolveSecurity(...options: SecurityInput[][]): SecurityState | null;
export declare function resolveGlobalSecurity(security: Partial<models.Security> | null | undefined): SecurityState | null;
export {};
//# sourceMappingURL=security.d.ts.map