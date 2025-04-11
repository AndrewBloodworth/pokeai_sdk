import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<NamedAPIResource>;
}
/** @internal */
export declare const NamedAPIResourceList$: z.ZodObject<{
    count: z.ZodNumber;
    next: z.ZodNullable<z.ZodString>;
    previous: z.ZodNullable<z.ZodString>;
    results: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}, {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}>;
//# sourceMappingURL=namedapiresourcelist.d.ts.map