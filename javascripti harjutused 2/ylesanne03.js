// Nimi: Oliver-Hendrik Hermlin
// Kuupaev: 07.09.2026
// Ulesande number: 02

// Kellaaeg
let tunnid = 2;
let minutid = 38;
let sekundid = 59;

let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg);

let tsitaat = "The only way to do great work is to love what you do";
let tsitaatautor = '"' + tsitaat + '" - Steve Jobs';
console.log(tsitaatautor)

let eesnimi = "Juri";
let perenimi = "Jurakas";

let eesnimiTaht = eesnimi[0];
let perenimiTaht = perenimi[0];

console.log(`${eesnimi} ${perenimi} nimetähed on ${eesnimiTaht}.${perenimiTaht}.`);


// Perenime pikkus
let nimi = "Jurakas, Juri";

let komaAsukoht = nimi.indexOf(",");
let perenimiEraldatud = nimi.substring(0, komaAsukoht);

console.log(perenimiEraldatud.toUpperCase());
console.log(perenimiEraldatud.length);


// E-posti aadressi muutmine
let epost = "karrolk@netlog.com";

let uusEpost = epost.replace("netlog", "gmail");

console.log(uusEpost);


// Andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

let andmed = andmerida.split(",");

let email = andmed[3];
let ipAadress = andmed[5];

let kasutajanimi = email.split("@")[0];

console.log(ipAadress);
console.log(kasutajanimi);