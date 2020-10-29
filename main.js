
var array_numeri = []
for (var i = 0; i < 5; i++) {
    numero_random = Math.floor(Math.random() * 100) + 1;
    array_numeri.push(numero_random);
}
console.log(array_numeri);


var tempo = 30;

var clock = setInterval(function() {

        console.log(tempo);
        tempo--;

        if(tempo < 0) {
            clearInterval(clock);
            
        }
    }, 1000);
