mezo({
  vizszintes: 11,
  fuggoleges: 4,
  nev: 'andrasK',
  leiras: 'K',
  kep: 'haz3.png',
  v = 0,
  M = 30,
ralepeskor: function() {
 kiir (M);
 kiir ("Jónapot!");
  e = kerdez("Veszel egy vasrudat?");
    if (e == "igen"){
    kiir ("Köszönöm!");
M = M - 5;
     kiir M("$-od maradt.");
    v = v + 1;
    }
else (e == "nem") {
        kiir ("Rendben, remélem máskor veszel!");
    }
 kiir (v)("vasrudad van."); 
}
})
