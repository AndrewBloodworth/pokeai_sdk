import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The stats of a pokemon.
 */
export interface PokemonStats {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}
/** @internal */
export declare const PokemonStats$: z.ZodObject<{
    base_stat: z.ZodNumber;
    effort: z.ZodNumber;
    stat: z.ZodObject<{
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
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}, {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}>;
//# sourceMappingURL=pokemonstats.d.ts.map