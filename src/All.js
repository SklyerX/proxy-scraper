const input = require("input");
const fs = require("fs");

async function http() {

    const getTimeout = await input.text("Timeout of proxies: ", {
        default: "1000"
    })

    const getAnonimity = await input.text("Anonimity Type [elite, anonymous, transparent, all]: ", {
        default: "elite"
    })

    const getCountry = await input.text("Country Code: ", {
        default: "us"
    })

    const getSsl = await input.text("Ssl of proxies [yes, no, all]: ", {
        default: "yes"
    })

    const getLimit = await input.text("Proxy Limit (number only): ", {
        default: "1000"
    })

    const ready = await input.text("Ready to start (yes/no): ", {
        default: "yes"
    })

    if (ready === "yes") {
        const ProxyScraper = require('simple-proxy-scraper');
        let options = {
            timeout: getTimeout, //Timeout of proxies in MS
            proxytype: "all", //Type of proxy - Must be an element of the array ['http', 'socks4', 'socks5', 'all']
            anonimity: `${getAnonimity}`, //Must be an element of the array ['elite', 'anonymous', 'transparent', 'all']
            country: `${getCountry}`, //Must be a country code
            ssl: `${getSsl}`, //Whether proxy has SSL or not - Must be type ['yes', 'no', 'all']
            limit: getLimit //Must be an integer - Amount of proxies it limits response to
        }
        console.clear();
        await ProxyScraper.ProxyScrape.getProxies(options);
    }

}

module.exports = http;