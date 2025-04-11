import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The moves of pokemon.
 */
export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: Array<{
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
  }>;
}

/** @internal */
export const PokemonMove$ = z.object({
  move: NamedAPIResource$,
  version_group_details: z.array(
    z.object({
      level_learned_at: z.number(),
      version_group: NamedAPIResource$,
      move_learn_method: NamedAPIResource$,
    })
  ),
});
