/*/ form/*/

$("#fname").keydown( function(){
    var pattern = /^[a-zA-Z]*$/;
       var fname = $("#fname").val();
       if (pattern.test(fname) && fname !== '') {
          $( "#lname" ).prop( "disabled", false );
          $( "#fname" ).css( "border", "2px solid green" );
       } else {
          $( "#lname" ).prop( "disabled", true );
          $( "#fnames" ).css( "border", "2px solid red" );
       }
})
$("#lname").keydown( function(){
    var pattern = /^[a-zA-Z]*$/;
       var lname = $("#lname").val();
       if (pattern.test(lname) && lname !== '') {
          $( "#email" ).prop( "disabled", false );
          $( "#lname" ).css( "border", "2px solid green" );
       } else {
          $( "#email" ).prop( "disabled", true );
          $( "#lname" ).css( "border", "2px solid red" );
       }
})
$("#email").keydown(function(){
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email= $("#email").val();
    if(pattern.test(email) && email !== ""){
        $("#country").prop("disabled", false);
        $( "#email" ).css( "border", "2px solid green" );
    }else{
        $("#country").prop("disabled", true);
        $( "#email" ).css( "border", "2px solid red" );
    } 
})
$("#country").keydown( function(){
    var pattern = /^[a-zA-Z]*$/;
       var lname = $("#country").val();
       if (pattern.test(lname) && lname !== '') {
          $( "#juegos" ).prop( "disabled", false );
          $( "#country" ).css( "border", "2px solid green" );
       } else {
          $( "#juegos" ).prop( "disabled", true );
          $( "#country" ).css( "border", "2px solid red" );
       }
})
$("#juegos").click( function(){
    var pattern = /^[a-zA-Z]*$/;
       var juegos = $("#juegos").val();
       if (pattern.test(juegos) && juegos !== '') {
          $( "#submit" ).prop( "disabled", false );
          $( "#juegos" ).css( "border", "2px solid green" );
       } else {
          $( "#submit" ).prop( "disabled", true );
          $( "#juegos" ).css( "border", "2px solid red" );
       }
})
/*/ productos / Testimonios/*/


function productos(){
   $.ajax({
      dataType: "json",
      url: "productos.json",
      data: "data",
      success: function(productos){
         for(let i=0; i<3; i++){
            $("p#nombreproducto"+i.toString()).text(productos.productos[i].nombre);
            $("div#imagenproducto"+i.toString()).prepend(`<img id="imagen1" src="${productos.productos[i].imagen}" alt="${productos.productos[i].nombre}" height="100px""/>`);
            $("p#precioproducto"+i.toString()).text(productos.productos[i].precio);
         }
      },
      error: function(){
         console.log("Ups, parece que ha ocurrido un error, se intentara la reconexion en 5 segundos");
         setTimeout(testimonios, 5000);
     }
   })
}
function testimonios(){
   $.ajax({
      dataType: "json",
      url: "testimonios.json",
      data: "data",
      success: function(testimonios){
         $("img").remove(".imagen2");
         for(let i=0; i<3; i++){
            let aleatorio=Math.floor(Math.random() * (9 - 0 + 1) + 0);
            $("p#nombretestimonio"+i.toString()).text(testimonios.testimonios[aleatorio].nombre);
            $("div#imagentestimonio"+i.toString()).prepend(`<img class="imagen2" src="${testimonios.testimonios[aleatorio].imagen}" alt="${testimonios.testimonios[aleatorio].nombre}" height="75px" width="75px"/>`);
            $("p#fecha"+i.toString()).text(testimonios.testimonios[aleatorio].fecha);
            $("p#textotestimonio"+i.toString()).text(testimonios.testimonios[aleatorio].texto);
         }
         
      },
      error: function(){
         console.log("Ups, parece que ha ocurrido un error, se intentara la reconexion en 5 segundos");
         setTimeout(testimonios, 5000);
     }
   })
   setTimeout(testimonios,10000);
}

productos();
testimonios();


/*/  Cambiar de vista /*/

var tabla=true;
$( "#cambiar" ).click(function() {
   tabla=!tabla;
   if(tabla){/*/ modo lista  /*/
      $(".divtestimonios").css("grid-template-columns","150px 1fr 80px");
      $(".divtestimonios").css("grid-template-rows","30px 1fr");
      $(".divtestimonios").css("padding","20px 0px");
      $(".divtestimonios").css("border","0PX");
      $(".divtestimonios").css("margin","0PX");
      $(".divtestimonios").css("border-radius","opx"); 

      $(".imagentestimonio").css("grid-row","1/3");

      $(".imagen2").css("margin-botton","auto");

      $(".nombretestimonio").css("text-align","left");
      $(".nombretestimonio").css("grid-column","2/3");
      $(".nombretestimonio").css("grid-row","1/2");
      $(".nombretestimonio").css("height","auto");
      
      $(".textotestimonio").css("text-align","left");
      $(".textotestimonio").css("grid-row","2/3");
      $(".textotestimonio").css("height","auto");
      $(".textotestimonio").css("padding","0px");
      
      $(".fecha").css("grid-row","1/2");
      $(".fecha").css("grid-column","4/5");
      $(".fecha").css("text-align","center");

   

   }else{  /*/   modo tabla   /*/

      $(".divtestimonios").css("grid-template-rows","1fr 26px");
      $(".divtestimonios").css("grid-template-columns"," 1fr");
      $(".divtestimonios").css("padding","20px 0px"); 
      $(".divtestimonios").css("border","2px solid black"); 
      $(".divtestimonios").css("margin","0px 30px 20px 30px"); 
      $(".divtestimonios").css("border-radius","20px"); 

      $(".imagentestimonio").css("grid-row","1/2");
      $(".imagentestimonio").css("margin","auto");
      $(".imagentestimonio").css("display","flex");
      $(".imagentestimonio").css("justify-content","center");
      $(".imagentestimonio").css("align-content","center");

      $(".imagen2").css("margin","auto");2

      $(".nombretestimonio").css("grid-row","2/3");
      $(".nombretestimonio").css("grid-column","1/2");
      $(".nombretestimonio").css("text-align","center");
      $(".nombretestimonio").css("height","12px");

      $(".textotestimonio").css("text-align","center");
      $(".textotestimonio").css("grid-row","3/4");
      $(".textotestimonio").css("height","12px");
      $(".textotestimonio").css("padding","0px 10px 0px 10px");

      $(".fecha").css("grid-row","4/5");
      $(".fecha").css("grid-column","1/2");
      $(".fecha").css("text-align","center");

   }
 });
 /*/ Localizador /*/
 var requestUrl = "http://ip-api.com/json";

$.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
    console.log("Pais: " + json.country);
    console.log("ciudad: " + json.city)
  },
  error: function(err)
  {
    console.log("Ups, parece que ha ocurrido un error, se intentara la reconexion en 5 segundos " + err);
  }
});

/*/ animation imagenes when scroll /*/
document.addEventListener('scroll', function (e) {
   var top  = window.pageYOffset + window.innerHeight,
       isVisible = top > document.querySelector('#productos > div').offsetTop;
        
    if (isVisible) {
      document.getElementById('productos').classList.add('animate');
   }
});



document.addEventListener('scroll', function (e) {
   var top  = window.pageYOffset + window.innerHeight,
       isVisible = top > document.querySelector('#testimonios > div').offsetTop;
        
    if (isVisible) {
      document.getElementById('testimonios').classList.add('animate');
   }
});
