// document ready
$(function(){
// selector de todas las <a>
  $("a").click(function(event){
// si hash cumple condicion distinto a vacio, evita ejecucion de evento por defecto al hacer click
    if (this.hash !== "") {
      event.preventDefault();
// variable gato se define como el valor del hash
      var gato = this.hash;
// selecciona html y body y aplica animacion de metodo scrolltop a 800ms ademas de llevar la ventana a la ubicacion del valor de la variable "gato" que es el contenido del hash en la <a> donde se clickeo
      $("html, body").animate({
        scrollTop: $(gato).offset().top
      },800, function(){
        window.location.hash = gato;
      });
    }
  });
// habilita popovers en todo el documento (codigo original en BootStrap incluye funcion document ready)
    $('[data-toggle="popover"]').popover();
});
