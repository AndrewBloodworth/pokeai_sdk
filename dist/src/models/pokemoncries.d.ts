import { z } from "zod";
/**
 * The cries of a pokemon.
 */
export interface PokemonCry {
    latest: string;
    legacy: string;
}
/** @internal */
export declare const PokemonCry$: z.ZodObject<{
    latest: z.ZodString;
    legacy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    latest: string;
    legacy: string;
}, {
    latest: string;
    legacy: string;
}>;
//# sourceMappingURL=pokemoncries.d.ts.map