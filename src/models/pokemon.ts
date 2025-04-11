import { z } from "zod";
import { PokemonAbility, PokemonAbility$ } from "./pokemonability";
import { PokemonGameIndex, PokemonGameIndex$ } from "./pokemongameindex";
import { PokemonHeldItems, PokemonHeldItems$ } from "./pokemonhelditems";
import { PokemonMove, PokemonMove$ } from "./pokemonmove";
import { PokemonSprites, PokemonSprites$ } from "./pokemonsprites";
import { PokemonCry, PokemonCry$ } from "./pokemoncries";
import { PokemonStats, PokemonStats$ } from "./pokemonstats";
import { PokemonType, PokemonType$ } from "./pokemontypes";
import { PokemonPastType, PokemonPastType$ } from "./pokemonpasttypes";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
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
export namespace Pokemon$ {
  export type Inbound = {
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

  export const inboundSchema: z.ZodType<Pokemon, z.ZodTypeDef, Inbound> = z
    .object({
      id: z.number(),
      name: z.string(),
      base_experience: z.number(),
      height: z.number(),
      is_default: z.boolean(),
      order: z.number(),
      weight: z.number(),
      abilities: z.array(PokemonAbility$),
      forms: z.array(NamedAPIResource$),
      game_indices: z.array(PokemonGameIndex$),
      held_items: z.array(PokemonHeldItems$),
      location_area_encounters: z.string(),
      moves: z.array(PokemonMove$),
      species: NamedAPIResource$,
      sprites: PokemonSprites$,
      cries: PokemonCry$,
      stats: z.array(PokemonStats$),
      types: z.array(PokemonType$),
      past_types: z.array(PokemonPastType$),
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

  export type Outbound = {
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

  export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pokemon> = z
    .object({
      id: z.number(),
      name: z.string(),
      base_experience: z.number(),
      height: z.number(),
      is_default: z.boolean(),
      order: z.number(),
      weight: z.number(),
      abilities: z.array(PokemonAbility$),
      forms: z.array(NamedAPIResource$),
      game_indices: z.array(PokemonGameIndex$),
      held_items: z.array(PokemonHeldItems$),
      location_area_encounters: z.string(),
      moves: z.array(PokemonMove$),
      species: NamedAPIResource$,
      sprites: PokemonSprites$,
      cries: PokemonCry$,
      stats: z.array(PokemonStats$),
      types: z.array(PokemonType$),
      past_types: z.array(PokemonPastType$),
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
}
