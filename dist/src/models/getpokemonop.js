"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPokemonsResponse$ = exports.GetPokemonRequest$ = void 0;
const zod_1 = require("zod");
const error_1 = require("./error");
const pokemon_1 = require("./pokemon");
/** @internal */
var GetPokemonRequest$;
(function (GetPokemonRequest$) {
    GetPokemonRequest$.inboundSchema = zod_1.z
        .object({
        idOrName: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    })
        .transform((v) => {
        return { idOrName: v.idOrName };
    });
    GetPokemonRequest$.outboundSchema = zod_1.z
        .object({
        idOrName: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    })
        .transform((v) => {
        return { idOrName: v.idOrName };
    });
})(GetPokemonRequest$ || (exports.GetPokemonRequest$ = GetPokemonRequest$ = {}));
/** @internal */
var GetPokemonsResponse$;
(function (GetPokemonsResponse$) {
    GetPokemonsResponse$.inboundSchema = zod_1.z
        .object({
        ContentType: zod_1.z.string(),
        Error: error_1.ErrorT$.inboundSchema.optional(),
        StatusCode: zod_1.z.number().int(),
        RawResponse: zod_1.z.instanceof(Response),
        classes: pokemon_1.Pokemon$.inboundSchema.optional(),
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
    GetPokemonsResponse$.outboundSchema = zod_1.z
        .object({
        contentType: zod_1.z.string(),
        error: error_1.ErrorT$.outboundSchema.optional(),
        statusCode: zod_1.z.number().int(),
        rawResponse: zod_1.z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        classes: pokemon_1.Pokemon$.outboundSchema.optional(),
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
})(GetPokemonsResponse$ || (exports.GetPokemonsResponse$ = GetPokemonsResponse$ = {}));
//# sourceMappingURL=getpokemonop.js.map