import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
export interface GenerationNames {
    name: string;
    language: NamedAPIResource;
}
/** @internal */
export declare const GenerationNames$: z.ZodObject<{
    name: z.ZodString;
    language: z.ZodObject<{
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
    name: string;
    language: {
        name: string;
        url: string;
    };
}, {
    name: string;
    language: {
        name: string;
        url: string;
    };
}>;
//# sourceMappingURL=generationnames.d.ts.map