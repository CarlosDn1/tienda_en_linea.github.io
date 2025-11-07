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

  var showProduct = document.querySelector('#productosId');
  showProduct.innerHTML = '';

  for(let producto of productosJson){
    console.log(producto.nombre);
    showProduct.innerHTML += `
        <div class="producto" id="productoId">
            <img src="img/${producto.Foto}" alt="img"/>
            <h3>${producto.nombre}</h3>
            <h4>Precio: <span>$ 500</span> MXN</h4>
            <p>${producto.descripcion}</p>
              <div class="wishListDiv">
                <a href="pages/ver_playera.html?id=${producto.id}" target="_self">Ver detalles</a>
                <button id="btnWishId${producto.id}" name="${producto.id}" type="button" class="btnWishList"><i class="fas fa-heart"></i></button>
              </div>
        </div>
    `;
  }


  //Lista de deseos


  var wishList = [];

  wishList.push({

  });

  console.log(wishList);

   for(let f =0; f < 10; f++){
     
      btnWishList = document.getElementById(`btnWishId${f}`);
      
      btnWishList.addEventListener("click", 
          function(){
              let saveId = this.name;
              console.log(saveId);

              let filterId = productosJson.filter(function(response){
                return (response.id === saveId);
              });

              var obteniendoPosicion = productosJson[saveId];
              console.log(obteniendoPosicion);

              let addItem = wishList.concat(obteniendoPosicion);
              console.log(addItem);
              wishList = addItem;
              localStorage.setItem('WishListStorage', JSON.stringify(wishList) );


              swal("Item añadido!!", "Tu lista de deseos crece!", "success");
          });

   }

  console.log(wishList);

  /*
  for(var i = 0; i < productosJson.length; i++){
    console.log(productosJson[0]);
  }
*/


