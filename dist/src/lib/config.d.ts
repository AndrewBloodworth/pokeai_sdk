import * as models from "../models";
import { HTTPClient } from "./http";
/**
 * The production server.
 */
export declare const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: {
    readonly prod: "https://pokeapi.co/api/v2";
};
/**
 * The environment name. Defaults to the production environment.
 */
export declare enum ServerEnvironment {
    Prod = "prod"
}
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: models.Security | (() => Promise<models.Security>);
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;
    /**
     * Allows setting the organization variable for url substitution
     */
    organization?: string;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare function serverURLFromOptions(options: SDKOptions): URL;
export declare const SDK_METADATA: Readonly<{
    language: "typescript";
    openapiDocVersion: "1.0.0";
    sdkVersion: "0.0.1";
    genVersion: "2.210.3";
    userAgent: "pokeai-sdk/typescript 0.0.1 2.210.3 1.0.0 openapi";
}>;
//# sourceMappingURL=config.d.ts.map