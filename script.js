// JavaScript skrevet fra bunden af gruppen "blandede Bolcher", bestående af Ella,  Ahmed, Bastian, Martin & Maiken. 

// Knap kode er venligst lånt af Maiken Ø. Sørensen's eksamensprojekt på første semester.

// TIL TOPPEN KNAP 
//først henter vi knappen fra html ved at kalde på dens ID
let topknap = document.getElementById("topKnap");

//Så fortæller vi computeren at når man scroller skal den aktivere funktionen
window.onscroll = function() {scrollfunktion()};

//Her skriver vi en regel om hvad vores scroll funktion skal gøre
function scrollfunktion() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
            { topknap.style.display = "block"; }
    else
            { topknap.style.display = "none"; }
}

//Her skriver vi en regel om hvor knappen tager dig hen når du trykker
function tilTopFunktion() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
