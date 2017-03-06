//identifica usuario
//var user = prompt("Ingresa tu nombre");
//document.getElementById('name').innerHTML = user;

//Dropdown button

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Coders
var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

function imprimirCoders() {
  //for (var i=0; i<coders.length; i++) {
    document.getElementById('meche').innerHTML += "Nombre: " + coders[0].nombre + "<p>" +
                                                        "Apellido: " + coders[0].apellido + "<p>" +
                                                        "Promoción: " + coders[0].promocion + "<p>" +
                                                            "Estado: " + coders[0].estado + "<p>";

    document.getElementById('arabela').innerHTML += "Nombre: " + coders[1].nombre + "<p>" +
                                                        "Apellido: " + coders[1].apellido + "<p>" +
                                                        "Promoción: " + coders[1].promocion + "<p>" +
                                                            "Estado: " + coders[1].estado + "<p>";

    document.getElementById('maria').innerHTML += "Nombre: " + coders[2].nombre + "<p>" +
                                                        "Apellido: " + coders[2].apellido + "<p>" +
                                                        "Promoción: " + coders[2].promocion + "<p>" +
                                                            "Estado: " + coders[2].estado + "<p>";

    document.getElementById('guadalupe').innerHTML += "Nombre: " + coders[3].nombre + "<p>" +
                                                        "Apellido: " + coders[3].apellido + "<p>" +
                                                        "Promoción: " + coders[3].promocion + "<p>" +
                                                            "Estado: " + coders[3].estado + "<p>";

    document.getElementById('sara').innerHTML += "Nombre: " + coders[4].nombre + "<p>" +
                                                "Apellido: " + coders[4].apellido + "<p>" +
                                                "Promoción: " + coders[4].promocion + "<p>" +
                                                    "Estado: " + coders[4].estado + "<p>";

    document.getElementById('daniella').innerHTML += "Nombre: " + coders[5].nombre + "<p>" +
                                                  "Apellido: " + coders[5].apellido + "<p>" +
                                                  "Promoción: " + coders[5].promocion + "<p>" +
                                                      "Estado: " + coders[5].estado + "<p>";

    document.getElementById('michelle').innerHTML += "Nombre: " + coders[6].nombre + "<p>" +
                                                  "Apellido: " + coders[6].apellido + "<p>" +
                                                  "Promoción: " + coders[6].promocion + "<p>" +
                                                      "Estado: " + coders[6].estado + "<p>";

    document.getElementById('diana').innerHTML += "Nombre: " + coders[7].nombre + "<p>" +
                                                  "Apellido: " + coders[7].apellido + "<p>" +
                                                  "Promoción: " + coders[7].promocion + "<p>" +
                                                      "Estado: " + coders[7].estado + "<p>";
  } imprimirCoders();

//Botones

//validando radio-button
var selected1;
var contador1 = 0;

function validando0() {
  selected1 = false;
  var test0 = document.getElementsByName("test0");

  for(var i=0; i<test0.length; i++) {
    if(test0[i].checked) {
      selected1 = true;
      break;
    }
}
  if(!selected1) {
    alert("selecciona una opción");
    //return false;
  }
}

function validando1() {
  selected1 = false;
  var test1 = document.getElementsByName("test0");

  for(var i=0; i<test1.length; i++) {
    if(test1[i].checked) {
      selected1 = true;
      break;
    }
  }
  if(!selected1) {
    alert("selecciona una opción");
    //return false;
  }
}

function validando2() {
  selected1 = false;
  var test2 = document.getElementsByName("test0");

  for(var i=0; i<test2.length; i++) {
    if(test2[i].checked) {
      selected1 = true;
      break;
    }
  }
  if(!selected1) {
    alert("selecciona una opción");
    //return false;
  }
}

function validarSprintUno() {
  validando0();
  validando1();
  validando2();
}

var selected;
var contador2 = 0;

function validando3() {
  selected = false;
  var test3 = document.getElementsByName("test3");
  if(test3[0].checked) {
    contador2 += 1;
    console.log(contador2);
  }

  for(var i=0; i<test3.length; i++) {
    if(test3[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validando4() {
  selected = false;
  var test4 = document.getElementsByName("test4");

  for(var i=0; i<test4.length; i++) {
    if(test4[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validando5() {
  selected = false;
  var test5 = document.getElementsByName("test5");

  for(var i=0; i<test5.length; i++) {
    if(test5[i].checked) {
      selected = true;
      break;
    }
  }
  if(!selected) {
    alert("selecciona una opción");
    return false;
  }
}

function validarSprintDos() {
  validando3();
  validando4();
  validando5();
}

//Mostrar / Ocultar
function sprint1(divtexte) {
  var divtext = document.getElementById(divtexte);
  if (divtext.style.display == "block" ) {
  	divtext.style.display = "none";
  } else{
  	divtext.style.display = "block";
  }
}
