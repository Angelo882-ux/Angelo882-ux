const bottomAggiungi = document.getElementById('bottone-aggiungi')
const lista = document.getElementById('lista')
const bottoneTogli = document.getElementById('bottone-toglie')

console.log(lista.children.length)

//al clicl del mouse attiva la funziona anomima
bottoneAggiungi.addEventListener('click', function(){

//apre un prompt per l'inserimento del testo 
    const userinput = prompt('inserisci il testo');
//creo un nuovo elemento list item
const nuoveElemento = document.createElement('li');



nuovoElemento.textContent = 'Mio nuovo Elemento' + (lista.children.length + 1);
lista.appendChild(nuoveElemento);

}


bottoneTogli.addEventListener('click',function(){
lista.lastElementChild.remove()


})




