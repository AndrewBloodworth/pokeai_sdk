import { z } from "zod";
import { ErrorT, ErrorT$ } from "./error";
import {
  NamedAPIResourceList,
  NamedAPIResourceList$,
} from "./namedapiresourcelist";

export type ListPokemonRequest = {
  limit: number;
  offset?: number | undefined;
};

export type ListPokemonResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * An unknown error occurred interacting with the API.
   */
  error?: ErrorT | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * A list of pokemon.
   */
  classes?: NamedAPIResourceList | undefined;
};

/** @internal */
export namespace ListPokemonRequest$ {
  export type Inbound = {
    limit: number;
    offset?: number | undefined;
  };

  export const inboundSchema: z.ZodType<
    ListPokemonRequest,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      limit: z.number(),
      offset: z.number().optional(),
    })
    .transform((v) => {
      return {
        limit: v.limit,
        offset: v.offset,
      };
    });

  export type Outbound = {
    limit: number;
    offset?: number | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListPokemonRequest
  > = z
    .object({ limit: z.number(), offset: z.number().optional() })
    .transform((v) => {
      return { limit: v.limit, offset: v.offset };
    });
}

/** @internal */
export namespace ListPokemonsResponse$ {
  export type Inbound = {
    ContentType: string;
    Error?: ErrorT$.Inbound | undefined;
    StatusCode: number;
    RawResponse: Response;
    classes?: NamedAPIResourceList;
  };

  export const inboundSchema: z.ZodType<
    ListPokemonResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      Error: ErrorT$.inboundSchema.optional(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      classes: NamedAPIResourceList$,
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        ...(v.Error === undefined ? null : { error: v.Error }),
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.classes === undefined
          ? null
          : {
              classes: v.classes,
            }),
      };
    });

  export type Outbound = {
    ContentType: string;
    Error?: ErrorT$.Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
    classes?: NamedAPIResourceList;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListPokemonResponse
  > = z
    .object({
      contentType: z.string(),
      error: ErrorT$.outboundSchema.optional(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      classes: NamedAPIResourceList$,
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        ...(v.error === undefined ? null : { Error: v.error }),
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.classes === undefined ? null : { classes: v.classes }),
      };
    });
}
