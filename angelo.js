//visibilità globale cioè in tutte le patri del codice
{
    var miaVariabile = 80;
}



//visibilità di blocco
{
    let miaVariabile = 67;
    console.log("dichiarata con il let: " + miaVariabile);
}

console.log("Dichiarata con il let: " + miaVariabile); //stamperà il valore 80 perchè let non è visibile

//--------------------------------------
//una variabile dichiarata con et può essere riassegnata
let esempio1 = 30;

console.log("esempio1= " + esempio1); //ok

esempio1 = "castagne";

console.log("esempio1= " + esempio1); //ok

//con const non può essere riassegnata (tranne per alcuni casi specifici)

const esempio2 = 7;
console.log("esempio2= " + esempio2) //ok

esempio2 = "Ananas";
console.log("esempio2= " + esempio2) //errore












