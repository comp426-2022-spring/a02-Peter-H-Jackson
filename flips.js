import minimist from "minimist"
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
if (args.number == null) { args.number = 1 }

let record = coinFlips(args.number)
console.log(record)
