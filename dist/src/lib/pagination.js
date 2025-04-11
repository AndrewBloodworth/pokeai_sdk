"use strict";
// import { z } from "zod";
// import {
//   NamedAPIResourceListInbound$,
//   //   NamedAPIResourceListOutbound,
// } from "../models/namedapiresourcelist";
Object.defineProperty(exports, "__esModule", { value: true });
// export function attachPaginationHelpers(
//   result: z.infer<typeof NamedAPIResourceListInbound$>,
//   listFn: {
//     (params: { limit: number; offset?: number }): any;
//   },
//   limit: number
// ): NamedAPIResourceListOutbound {
//   const getOffsetFromUrl = (url: string | null): number | null => {
//     if (!url) return null;
//     const parsed = new URL(url);
//     const offset = parsed.searchParams.get("offset");
//     return offset ? parseInt(offset) : null;
//   };
//   const nextOffset = getOffsetFromUrl(result.next);
//   const prevOffset = getOffsetFromUrl(result.previous);
//   return {
//     ...result,
//     next:
//       nextOffset !== null ? () => listFn({ limit, offset: nextOffset }) : null,
//     previous:
//       prevOffset !== null ? () => listFn({ limit, offset: prevOffset }) : null,
//   };
// }
//# sourceMappingURL=pagination.js.map