  //Programa que calcula la calificacion de 3 materias en Javascript
  var materia1 = prompt('Ingrese la calificacion de la primera materia');
  var materia2 = prompt('Ingrese la calificacion de la segunda materia');
  var materia3 = prompt('Ingrese la calificacion de la tercera materia');

  var materia1 = Math.round(materia1);
  var materia2 = Math.round(materia2);
  var materia3 = Math.round(materia3);

  const puntaje = 10 / 30;
  var sumaEscala = materia1 + materia2 + materia3;

  var calificacionFinal = Math.round(sumaEscala * puntaje,2);

  var elementoHtml = document.getElementById('getCalificacion');

  if(calificacionFinal){
    elementoHtml.innerHTML+= calificacionFinal;
  }
