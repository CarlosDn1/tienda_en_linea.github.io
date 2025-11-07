var productosJson = [
    {
      "nombre" : "Sudadera Negra de QUEEN",
      "Foto" : "producto1.png",
      "descripcion": "Sudadera negra hecha a base de algodon, con un logo de la banda queen.",
      "id": 0
    },
    {
      "nombre" : "Sudadera Negra de QUEEN",
      "Foto" : "producto2.png",
      "descripcion": "Sudadera negra hecha a base de algodon, con un logo de la banda queen.",
      "id": 1
    },
    {
      "nombre" : "Playera Calaca amarilla",
      "Foto" : "producto3.png",
      "descripcion": "Playera negra hecha a base de algodon, super comoda y flexible, ajustable, todas las medidas",
      "id": 2
    },
    {
      "nombre" : "Playera negra",
      "Foto" : "producto4.png",
      "descripcion": "Playera negra hecha a base de algodon, super comoda y flexible, ajustable, todas las medidas",
      "id": 3
    },
    {
      "nombre" : "Playera Just for men",
      "Foto" : "producto5.png",
      "descripcion": "Playera gris con logo, hecha a base de algodon, super comoda y flexible, ajustable, todas las medidas.",
      "id": 4
    },
    {
      "nombre" : "Playera calaca cool",
      "Foto" : "producto6.png",
      "descripcion": "Playera gris con logo, hecha a base de algodon, super comoda y flexible, ajustable, todas las medidas",
      "id": 5
    },
    {
      "nombre" : "Playera Blanca",
      "Foto" : "producto7.png",
      "descripcion": "Playera blanca hecha a base de algodon.",
      "id": 6
    },
    {
      "nombre" : "Sudadera calaca roja",
      "Foto" : "producto8.png",
      "descripcion": "Playera negra hecha a base de algodon.",
      "id": 7
    },
    {
      "nombre" : "Playera I'm the CEO bitch",
      "Foto" : "producto9.png",
      "descripcion": "Playera negra con Logo Im The CEO hecha a base de algodon.",
      "id": 8
    },
    {
      "nombre" : "Playera Respect",
      "Foto" : "producto10.png",
      "descripcion": "Playera blanca con logo hecha a base de algodon.",
      "id": 9
    }
];


let divPlayera = document.getElementById('contenedorPlayera');

function obtenerValorParametro(sParametroNombre) {
    var sPaginaURL = window.location.search.substring(1);
     var sURLVariables = sPaginaURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] == sParametroNombre) {
          return sParametro[1];
        }
      }
     return null;
    }

    var valor = obtenerValorParametro('id');
    if (productosJson[valor]){

        var amountAValueToSelect = valor;

        var selectPosicion = productosJson[valor];

        let divPlayera = document.getElementById('contenedorPlayer');
        divPlayera.innerHTML = '';

            divPlayera.innerHTML += `
                <div class="playera">
                    <img src="../img/${productosJson[valor].Foto}" alt="img"/>
                    </div>
                    <div class="info">
                    <h3>${productosJson[valor].nombre}</h3>
                    <h4>Precio: <span>$ 500</span> MXN</h4>
                    <h4>Descripción</h4>
                    <p class="advertir">${productosJson[valor].descripcion}</p>
                    <br><br>
                    <a href="../index.html" style="border-radius:10px;padding:8px 50px;color: #f2f2f2; text-decoration:none;font-weight:bold;background:#333;margin-top:40px;">Regresar</a>
                    <div class="menu_info">
                    </div>
                </div>
        `;


    }else{
        window.location = '../index.html';
    }

