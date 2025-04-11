# PokeAPI SDK (TypeScript)

A simple, strongly-typed SDK for the [PokeAPI](https://pokeapi.co/), providing a clean developer experience for interacting with Pokémon and Generations endpoints.

## Installation

```bash
npm install
# or
yarn install
```

## Getting Started

### Initialize the SDK

```ts
import { PokeAPI } from "./src";

const client = new PokeAPI();
```

---

### Get One Pokémon

```ts
const result = await client.pokemon.findOne("pikachu");
console.log(result.classes?.name); // => "pikachu"
```

---

### List All Pokémon with Pagination

```ts
let data = await client.pokemon.findAll({ limit: 20 });
while (data) {
  if (data.next) {
    data = await data.next();
  } else {
    break;
  }
}
```

---

### Get a Generation

```ts
const gen = await client.generation.findOne(1);
console.log(gen.classes?.name);
```

---

### Paginate Generations

```ts
let data = await client.generation.findAll({ limit: 1 });
while (data) {
  if (data.next) {
    data = await data.next();
  } else {
    break;
  }
}
```

## Testing

```bash
npm vitest
```

Integration tests are included under `/tests`. They validate all endpoints, pagination, and error scenarios.

## Design Decisions

Due to the 4-hour time constraint of the take-home project, I chose to leverage the structure and patterns from the [Speakeasy SDK Template](https://github.com/speakeasy-sdks/template-sdk). Speakeasy’s architecture reflects modern best practices for SDK design, and using it as a foundation allowed me to focus on delivering functionality quickly while maintaining high code quality.

- **Pagination Helpers**: Instead of returning raw `next`/`previous` URLs from paginated endpoints, we return a typed `next()` function for better developer ergonomics and flow control.
- **Typed Zod Schemas**: We use `zod` to safely validate and transform inbound API data and outbound request shapes, reducing the likelihood of runtime errors.
- **Manual SDK**: In accordance with the instructions, no auto-generated code was used. All request/response logic was implemented by hand.
- **SDK Separation**: The code is structured using `lib`, `models`, and `sdk` folders to maintain clean separation of concerns—mirroring Speakeasy’s proven structure and making the SDK more maintainable and testable.
