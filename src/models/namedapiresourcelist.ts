import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";

export interface NamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NamedAPIResource>;
}

/** @internal */
export const NamedAPIResourceList$ = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(NamedAPIResource$),
});
