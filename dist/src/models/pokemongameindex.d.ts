import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The game index of a pokemon.
 */
export interface PokemonGameIndex {
    game_index: number;
    version: NamedAPIResource;
}
/** @internal */
export declare const PokemonGameIndex$: z.ZodObject<{
    game_index: z.ZodNumber;
    version: z.ZodObject<{
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
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}, {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}>;
//# sourceMappingURL=pokemongameindex.d.ts.map