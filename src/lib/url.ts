const hasOwn = Object.prototype.hasOwnProperty;

export function pathToFunc(
  pathPattern: string,
  options?: { charEncoding?: "percent" | "none" }
): (params?: Record<string, string | number>) => string {
  const paramRE = /\{([a-zA-Z0-9_]+?)\}/g;

  return function buildURLPath(params: Record<string, unknown> = {}): string {
    return pathPattern.replace(paramRE, function (_, placeholder) {
      if (!hasOwn.call(params, placeholder)) {
        throw new Error(`Parameter '${placeholder}' is required`);
      }

      const value = params[placeholder];
      if (typeof value !== "string" && typeof value !== "number") {
        throw new Error(
          `Parameter '${placeholder}' must be a string or number`
        );
      }

      return options?.charEncoding === "percent"
        ? encodeURIComponent(`${value}`)
        : `${value}`;
    });
  };
}

export function parseUrlParam(url: string, key: string) {
  if (!url) return null;
  const parsed = new URL(url);
  const param = parsed.searchParams.get(key);
  return param || null;
}
