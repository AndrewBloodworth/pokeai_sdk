"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationNames$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.GenerationNames$ = zod_1.z.object({
    name: zod_1.z.string(),
    language: namedapiresource_1.NamedAPIResource$,
});
//# sourceMappingURL=generationnames.js.map