"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedAPIResource$ = void 0;
const zod_1 = require("zod");
/** @internal */
exports.NamedAPIResource$ = zod_1.z.object({
    name: zod_1.z.string(),
    url: zod_1.z.string(),
});
//# sourceMappingURL=namedapiresource.js.map