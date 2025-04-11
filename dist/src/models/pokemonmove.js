"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMove$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonMove$ = zod_1.z.object({
    move: namedapiresource_1.NamedAPIResource$,
    version_group_details: zod_1.z.array(zod_1.z.object({
        level_learned_at: zod_1.z.number(),
        version_group: namedapiresource_1.NamedAPIResource$,
        move_learn_method: namedapiresource_1.NamedAPIResource$,
    })),
});
//# sourceMappingURL=pokemonmove.js.map