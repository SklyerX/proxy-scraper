// Required Modules
const input = require("input");
const chalk = require("chalk");

// Our Modules
const http = require("./src/http");
const socks4 = require("./src/socks4");
const socks5 = require("./src/socks5");
const All = require("./src/All");

// Application
console.log(`${chalk.yellow("[")}${chalk.blueBright("#")}${chalk.yellow("]")} Loading..`)

async function main() {
    console.clear();

    console.log(`
    
    
    ╔══╦═╦══╦╗╔╦╗─╔╗
    ║╔╗║╔╣╔╗╠╬╬╣║─║║
    ║╚╝║║║╚╝╠╬╬╣╚═╝║
    ║╔═╩╝╚══╩╝╚╩═╗╔╝
    ║║─────────╔═╝║
    ╚╝─────────╚══╝

${chalk.greenBright("> Created by Sky some#6621")}
`)

    console.log(`──────────────────────────────────────────────────────────────────────────────────────────`);
    console.log(` [${chalk.greenBright("1")}] Http`);
    console.log(` [${chalk.greenBright("2")}] Socks4`);
    console.log(` [${chalk.greenBright("3")}] Socks5`);
    console.log(` [${chalk.greenBright("4")}] All`);
    console.log(` [${chalk.greenBright("*")}] Exit`);
    console.log(`──────────────────────────────────────────────────────────────────────────────────────────`);

    const question = await input.text(`[${chalk.blueBright(">>>")}] Choice: `)

    if (question === "1") {
        http();
    } else if (question === "2") {
        socks4();
    } else if (question === "3") {
        socks5();
    } else if (question === "4") {
        All();
    } else if (question === "*") {
        console.log("Exiting Tool..")
        process.exit();
    } else {
        console.log("Invalid option... Trying again 2 seconds");
        setTimeout(() => {
            main()
        }, 2000)
    }
}

module.exports = main;

main();