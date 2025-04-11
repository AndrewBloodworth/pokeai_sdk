"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonAbility$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonAbility$ = zod_1.z.object({
    is_hidden: zod_1.z.boolean(),
    slot: zod_1.z.number(),
    ability: namedapiresource_1.NamedAPIResource$,
});
//# sourceMappingURL=pokemonability.js.map