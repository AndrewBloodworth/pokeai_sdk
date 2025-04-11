"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStats$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonStats$ = zod_1.z.object({
    base_stat: zod_1.z.number(),
    effort: zod_1.z.number(),
    stat: namedapiresource_1.NamedAPIResource$,
});
//# sourceMappingURL=pokemonstats.js.map