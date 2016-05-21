var pais1=arequipa;
var pais2=lima;
var pais3=mexico;
var imagenes=[];
var num1=generarAleatorio(pais1);
var num2=generarAleatorio(pais2);
var num3=generarAleatorio(pais3);

function generarAleatorio(maximo) {
  var maximo= maximo.length;
  var existe= true;
  var aleatorio;

do{
  aleatorio = Math.floor(Math.random()*maximo), imagenes.length == maximo ? (aleatorio = -1, existe = false): 0==imagenes.length ? (imagenes.push(aleatorio), existe = false) :0 > imagenes.indexOf(aleatorio) ? (imagenes.push(aleatorio), existe = false) : console.log("Se repite! -> " + aleatorio);
} while (existe);
  return aleatorio;
}

function fotos(maximo,npais,num){
  var foto=('fotos/'+npais+'/'+maximo[num].img);
  $("#fotopes").html("<img class='foto-on' src='"+foto+"'/>"); 
}

var a=0;
var i=0;

function random(aleatorio) {
$('#ingresetexto').val() == pais1[num1].name ? ($('.validacion').html('<p id="validamos">Acertaste</p>'), a+=5, $("#texto").html(a+" puntos"), num1=generarAleatorio(pais1), fotos(arequipa,"arequipa",num1)) : $('#ingresetexto').val() == pais2[num2].name ? ($('.validacion').html('<p id="validamos">Acertaste</p>'), a+=5, $("#texto").html(a+" puntos"), num2=generarAleatorio(pais2), fotos(lima,"lima",num2)) : $('#ingresetexto').val() ==pais3[num3].name ? ($('.validacion').html('<p id="validamos">Acertaste</p>'), a+=5, $("#texto").html(a+" puntos"), num3=generarAleatorio(pais3), fotos(mexico,"mexico",num3)) : ($('.validacion').html('<p id="validamos">Sigue intentando. Aun puedes</p>'), a-=1, $("#texto").html(a+" puntos"), i++, 5== i && (num1=aleatorio(pais1), fotos(arequipa,"arequipa",num1)));
    clean();
  }

$("#abajito").on('change', function() {
  var valor=$('#abajito').val();
  if (valor==1){
    fotos(arequipa,"arequipa", num1);
  }
  else if (valor==2) {
    fotos(lima,"lima", num2);
  }
  else if (valor==3) {
    fotos(mexico,"mexico", num3);
  }
});

$('#comprobar').click(random);

function clean(){
  $('#ingresetexto').val("");
}
