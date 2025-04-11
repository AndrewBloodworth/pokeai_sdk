"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedAPIResourceList$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.NamedAPIResourceList$ = zod_1.z.object({
    count: zod_1.z.number(),
    next: zod_1.z.string().nullable(),
    previous: zod_1.z.string().nullable(),
    results: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
});
//# sourceMappingURL=namedapiresourcelist.js.map