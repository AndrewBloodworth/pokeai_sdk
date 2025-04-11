export type Fetcher = (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response>;

export interface HTTPClientOptions {
  fetcher?: Fetcher;
}

export class HTTPClient {
  private fetcher: Fetcher;
  constructor(options: HTTPClientOptions = {}) {
    this.fetcher = options.fetcher || fetch;
  }
  async request(request: Request): Promise<Response> {
    try {
      const res = await this.fetcher(request);
      return res;
    } catch (err) {
      throw err;
    }
  }
}

export function matchContentType(response: Response, pattern: string): boolean {
  if (pattern === "*" || pattern === "*/*") {
    return true;
  }

  const contentType =
    response.headers.get("content-type") ?? "application/octet-stream";

  const idx = contentType.split(";").findIndex((raw) => {
    const ctype = raw.trim();
    if (ctype === pattern) {
      return true;
    }

    const parts = ctype.split("/");
    if (parts.length !== 2) {
      return false;
    }

    return `${parts[0]}/*` === pattern || `*/${parts[1]}` === pattern;
  });

  return idx >= 0;
}

const codeRangeRE = new RegExp("^[0-9]xx$", "i");

export function matchStatusCode(
  response: Response,
  codes: number | string | (number | string)[]
) {
  const actual = `${response.status}`;
  const expectedCodes = Array.isArray(codes) ? codes : [codes];

  if (!expectedCodes.length) {
    return false;
  }

  return expectedCodes.some((ec) => {
    const code = `${ec}`;

    if (code === "default") {
      return true;
    }

    if (!codeRangeRE.test(`${code}`)) {
      return code === actual;
    }

    const expectFamily = code.charAt(0);
    if (!expectFamily) {
      throw new Error("Invalid status code range");
    }

    const actualFamily = actual.charAt(0);
    if (!actualFamily) {
      throw new Error(`Invalid response status code: ${actual}`);
    }

    return actualFamily === expectFamily;
  });
}

export function matchResponse(
  response: Response,
  code: number | string | (number | string)[],
  contentTypePattern: string
): boolean {
  return (
    matchStatusCode(response, code) &&
    matchContentType(response, contentTypePattern)
  );
}

const headerValRE = /, */;
export function unpackHeaders(headers: Headers): Record<string, string[]> {
  const out: Record<string, string[]> = {};

  for (const [k, v] of headers.entries()) {
    out[k] = v.split(headerValRE);
  }

  return out;
}
