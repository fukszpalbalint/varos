mezo({
  vizszintes: 6,
  fuggoleges: 2,
  nev: 'Olivér Házikója',
  leiras: 'Kicsi házikó.', 
  kep: 'haz-oliver.png',
  ralepeskor: function() {  
    kiir ("Szia Oli Múzeumába vagy.");
    
    var udvozlesUtan = function() {
      kerdezuj("Hanyszor irjam le hogy Mindennap programozni fogok?", kezelMindennap);
    }

    var kezelMindennap = function(valasz) {
      // Ciklus, haromszor hajtodik vegre 
      for (var szamlalo = 0; szamlalo < valasz; szamlalo++) {
        kiiruj("Mindennap programozni fogok")
      }
    }      

    kiiruj("Szia latogato!", udvozlesUtan);   
  }
})
      
        
   
 
   
 
            
