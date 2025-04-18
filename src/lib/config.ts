import * as models from "../models";
import { HTTPClient } from "./http";
import { pathToFunc } from "./url";

/**
 * The production server.
 */
export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://pokeapi.co/api/v2",
} as const;

/**
 * The environment name. Defaults to the production environment.
 */
export enum ServerEnvironment {
  Prod = "prod",
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

export function serverURLFromOptions(options: SDKOptions): URL {
  let serverURL = options.serverURL;

  const serverParams = {
    prod: {},
    staging: {},
    customer: {
      environment: options.environment?.toString() ?? "prod",
      organization: options.organization?.toString() ?? "api",
    },
  };

  let params: Record<string, string> = {};
  const server = options.server ?? ServerProd;

  if (!serverURL) {
    serverURL = ServerList[server] || "";
    params = serverParams[server] || {};
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = Object.freeze({
  language: "typescript",
  openapiDocVersion: "1.0.0",
  sdkVersion: "0.0.1",
  genVersion: "2.210.3",
  userAgent: "pokeai-sdk/typescript 0.0.1 2.210.3 1.0.0 openapi",
});
