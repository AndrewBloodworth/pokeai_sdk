"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGenerationResponse$ = exports.ListGenerationRequest$ = void 0;
const zod_1 = require("zod");
const error_1 = require("./error");
const namedapiresourcelist_1 = require("./namedapiresourcelist");
/** @internal */
var ListGenerationRequest$;
(function (ListGenerationRequest$) {
    ListGenerationRequest$.inboundSchema = zod_1.z
        .object({
        limit: zod_1.z.number(),
        offset: zod_1.z.number().optional(),
    })
        .transform((v) => {
        return {
            limit: v.limit,
            offset: v.offset,
        };
    });
    ListGenerationRequest$.outboundSchema = zod_1.z
        .object({ limit: zod_1.z.number(), offset: zod_1.z.number().optional() })
        .transform((v) => {
        return { limit: v.limit, offset: v.offset };
    });
})(ListGenerationRequest$ || (exports.ListGenerationRequest$ = ListGenerationRequest$ = {}));
/** @internal */
var ListGenerationResponse$;
(function (ListGenerationResponse$) {
    ListGenerationResponse$.inboundSchema = zod_1.z
        .object({
        ContentType: zod_1.z.string(),
        Error: error_1.ErrorT$.inboundSchema.optional(),
        StatusCode: zod_1.z.number().int(),
        RawResponse: zod_1.z.instanceof(Response),
        classes: namedapiresourcelist_1.NamedAPIResourceList$,
    })
        .transform((v) => {
        return {
            contentType: v.ContentType,
            ...(v.Error === undefined ? null : { error: v.Error }),
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
            ...(v.classes === undefined
                ? null
                : {
                    classes: v.classes,
                }),
        };
    });
    ListGenerationResponse$.outboundSchema = zod_1.z
        .object({
        contentType: zod_1.z.string(),
        error: error_1.ErrorT$.outboundSchema.optional(),
        statusCode: zod_1.z.number().int(),
        rawResponse: zod_1.z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: namedapiresourcelist_1.NamedAPIResourceList$,
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
})(ListGenerationResponse$ || (exports.ListGenerationResponse$ = ListGenerationResponse$ = {}));
//# sourceMappingURL=listgenerationop.js.map