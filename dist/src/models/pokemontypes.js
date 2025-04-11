"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonType$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
exports.PokemonType$ = zod_1.z.object({
    slot: zod_1.z.number(),
    type: namedapiresource_1.NamedAPIResource$,
});
//# sourceMappingURL=pokemontypes.js.map