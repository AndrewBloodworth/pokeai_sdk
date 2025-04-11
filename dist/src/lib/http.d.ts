export type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
export interface HTTPClientOptions {
    fetcher?: Fetcher;
}
export declare class HTTPClient {
    private fetcher;
    constructor(options?: HTTPClientOptions);
    request(request: Request): Promise<Response>;
}
export declare function matchContentType(response: Response, pattern: string): boolean;
export declare function matchStatusCode(response: Response, codes: number | string | (number | string)[]): boolean;
export declare function matchResponse(response: Response, code: number | string | (number | string)[], contentTypePattern: string): boolean;
export declare function unpackHeaders(headers: Headers): Record<string, string[]>;
//# sourceMappingURL=http.d.ts.map