import {
  HTTPClient,
  matchResponse,
  matchStatusCode,
  unpackHeaders,
} from "./http";
import {
  SecurityState,
  resolveSecurity,
  resolveGlobalSecurity,
} from "./security";
import { pathToFunc } from "./url";
import { encodeForm } from "./encodings";
import { stringToBase64 } from "./base64";
export type RequestOptions = {
  fetchOptions?: Omit<RequestInit, "method" | "body">;
};

type RequestConfig = {
  method: string;
  path: string;
  baseURL?: string | URL;
  query?: string;
  body?: RequestInit["body"];
  headers?: HeadersInit;
  security?: SecurityState | null;
};

export class ClientSDK {
  readonly #client: HTTPClient;
  protected readonly baseURL: URL;
  constructor(init: { client: HTTPClient; baseURL: URL }) {
    const url = init.baseURL;
    url.pathname = url.pathname.replace(/\/+$/, "") + "/";

    this.#client = init.client;
    this.baseURL = url;
  }

  protected async fetch$(conf: RequestConfig, options?: RequestOptions) {
    const { method, path, query, headers: opHeaders, security } = conf;

    const reqURL = new URL(conf.baseURL ?? this.baseURL);
    const inputURL = new URL(path, reqURL);

    if (path) {
      reqURL.pathname += inputURL.pathname.replace(/^\/+/, "");
    }

    let finalQuery = query || "";

    const secQuery: string[] = [];
    for (const [k, v] of Object.entries(security?.queryParams || {})) {
      secQuery.push(encodeForm(k, v, { charEncoding: "percent" }));
    }
    if (secQuery.length) {
      finalQuery += `&${secQuery.join("&")}`;
    }

    if (finalQuery) {
      const q = finalQuery.startsWith("&") ? finalQuery.slice(1) : finalQuery;
      reqURL.search = `?${q}`;
    }

    const headers = new Headers(opHeaders);

    const username = security?.basic.username || "";
    const password = security?.basic.password || "";
    if (username) {
      const encoded = stringToBase64([username, password].join(":"));
      headers.set("Authorization", `Basic ${encoded}`);
    }

    const securityHeaders = new Headers(security?.headers || {});
    for (const [k, v] of securityHeaders) {
      headers.set(k, v);
    }

    let cookie = headers.get("cookie") || "";
    for (const [k, v] of Object.entries(security?.cookies || {})) {
      cookie += `; ${k}=${v}`;
    }
    cookie = cookie.startsWith("; ") ? cookie.slice(2) : cookie;
    headers.set("cookie", cookie);

    const userHeaders = new Headers(options?.fetchOptions?.headers);
    for (const [k, v] of userHeaders) {
      headers.set(k, v);
    }

    const req = new Request(reqURL, {
      ...options?.fetchOptions,
      body: conf.body ?? null,
      headers,
      method,
    });

    return this.#client.request(req);
  }

  protected unpackHeaders = unpackHeaders;

  protected matchStatusCode = matchStatusCode;
  protected matchResponse = matchResponse;

  protected templateURLComponent = pathToFunc;

  protected resolveSecurity = resolveSecurity;
  protected resolveGlobalSecurity = resolveGlobalSecurity;
}
