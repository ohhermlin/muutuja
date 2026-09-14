// Nimi: Oliver
// Kuupaev: 14.09.2026
// Ulesande number: 06

let number = -5;

switch (true) {
    case number > 0:
        console.log("Number on positiivne.");
        break;

    case number < 0:
        console.log("Number on negatiivne.");
        break;

    case number === 0:
        console.log("Number on null.");
        break;
}
let broneering = 4;

switch (true) {
    case broneering === 1 || broneering === 2:
        console.log("Valige laud kahele inimesele.");
        break;

    case broneering === 3 || broneering === 4:
        console.log("Valige laud neljale inimesele.");
        break;

    case broneering === 5 || broneering === 6:
        console.log("Valige laud kuuele inimesele.");
        break;

    case broneering > 6:
        console.log("Valige suur laud.");
        break;

    default:
        console.log("Vigane broneeringu arv.");
}
