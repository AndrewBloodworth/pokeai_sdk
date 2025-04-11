"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGenerationsResponse$ = exports.GetGenerationsRequest$ = void 0;
const zod_1 = require("zod");
const error_1 = require("./error");
const generation_1 = require("./generation");
/** @internal */
var GetGenerationsRequest$;
(function (GetGenerationsRequest$) {
    GetGenerationsRequest$.inboundSchema = zod_1.z
        .object({
        idOrName: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    })
        .transform((v) => {
        return { idOrName: v.idOrName };
    });
    GetGenerationsRequest$.outboundSchema = zod_1.z
        .object({
        idOrName: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    })
        .transform((v) => {
        return { idOrName: v.idOrName };
    });
})(GetGenerationsRequest$ || (exports.GetGenerationsRequest$ = GetGenerationsRequest$ = {}));
/** @internal */
var GetGenerationsResponse$;
(function (GetGenerationsResponse$) {
    GetGenerationsResponse$.inboundSchema = zod_1.z
        .object({
        ContentType: zod_1.z.string(),
        Error: error_1.ErrorT$.inboundSchema.optional(),
        StatusCode: zod_1.z.number().int(),
        RawResponse: zod_1.z.instanceof(Response),
        classes: generation_1.Generation$.inboundSchema.optional(),
    })
        .transform((v) => {
        return {
            contentType: v.ContentType,
            ...(v.Error === undefined ? null : { error: v.Error }),
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
            ...(v.classes === undefined ? null : { classes: v.classes }),
        };
    });
    GetGenerationsResponse$.outboundSchema = zod_1.z
        .object({
        contentType: zod_1.z.string(),
        error: error_1.ErrorT$.outboundSchema.optional(),
        statusCode: zod_1.z.number().int(),
        rawResponse: zod_1.z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: generation_1.Generation$.outboundSchema.optional(),
    })
        .transform((v) => {
        return {
            ContentType: v.contentType,
            ...(v.error === undefined ? null : { Error: v.error }),
            StatusCode: v.statusCode,
            RawResponse: v.rawResponse,
            ...(v.classes === undefined ? null : { classes: v.classes }),
        };
    });
})(GetGenerationsResponse$ || (exports.GetGenerationsResponse$ = GetGenerationsResponse$ = {}));
//# sourceMappingURL=getgenerationop.js.map