"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("./src");
// import { Pokemons } from "./src/sdk/pokemons";
(async () => {
    const client = new src_1.PokeAPI({});
    // const pokemon = new Pokemons({});
    // await pokemon.findOne("not-a-real-pokemon");
    const data = await client.pokemon.findOne(2);
    console.log(data.statusCode);
})();
//# sourceMappingURL=test.js.map