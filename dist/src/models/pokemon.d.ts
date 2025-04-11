import { z } from "zod";
import { PokemonAbility } from "./pokemonability";
import { PokemonGameIndex } from "./pokemongameindex";
import { PokemonHeldItems } from "./pokemonhelditems";
import { PokemonMove } from "./pokemonmove";
import { PokemonSprites } from "./pokemonsprites";
import { PokemonCry } from "./pokemoncries";
import { PokemonStats } from "./pokemonstats";
import { PokemonType } from "./pokemontypes";
import { PokemonPastType } from "./pokemonpasttypes";
import { NamedAPIResource } from "./namedapiresource";
export type Pokemon = {
    /**
     * The ID of the Pokémon.
     */
    id: number;
    /**
     * The name of the Pokémon.
     */
    name: string;
    /**
     * The base experience gained for defeating this Pokémon.
     */
    base_experience: number;
    /**
     * The height of the Pokémon in decimetres.
     */
    height: number;
    /**
     * Whether this is the default depiction of the Pokémon.
     */
    is_default: boolean;
    /**
     * The order in which Pokémon should be sorted.
     * Often used for sorting by appearance or evolution order.
     */
    order: number;
    /**
     * The weight of the Pokémon in hectograms.
     */
    weight: number;
    /**
     * A list of abilities the Pokémon could potentially have.
     */
    abilities: Array<PokemonAbility>;
    /**
     * A list of forms this Pokémon can take.
     */
    forms: Array<NamedAPIResource>;
    /**
     * A list of game indices that reference this Pokémon in different versions.
     */
    game_indices: Array<PokemonGameIndex>;
    /**
     * A list of items this Pokémon may be holding when encountered.
     */
    held_items: Array<PokemonHeldItems>;
    /**
     * The URL to fetch encounter locations for this Pokémon.
     */
    location_area_encounters: string;
    /**
     * A list of moves this Pokémon can learn.
     */
    moves: Array<PokemonMove>;
    /**
     * The species this Pokémon belongs to.
     */
    species: NamedAPIResource;
    /**
     * A set of sprites used to depict this Pokémon in various ways.
     */
    sprites: PokemonSprites;
    /**
     * Audio cries for this Pokémon, typically used in games.
     */
    cries: PokemonCry;
    /**
     * A list of base stats for this Pokémon (HP, Attack, Defense, etc.).
     */
    stats: Array<PokemonStats>;
    /**
     * A list of types assigned to this Pokémon (e.g., Fire, Water).
     */
    types: Array<PokemonType>;
    /**
     * A list of types this Pokémon had in previous game versions.
     */
    past_types: Array<PokemonPastType>;
};
/** @internal */
export declare namespace Pokemon$ {
    type Inbound = {
        id: number;
        name: string;
        base_experience: number;
        height: number;
        is_default: boolean;
        order: number;
        weight: number;
        abilities: Array<PokemonAbility>;
        forms: Array<NamedAPIResource>;
        game_indices: Array<PokemonGameIndex>;
        held_items: Array<PokemonHeldItems>;
        location_area_encounters: string;
        moves: Array<PokemonMove>;
        species: NamedAPIResource;
        sprites: PokemonSprites;
        cries: PokemonCry;
        stats: Array<PokemonStats>;
        types: Array<PokemonType>;
        past_types: Array<PokemonPastType>;
    };
    const inboundSchema: z.ZodType<Pokemon, z.ZodTypeDef, Inbound>;
    type Outbound = {
        id: number;
        name: string;
        base_experience: number;
        height: number;
        is_default: boolean;
        order: number;
        weight: number;
        abilities: Array<PokemonAbility>;
        forms: Array<NamedAPIResource>;
        game_indices: Array<PokemonGameIndex>;
        held_items: Array<PokemonHeldItems>;
        location_area_encounters: string;
        moves: Array<PokemonMove>;
        species: NamedAPIResource;
        sprites: PokemonSprites;
        cries: PokemonCry;
        stats: Array<PokemonStats>;
        types: Array<PokemonType>;
        past_types: Array<PokemonPastType>;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pokemon>;
}
//# sourceMappingURL=pokemon.d.ts.map