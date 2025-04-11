import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The held items of a pokemon.
 */
export interface PokemonHeldItems {
  item: NamedAPIResource;
  version_details: Array<{
    rarity: number;
    version: NamedAPIResource;
  }>;
}

/** @internal */
export const PokemonHeldItems$ = z.object({
  item: NamedAPIResource$,
  version_details: z.array(
    z.object({
      rarity: z.number(),
      version: NamedAPIResource$,
    })
  ),
});
