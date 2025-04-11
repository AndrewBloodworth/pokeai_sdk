"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonGameIndex$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonGameIndex$ = zod_1.z.object({
    game_index: zod_1.z.number(),
    version: namedapiresource_1.NamedAPIResource$,
});
//# sourceMappingURL=pokemongameindex.js.map