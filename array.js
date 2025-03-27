let colori = ["rosso","giallo","verde","blue","grigio","rosa","cammello","giraffa.jpeg","gufo.jpeg"];

let arrayImmagine = ["cammello","giraffa.jpeg","gufo.jpeg"]

let contenitore = documento.getElementbyId("contenitore");
let vociMenu = ["Home","about","Contatti","shop"];

let barraNavigazione = document.createElement("nav");
barraNavigazione.id = "nav";
barraNavigazione.style.backgroundColor = "aqua";
barraNavigazione.style.padding = "2%";

contenitorea.appendChild(barraNavigazione)

for(let index = 0; index < vociMenulengthg; index++){
    const nuovaVoce = document.createElement("a");
    nuovaVoce.textContent = vociMenu[index];
    nuovaVoce.style.margin = "2%";
    nuovaVoce.style.backgroundColor = "grey"
    nuovaVoce.style.padding = "1";
    nuovaVoce.style.borde.radius = "1";


    barraNavigazione.apprendChild(nuovaVoce);
}


for(let index = 0; index < colori.lengt; index++){
const elemento = colori[index];
const coloreTesto = colori[colori.legth-1 - index]
console.log(elemento);

const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = elemento;
nuovoParagrafo.style.backgroundColor = elemento;
nuovoParagrafo.style.color = coloreTesto;
nuovoParagrafo.style.Textalign = "center";
nuovoParagrafo.style.marginRight = index * 5 + "%";
nuovoParagrafo.style.marginLeft = index * 5 + "%";
nuovoParagrafo.style.fontSize = (index+1)*10 + "px";
nuovoParagrafo.style.padding = index + "&";


contenitore.appendChild(nuovoParagrafo);
}

for(let index = 0; index < arrayImmagini.length; index++){
    const nuovaImmagine = document.createElement("img");
    nuovaImmagine.style.height = "200px";
    nuovaImmagine.stylewidth = "300px";
    nuovaImmagine.src = arrayImmagini[index];
    nuovaImmagine.alt = arrayImmagini[index];
    contenitore.appendChild(nuovaImmagine);
    nuovoParagrafo.style.margin = "1%";
    nuovaImmagine.style.textAlign = "center";
    contenitore.appendChild(nuovaImmagine);



    
}









