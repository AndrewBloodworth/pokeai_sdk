"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorT$ = void 0;
const zod_1 = require("zod");
/** @internal */
var ErrorT$;
(function (ErrorT$) {
    ErrorT$.inboundSchema = zod_1.z
        .object({
        code: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    })
        .transform((v) => {
        return {
            ...(v.code === undefined ? null : { code: v.code }),
            ...(v.message === undefined ? null : { message: v.message }),
        };
    });
    ErrorT$.outboundSchema = zod_1.z
        .object({
        code: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    })
        .transform((v) => {
        return {
            ...(v.code === undefined ? null : { code: v.code }),
            ...(v.message === undefined ? null : { message: v.message }),
        };
    });
})(ErrorT$ || (exports.ErrorT$ = ErrorT$ = {}));
//# sourceMappingURL=error.js.map