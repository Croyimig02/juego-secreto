let númeroSecreto;
let intentos;
let listaSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto)
    {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }

function verificarIntento()
    {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(intentos);

        if (numeroDeUsuario === númeroSecreto)
            {
                asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1)? 'vez':'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
            else
            {
                //el usuario no acertó
                if (numeroDeUsuario > númeroSecreto)
                {
                    asignarTextoElemento('p','El número secreto es menor');
                }
                else
                {
                    asignarTextoElemento('p','El número secreto es mayor');
                }
                intentos++;
                limpiarCaja();
            }
        return;
    }

function limpiarCaja()
    {
        /*
        let valorCaja = document.querySelector('#valorUsuario'); //ID del input
        valorCaja.value = '';*/
        document.querySelector('#valorUsuario').value = '';
    }

function generarNúmeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya salieron todos los numero
    if(listaSorteados.length == numeroMaximo)
        {
            asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
        }
        else
            {
            // Si el numero generado esta en la lista
            console.log(numeroGenerado);
            console.log(listaSorteados);
            if (listaSorteados.includes(numeroGenerado))
                {
                    return generarNúmeroSecreto();
                }
                else
                {
                    listaSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
            }
}

function condicionesIniciales()
    {
        asignarTextoElemento('h1', 'Juego del número secreto');
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        númeroSecreto = generarNúmeroSecreto();
        intentos = 1;
    }

function reiniciarJuego()
    {
        //limpiar caja
        limpiarCaja();
        // Indicar intervalo de números
        condicionesIniciales();
        //Generar numero aleatorio
        //intentos = 1
        //Deshabilitar el boton de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }

condicionesIniciales();
