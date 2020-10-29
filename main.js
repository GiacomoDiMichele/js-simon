var array_numeri = []
for (var i = 0; i < 5; i++) {
    numero_random = Math.floor(Math.random() * 100) + 1;
    array_numeri.push(numero_random);
}
console.log(array_numeri);


var tempo = 4;

var timer = setInterval(function() {

        console.log(tempo);
        tempo--;

        if(tempo < 0) {
            clearInterval(timer);
        }
    }, 1000);

    for (var i = 0; i < 5; i++) {
        var numero_utente = prompt('inserisci un numero')
        console.log(numero_utente)
        if (numero_utente == numero_random) {
            console.log('trovato numero corrispondente')
        }
    }
