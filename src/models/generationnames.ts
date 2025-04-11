import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";

export interface GenerationNames {
  name: string;
  language: NamedAPIResource;
}

/** @internal */
export const GenerationNames$ = z.object({
  name: z.string(),
  language: NamedAPIResource$,
});
