"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonPastType$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
const pokemontypes_1 = require("./pokemontypes");
/** @internal */
exports.PokemonPastType$ = zod_1.z.object({
    generation: namedapiresource_1.NamedAPIResource$,
    types: zod_1.z.array(pokemontypes_1.PokemonType$),
});
//# sourceMappingURL=pokemonpasttypes.js.map