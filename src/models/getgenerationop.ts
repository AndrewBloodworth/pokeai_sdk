import { z } from "zod";
import { ErrorT, ErrorT$ } from "./error";
import { Generation, Generation$ } from "./generation";

export type GetGenerationRequest = {
  /**
   * Id or name of the pokemon.
   */
  idOrName: string | number;
};

export type GetGenerationResponse = {
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
   * A generation.
   */
  classes?: Generation | undefined;
};

/** @internal */
export namespace GetGenerationsRequest$ {
  export type Inbound = {
    idOrName: string | number;
  };

  export const inboundSchema: z.ZodType<
    GetGenerationRequest,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      idOrName: z.union([z.string(), z.number()]),
    })
    .transform((v) => {
      return { idOrName: v.idOrName };
    });

  export type Outbound = {
    idOrName: string | number;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    GetGenerationRequest
  > = z
    .object({
      idOrName: z.union([z.string(), z.number()]),
    })
    .transform((v) => {
      return { idOrName: v.idOrName };
    });
}

/** @internal */
export namespace GetGenerationsResponse$ {
  export type Inbound = {
    ContentType: string;
    Error?: ErrorT$.Inbound | undefined;
    StatusCode: number;
    RawResponse: Response;
    classes?: Generation$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    GetGenerationResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      Error: ErrorT$.inboundSchema.optional(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      classes: Generation$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        ...(v.Error === undefined ? null : { error: v.Error }),
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.classes === undefined ? null : { classes: v.classes }),
      };
    });

  export type Outbound = {
    ContentType: string;
    Error?: ErrorT$.Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
    classes?: Generation$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    GetGenerationResponse
  > = z
    .object({
      contentType: z.string(),
      error: ErrorT$.outboundSchema.optional(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      classes: Generation$.outboundSchema.optional(),
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
