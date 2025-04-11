import { z } from "zod";
import { ErrorT, ErrorT$ } from "./error";
import { NamedAPIResourceList } from "./namedapiresourcelist";
export type ListGenerationRequest = {
    limit: number;
    offset?: number | undefined;
};
export type ListGenerationResponse = {
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
     * A list of generations.
     */
    classes?: NamedAPIResourceList | undefined;
};
/** @internal */
export declare namespace ListGenerationRequest$ {
    type Inbound = {
        limit: number;
        offset?: number | undefined;
    };
    const inboundSchema: z.ZodType<ListGenerationRequest, z.ZodTypeDef, Inbound>;
    type Outbound = {
        limit: number;
        offset?: number | undefined;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListGenerationRequest>;
}
/** @internal */
export declare namespace ListGenerationResponse$ {
    type Inbound = {
        ContentType: string;
        Error?: ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        classes?: NamedAPIResourceList;
    };
    const inboundSchema: z.ZodType<ListGenerationResponse, z.ZodTypeDef, Inbound>;
    type Outbound = {
        ContentType: string;
        Error?: ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        classes?: NamedAPIResourceList;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListGenerationResponse>;
}
//# sourceMappingURL=listgenerationop.d.ts.map