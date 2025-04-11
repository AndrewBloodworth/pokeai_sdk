"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generation$ = void 0;
const zod_1 = require("zod");
const namedapiresource_1 = require("./namedapiresource");
const generationnames_1 = require("./generationnames");
/** @internal */
var Generation$;
(function (Generation$) {
    Generation$.inboundSchema = zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        abilities: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        main_region: namedapiresource_1.NamedAPIResource$,
        moves: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        names: zod_1.z.array(generationnames_1.GenerationNames$),
        pokemon_species: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        types: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        version_groups: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
    })
        .transform((v) => {
        return {
            id: v.id,
            name: v.name,
            abilities: v.abilities,
            main_region: v.main_region,
            moves: v.moves,
            names: v.names,
            pokemon_species: v.pokemon_species,
            types: v.types,
            version_groups: v.version_groups,
        };
    });
    Generation$.outboundSchema = zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        abilities: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        main_region: namedapiresource_1.NamedAPIResource$,
        moves: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        names: zod_1.z.array(generationnames_1.GenerationNames$),
        pokemon_species: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        types: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        version_groups: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
    })
        .transform((v) => {
        return {
            id: v.id,
            name: v.name,
            abilities: v.abilities,
            main_region: v.main_region,
            moves: v.moves,
            names: v.names,
            pokemon_species: v.pokemon_species,
            types: v.types,
            version_groups: v.version_groups,
        };
    });
})(Generation$ || (exports.Generation$ = Generation$ = {}));
//# sourceMappingURL=generation.js.map