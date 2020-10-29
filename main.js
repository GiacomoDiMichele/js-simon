var array_numeri = [];

for (var i = 0; i < 5; i++) {
    var numero_random = Math.floor(Math.random() * 100) + 1;
    array_numeri.push(numero_random);
}
console.log(array_numeri);


var tempo = 4;

var timer = setInterval(function() {

        console.log(tempo);
        tempo--;

        if(tempo < 0) {
            clearInterval(timer);

            for (var i = 0; i < 5; i++) {
                var numero_utente = parseInt(prompt('inserisci un numero'));
                console.log(numero_utente)

                // includes di array_numeri e verifichi se numero_utente è dentro array_numeri
                var n = array_numeri.includes(numero_utente);
                console.log(n);
                if (n == true) {
                    console.log('numero corrispondente')
                }
                else {
                    console.log('numero non corrispondente')
                }
            }

        }
    }, 1000);
