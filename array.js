let colori = ["rosso","giallo","verde","blue","grigio","rosa"];
console.log(colori(10));

let contenitore = documento.getElementbyId("contenitore")
for(let index = 0; index < colori.lengt; index++){
const elemento = colori(index);
console.log(elemento);
const coloreTesto = colori(colori.legth-1 - index)

const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = elemento;
nuovoParagrafo.style.backgroundColor = elemento;
nuovoParagrafo.style.color = coloreTesto;

contenitore.appemdChild(nuovoParagrafo);
}







