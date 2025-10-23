console.log( 'index.js INI ');

var arr_caracteres_digitados = "";
var arr_numeros = [];
var arr_letras  = [];
var inp_text;

function body_lido(){
    console.log( 'index.js -> body_lido()');
    inp_text = document.getElementById('inp_text');
}

function clicado_enviar()
{
    console.log( 'index.js -> clicado_enviar() inp_text.value = ('+inp_text.value+')');
    var str_dig = inp_text.value;
    arr_numeros = [];
    arr_letras  = [];

    for (var i=0;  i<str_dig.length; i++)
    {
        var caracter = str_dig[i];
        console.log( 'caracter = ['+caracter+']');
        if( isNaN( Number(caracter) ) == true  ) {
            arr_letras[ arr_letras.length ] = caracter;
        }
        else if(  isNaN(Number( caracter )) == false  ) {
            if( Number( caracter ) >= 0 ){
                arr_numeros[ arr_numeros.length ] = caracter;
            }
        }
    }
    var todasLetras = arr_letras.join('');
    var todosNumeros = arr_numeros.join('');

    console.log('Letras:', todasLetras);
    console.log('Números:', todosNumeros);

  }

console.log( 'index.js FIM ');