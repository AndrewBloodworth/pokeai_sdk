import { z } from "zod";
export interface NamedAPIResource {
    name: string;
    url: string;
}
/** @internal */
export declare const NamedAPIResource$: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    url: string;
}, {
    name: string;
    url: string;
}>;
//# sourceMappingURL=namedapiresource.d.ts.map