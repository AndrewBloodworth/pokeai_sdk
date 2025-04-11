import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The abilities of a pokemon.
 */
export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

/** @internal */
export const PokemonAbility$ = z.object({
  is_hidden: z.boolean(),
  slot: z.number(),
  ability: NamedAPIResource$,
});
