"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeForm = void 0;
const base64_1 = require("./base64");
function formEncoder(sep) {
    return (key, value, options) => {
        let out = "";
        const pairs = (options === null || options === void 0 ? void 0 : options.explode)
            ? explode(key, value)
            : [[key, value]];
        const encodeString = (v) => {
            return (options === null || options === void 0 ? void 0 : options.charEncoding) === "percent" ? encodeURIComponent(v) : v;
        };
        const encodeValue = (v) => encodeString(serializeValue(v));
        const encodedSep = encodeString(sep);
        pairs.forEach(([pk, pv]) => {
            let tmp = "";
            let encValue = "";
            if (pv === undefined) {
                return;
            }
            else if (Array.isArray(pv)) {
                encValue = mapDefined(pv, (v) => `${encodeValue(v)}`).join(encodedSep);
            }
            else if (isPlainObject(pv)) {
                encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
                    return `${encodeString(k)}${encodedSep}${encodeValue(v)}`;
                }).join(encodedSep);
            }
            else {
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
exports.encodeForm = formEncoder(",");
function explode(key, value) {
    if (Array.isArray(value)) {
        return value.map((v) => [key, v]);
    }
    else if (isPlainObject(value)) {
        const o = value !== null && value !== void 0 ? value : {};
        return Object.entries(o).map(([k, v]) => [k, v]);
    }
    else {
        return [[key, value]];
    }
}
function isPlainObject(value) {
    if (typeof value !== "object" || value == null)
        return false;
    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}
function serializeValue(value) {
    if (value === null) {
        return "null";
    }
    else if (typeof value === "undefined") {
        return "";
    }
    else if (value instanceof Date) {
        return value.toISOString();
    }
    else if (value instanceof Uint8Array) {
        return (0, base64_1.bytesToBase64)(value);
    }
    else if (typeof value === "object") {
        return JSON.stringify(value, jsonReplacer);
    }
    return `${value}`;
}
function jsonReplacer(_, value) {
    if (value instanceof Uint8Array) {
        return (0, base64_1.bytesToBase64)(value);
    }
    else {
        return value;
    }
}
function mapDefined(inp, mapper) {
    return inp.reduce((acc, v) => {
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
function mapDefinedEntries(inp, mapper) {
    const acc = [];
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
//# sourceMappingURL=encodings.js.map