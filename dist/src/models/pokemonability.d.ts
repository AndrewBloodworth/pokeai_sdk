import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The abilities of a pokemon.
 */
export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}
/** @internal */
export declare const PokemonAbility$: z.ZodObject<{
    is_hidden: z.ZodBoolean;
    slot: z.ZodNumber;
    ability: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    };
}, {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url: string;
    };
}>;
//# sourceMappingURL=pokemonability.d.ts.map