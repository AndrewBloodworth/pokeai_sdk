import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The type of pokemon.
 */
export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}
/** @internal */
export declare const PokemonType$: z.ZodObject<{
    slot: z.ZodNumber;
    type: z.ZodObject<{
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
    type: {
        name: string;
        url: string;
    };
    slot: number;
}, {
    type: {
        name: string;
        url: string;
    };
    slot: number;
}>;
//# sourceMappingURL=pokemontypes.d.ts.map