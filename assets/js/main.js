var jugador = "x";

var botones = document.getElementsByClassName("tic");
var turno = document.getElementById("turno");
var ganador1 = document.getElementById("ganador");
turno.innerHTML= "Are you Ready !!! " ;

document.getElementById("newGame").addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < botones.length; i++) {
        botones[i].value = "+";
        botones[i].disabled = false;
        jugador="x";
        turno.innerHTML= "Are you Ready !!! ";
        ganador1.innerHTML= " ";
    }
});

document.getElementById("container").addEventListener('click', function(e) {
    e.preventDefault();


    turnoJugador();
    posibleJugada();

    function posibleJugada() {
        var disponible = [];
        for (var i = 0; i < botones.length; i++) {
            if (botones[i].value == "+") {
                disponible.push(botones[i]);
            }
        }
        if (disponible.length == 0) {
          turno.innerHTML= "Esto es un empate ... !!!" ;
        }
    }

    function disable(valor) {
        for (var i = 0; i < botones.length; i++) {
            botones[i].disabled = valor;
        }
    }

    function ganador(jugador) {
        if (botones[0].value == jugador && botones[4].value == jugador && botones[8].value == jugador) {
            return true;
        }
        if (botones[2].value == jugador && botones[4].value == jugador && botones[6].value == jugador) {
            return true;
        }
        for (var i = 0; i < 3; i++) {
            if (botones[i].value == botones[i + 3].value && botones[i + 3].value == jugador && botones[i + 6].value == jugador) {
                return true;
                break;
            }
        }
        for (var i = 0; i < 7; i = i + 3) {
            if (botones[i].value == botones[i + 1].value && botones[i + 1].value == jugador && botones[i + 2].value == jugador){
                return true;
                break;
            }
        }
        //return false;
    }

    function turnoJugador() {
        if (jugador == "x") {
            e.target.value = "x";
            e.target.disabled = true;

            if (ganador(jugador)) {
                ganador1.innerHTML= "El jugador ganador es : "+ jugador ;

                disable(true);

            }
            jugador = "o";
            turno.innerHTML= "Turno Jugador :" +jugador ;


        } else {
            e.target.value = "o";
            e.target.disabled = true;
            if (ganador(jugador)) {
              ganador1.innerHTML= "El jugador ganador es : "+ jugador ;
              disable(true);
            }
            jugador = "x";
            turno.innerHTML= "Turno Jugador :" +jugador ;
        }
        return jugador;
    }


});
