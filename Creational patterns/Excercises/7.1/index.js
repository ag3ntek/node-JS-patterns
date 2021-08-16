import { factory } from "./ColorConsole.js";

const color = process.argv[2];
const word = process.argv[3];

factory(color).log(word);