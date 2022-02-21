import minimist from "minimist"
import { coinFlips } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))
if (args.number == null) { args.number = 1 }

let record = coinFlips(args.number)
console.log(record)
let heads = 0
let tails = 0
for (let i = 0; i < args.number; i++) {
    if (record[i] == "heads") {
        heads++
    } else {
        tails++
    }
}
console.log("{ tails: " + tails +", heads:" + heads + " }")