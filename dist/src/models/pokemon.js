"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon$ = void 0;
const zod_1 = require("zod");
const pokemonability_1 = require("./pokemonability");
const pokemongameindex_1 = require("./pokemongameindex");
const pokemonhelditems_1 = require("./pokemonhelditems");
const pokemonmove_1 = require("./pokemonmove");
const pokemonsprites_1 = require("./pokemonsprites");
const pokemoncries_1 = require("./pokemoncries");
const pokemonstats_1 = require("./pokemonstats");
const pokemontypes_1 = require("./pokemontypes");
const pokemonpasttypes_1 = require("./pokemonpasttypes");
const namedapiresource_1 = require("./namedapiresource");
/** @internal */
var Pokemon$;
(function (Pokemon$) {
    Pokemon$.inboundSchema = zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        base_experience: zod_1.z.number(),
        height: zod_1.z.number(),
        is_default: zod_1.z.boolean(),
        order: zod_1.z.number(),
        weight: zod_1.z.number(),
        abilities: zod_1.z.array(pokemonability_1.PokemonAbility$),
        forms: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        game_indices: zod_1.z.array(pokemongameindex_1.PokemonGameIndex$),
        held_items: zod_1.z.array(pokemonhelditems_1.PokemonHeldItems$),
        location_area_encounters: zod_1.z.string(),
        moves: zod_1.z.array(pokemonmove_1.PokemonMove$),
        species: namedapiresource_1.NamedAPIResource$,
        sprites: pokemonsprites_1.PokemonSprites$,
        cries: pokemoncries_1.PokemonCry$,
        stats: zod_1.z.array(pokemonstats_1.PokemonStats$),
        types: zod_1.z.array(pokemontypes_1.PokemonType$),
        past_types: zod_1.z.array(pokemonpasttypes_1.PokemonPastType$),
    })
        .transform((v) => {
        return {
            id: v.id,
            name: v.name,
            base_experience: v.base_experience,
            height: v.height,
            is_default: v.is_default,
            order: v.order,
            weight: v.weight,
            abilities: v.abilities,
            forms: v.forms,
            game_indices: v.game_indices,
            held_items: v.held_items,
            location_area_encounters: v.location_area_encounters,
            moves: v.moves,
            species: v.species,
            sprites: v.sprites,
            cries: v.cries,
            stats: v.stats,
            types: v.types,
            past_types: v.past_types,
        };
    });
    Pokemon$.outboundSchema = zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        base_experience: zod_1.z.number(),
        height: zod_1.z.number(),
        is_default: zod_1.z.boolean(),
        order: zod_1.z.number(),
        weight: zod_1.z.number(),
        abilities: zod_1.z.array(pokemonability_1.PokemonAbility$),
        forms: zod_1.z.array(namedapiresource_1.NamedAPIResource$),
        game_indices: zod_1.z.array(pokemongameindex_1.PokemonGameIndex$),
        held_items: zod_1.z.array(pokemonhelditems_1.PokemonHeldItems$),
        location_area_encounters: zod_1.z.string(),
        moves: zod_1.z.array(pokemonmove_1.PokemonMove$),
        species: namedapiresource_1.NamedAPIResource$,
        sprites: pokemonsprites_1.PokemonSprites$,
        cries: pokemoncries_1.PokemonCry$,
        stats: zod_1.z.array(pokemonstats_1.PokemonStats$),
        types: zod_1.z.array(pokemontypes_1.PokemonType$),
        past_types: zod_1.z.array(pokemonpasttypes_1.PokemonPastType$),
    })
        .transform((v) => {
        return {
            id: v.id,
            name: v.name,
            base_experience: v.base_experience,
            height: v.height,
            is_default: v.is_default,
            order: v.order,
            weight: v.weight,
            abilities: v.abilities,
            forms: v.forms,
            game_indices: v.game_indices,
            held_items: v.held_items,
            location_area_encounters: v.location_area_encounters,
            moves: v.moves,
            species: v.species,
            sprites: v.sprites,
            cries: v.cries,
            stats: v.stats,
            types: v.types,
            past_types: v.past_types,
        };
    });
})(Pokemon$ || (exports.Pokemon$ = Pokemon$ = {}));
//# sourceMappingURL=pokemon.js.map