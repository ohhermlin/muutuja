function nimi() {
    console.log("Oliver");

}
const minuNimi2 = () => {
    console.log("Oliver");
}
function kuupaev() {
    console.log("25.09.2026 kuupäev");


}

function arvuta(...arvud) {
    let summa = 0;

    for (let i = 0; i < arvud.length; i++) {
        summa += arvud[i];
    }

    let keskmine = summa / arvud.length;

    return [arvud.length, keskmine];
}

console.log(arvuta(5, 10, 15, 20));

const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõäöü]/gi, "*");
};

console.log(salajaneSonum("Tere maailm"));

const leiaUnikaalsedNimed = (nimed) => {
    return [...new Set(nimed)];
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));