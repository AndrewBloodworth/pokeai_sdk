# PokeAPI SDK (TypeScript)

A simple, strongly-typed SDK for the [PokeAPI](https://pokeapi.co/), providing a clean developer experience for interacting with Pokémon and Generations endpoints.

## Installation

```bash
npm install
# or
yarn install
```

```bash
# Install TypeScript globally if you haven't already
npm install -g typescript

# Transpile the TypeScript source to the `dist` folder
tsc
```

## Getting Started

### Run Example

```bash
npm run start:dev
```

### Initialize the SDK

```ts
import { PokeAPI } from "./src";

const client = new PokeAPI();
```

---

### Get One Pokémon

```ts
const { classes: pikachu } = await client.pokemon.findOne("pikachu");
console.log(pikachu?.name); // => "pikachu"

const { classes: bulbasaur } = await client.pokemon.findOne(1);
console.log(bulbasaur?.name); // => "bulbasaur"
```

---

### List All Pokémon with Pagination

```ts
let pokemons = await client.pokemon.findAll({ limit: 20 });

while (pokemons) {
  pokemons = await pokemons.next();
}
```

---

### Get a Generation

```ts
const { classes: generationI } = await client.generation.findOne(
  "generation-i"
);
console.log(generationI?.name); // => "generation-i"

const { classes: generationII } = await client.generation.findOne(2);
console.log(generationII?.name); // => "generation-ii"
```

---

### Paginate Generations

```ts
let generations = await client.generation.findAll({ limit: 20 });

while (generations) {
  generations = await generations.next();
}
```

## Testing

```bash
npm test
```

Integration tests are included under `/tests`. They validate all endpoints, pagination, and error scenarios.

## Design Decisions

Due to the 4-hour time constraint of the take-home project, I chose to leverage the structure and patterns from the [Speakeasy SDK Template](https://github.com/speakeasy-sdks/template-sdk). Speakeasy’s architecture reflects modern best practices for SDK design, and using it as a foundation allowed me to focus on delivering functionality quickly while maintaining high code quality.

- **Pagination Helpers**: Instead of returning raw `next`/`previous` URLs from paginated endpoints, we return a typed `next()` function for better developer ergonomics and flow control.
- **Typed Zod Schemas**: We use `zod` to safely validate and transform inbound API data and outbound request shapes, reducing the likelihood of runtime errors.
- **Manual SDK**: In accordance with the instructions, no auto-generated code was used. All request/response logic was implemented by hand.
- **SDK Separation**: The code is structured using `lib`, `models`, and `sdk` folders to maintain clean separation of concerns—mirroring Speakeasy’s proven structure and making the SDK more maintainable and testable.
- **Testing with Vitest**: We use Vitest as our testing framework for fast and modern unit + integration testing with great TypeScript support and performance.
