"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonHeldItems$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonHeldItems$ = zod_1.z.object({
    item: namedapiresource_1.NamedAPIResource$,
    version_details: zod_1.z.array(zod_1.z.object({
        rarity: zod_1.z.number(),
        version: namedapiresource_1.NamedAPIResource$,
    })),
});
//# sourceMappingURL=pokemonhelditems.js.map