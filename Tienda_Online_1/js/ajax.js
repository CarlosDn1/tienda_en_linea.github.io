//document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
    console.log('desde la funcion');
  
    const xhttp = new XMLHttpRequest();
  
    xhttp.open('GET', 'productos.json', true);
  
    xhttp.send();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
      }
    }
  
  }
  
  traerDatos();