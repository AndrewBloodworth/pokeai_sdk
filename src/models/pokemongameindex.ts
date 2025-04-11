import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The game index of a pokemon.
 */
export interface PokemonGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

/** @internal */
export const PokemonGameIndex$ = z.object({
  game_index: z.number(),
  version: NamedAPIResource$,
});
