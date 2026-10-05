// TOOTE OBJEKT
let toode = {
  nimetus: "Hambahari",
  hind: 2,
  kogus: 4,

  // Arvutab toote kogusumma
  koguSumma: function() {
    return this.hind * this.kogus;
  },

  // Muudab toote kogust
  muudaKogust: function(uusKogus) {
    this.kogus = uusKogus;
  },

  // Kuvab kogu toote info
  kuvaInfo: function() {
    console.log(
      `${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`
    );
  }
};


// Kuvame omadused
console.log("Nimetus:", toode.nimetus);
console.log("Hind:", toode.hind);
console.log("Kogus:", toode.kogus);

// Kuvame toote kogusumma
console.log("Toote kogusumma:", toode.koguSumma(), "EUR");

// Muudame kogust
toode.muudaKogust(6);

// Kuvame uuendatud info
toode.kuvaInfo();


// OSTUKORVI OBJEKT
const ostukorv = {
  tooted: [
    { nimi: 'Piim', hind: 3.60, kogus: 2 },
    { nimi: 'Leib', hind: 2.00, kogus: 1 },
    { nimi: 'Munad', hind: 1.50, kogus: 6 },
    { nimi: 'Juust', hind: 4.20, kogus: 1 },
    { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
  ],

  // Kuvab kõik ostukorvis olevad tooted
  kuvaTooted: function() {
    this.tooted.forEach(function(toode) {
      console.log(
        `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`
      );
    });
  },

  // Lisab ostukorvi uue toote
  lisaToode: function(nimi, hind, kogus) {
    this.tooted.push({
      nimi: nimi,
      hind: hind,
      kogus: kogus
    });
  },

  // Arvutab kogu ostukorvi summa
  koguSumma: function() {
    let summa = 0;

    this.tooted.forEach(function(toode) {
      summa += toode.hind * toode.kogus;
    });

    return summa;
  }
};


// Kuvame ostukorvi
ostukorv.kuvaTooted();

// Lisame uue toote
ostukorv.lisaToode('Kohv', 5.80, 2);

// Kuvame ostukorvi pärast lisamist
console.log("Pärast uue toote lisamist:");
ostukorv.kuvaTooted();

// Kuvame ostukorvi kogusumma
console.log("Ostukorvi kogu summa:", ostukorv.koguSumma(), "EUR");