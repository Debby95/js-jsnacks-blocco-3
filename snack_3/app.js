let somma = 0;

let i = 0;

while (i < 5) {
    i++
    //chiedo all utente di inserire 5 volte un numero 
    const numeroInserito = prompt("Inserisci un numero");
    somma = somma + parseInt(numeroInserito);
}

console.log(somma);