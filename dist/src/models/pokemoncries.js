"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonCry$ = void 0;
const zod_1 = require("zod");
/** @internal */
exports.PokemonCry$ = zod_1.z.object({
    latest: zod_1.z.string(),
    legacy: zod_1.z.string(),
});
//# sourceMappingURL=pokemoncries.js.map