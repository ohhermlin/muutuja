const raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let mündid =[];
let summa = 0;
let i = 0;

while (i < raha.length) {
    if (raha[i] < 1) {
        mündid.push(raha[i]);
        summa += raha[i];
    }
 i++;
}