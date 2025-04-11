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
export declare namespace GetGenerationsRequest$ {
    type Inbound = {
        idOrName: string | number;
    };
    const inboundSchema: z.ZodType<GetGenerationRequest, z.ZodTypeDef, Inbound>;
    type Outbound = {
        idOrName: string | number;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGenerationRequest>;
}
/** @internal */
export declare namespace GetGenerationsResponse$ {
    type Inbound = {
        ContentType: string;
        Error?: ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        classes?: Generation$.Inbound | undefined;
    };
    const inboundSchema: z.ZodType<GetGenerationResponse, z.ZodTypeDef, Inbound>;
    type Outbound = {
        ContentType: string;
        Error?: ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        classes?: Generation$.Outbound | undefined;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGenerationResponse>;
}
//# sourceMappingURL=getgenerationop.d.ts.map