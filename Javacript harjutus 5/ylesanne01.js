// Nimi: Oliver
// Kuupaev: 14.09.2026
// Ulesande number: 05

let temperatuur = 22;

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}
let kasutajanimi = "admin";

console.log(kasutajanimi === "admin" ? "Tere, administraator!" : "Tere, külaline!");

let piletitüüp = "täispilet";
let vanus = 20;
let hind;

if (piletitüüp === "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus <= 64) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (piletitüüp === "sooduspilet") {
    if (vanus < 18) {
        hind = 8;
    } else if (vanus <= 64) {
        hind = 15;
    } else {
        hind = 8;
    }
}

console.log("Pileti hind on " + hind + " eurot.");
