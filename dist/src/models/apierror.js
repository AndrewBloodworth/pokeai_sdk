"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError$ = exports.APIError = void 0;
const zod_1 = require("zod");
/**
 * An error occurred interacting with the API.
 */
class APIError extends Error {
    constructor(err) {
        super("");
        this.data$ = err;
        if (err.code != null) {
            this.code = err.code;
        }
        if (err.details != null) {
            this.details = err.details;
        }
        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const content = JSON.stringify(err);
        this.message = [msg, content].filter(Boolean).join("\n");
        this.name = "APIError";
    }
}
exports.APIError = APIError;
/** @internal */
var APIError$;
(function (APIError$) {
    APIError$.inboundSchema = zod_1.z
        .object({
        code: zod_1.z.string().optional(),
        details: zod_1.z.record(zod_1.z.any()).optional(),
        message: zod_1.z.string().optional(),
    })
        .transform((v) => {
        return {
            ...(v.code === undefined ? null : { code: v.code }),
            ...(v.details === undefined ? null : { details: v.details }),
            ...(v.message === undefined ? null : { message: v.message }),
        };
    });
})(APIError$ || (exports.APIError$ = APIError$ = {}));
//# sourceMappingURL=apierror.js.map