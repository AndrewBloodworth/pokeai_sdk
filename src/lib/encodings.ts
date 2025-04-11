import { bytesToBase64 } from "./base64";

function formEncoder(sep: string) {
  return (
    key: string,
    value: unknown,
    options?: { explode?: boolean; charEncoding?: "percent" | "none" }
  ) => {
    let out = "";
    const pairs: [string, unknown][] = options?.explode
      ? explode(key, value)
      : [[key, value]];

    const encodeString = (v: string) => {
      return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };

    const encodeValue = (v: unknown) => encodeString(serializeValue(v));

    const encodedSep = encodeString(sep);

    pairs.forEach(([pk, pv]) => {
      let tmp = "";
      let encValue = "";

      if (pv === undefined) {
        return;
      } else if (Array.isArray(pv)) {
        encValue = mapDefined(pv, (v) => `${encodeValue(v)}`).join(encodedSep);
      } else if (isPlainObject(pv)) {
        encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
          return `${encodeString(k)}${encodedSep}${encodeValue(v)}`;
        }).join(encodedSep);
      } else {
        encValue = `${encodeValue(pv)}`;
      }

      tmp = `${encodeString(pk)}=${encValue}`;

      // If we end up with the nothing then skip forward
      if (!tmp || tmp === "=") {
        return;
      }

      out += `&${tmp}`;
    });

    return out.slice(1);
  };
}

export const encodeForm = formEncoder(",");

function explode(key: string, value: unknown): [string, unknown][] {
  if (Array.isArray(value)) {
    return value.map((v) => [key, v]);
  } else if (isPlainObject(value)) {
    const o = value ?? {};
    return Object.entries(o).map(([k, v]) => [k, v]);
  } else {
    return [[key, value]];
  }
}

function isPlainObject(value: unknown): value is object {
  if (typeof value !== "object" || value == null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

function serializeValue(value: unknown): string {
  if (value === null) {
    return "null";
  } else if (typeof value === "undefined") {
    return "";
  } else if (value instanceof Date) {
    return value.toISOString();
  } else if (value instanceof Uint8Array) {
    return bytesToBase64(value);
  } else if (typeof value === "object") {
    return JSON.stringify(value, jsonReplacer);
  }

  return `${value}`;
}

function jsonReplacer(_: string, value: unknown) {
  if (value instanceof Uint8Array) {
    return bytesToBase64(value);
  } else {
    return value;
  }
}

function mapDefined<T, R>(inp: T[], mapper: (v: T) => R): R[] {
  return inp.reduce<R[]>((acc, v) => {
    if (v === undefined) {
      return acc;
    }

    const m = mapper(v);
    if (m === undefined) {
      return acc;
    }

    acc.push(m);

    return acc;
  }, []);
}

function mapDefinedEntries<K, V, R>(
  inp: Iterable<[K, V]>,
  mapper: (v: [K, V]) => R
): R[] {
  const acc: R[] = [];
  for (const [k, v] of inp) {
    if (v === undefined) {
      continue;
    }

    const m = mapper([k, v]);
    if (m === undefined) {
      continue;
    }

    acc.push(m);
  }

  return acc;
}
