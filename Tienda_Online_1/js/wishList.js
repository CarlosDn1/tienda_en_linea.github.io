document.addEventListener("DOMContentLoaded", function(event) {
    
var datosStorage = localStorage.getItem("WishListStorage");
var becomeArrayParse = JSON.parse(datosStorage);
console.log(becomeArrayParse); 


var wishDiv = document.getElementById('wishContainer');
wishDiv.innerHTML = '';


for(var i = 1; i < becomeArrayParse.length; i++){

            wishDiv.innerHTML += `            
                <div class="contenedor_playera">
                        <div class="playera">
                                <img src="../img/${becomeArrayParse[i].Foto}" alt="img"/>
                        </div>


                        <div class="info" id="infoDiv${[i]}">
                        <h3>${becomeArrayParse[i].nombre}</h3>
                        <h4>Precio: <span>$ 500</span> MXN</h4>
                        <h4>Descripción</h4>
                        <p class="advertir">${becomeArrayParse[i].descripcion} </p>
                        <br><br>
                        <button class="btnBorrarG" name="${becomeArrayParse[i].id}"  type="button" id="btnDelete${[i]}">Eliminar de la lista</button>
                        <div class="menu_info">
                        </div>
                        </div>
               </div>
        `;

   }




   for(var e = 1; e < becomeArrayParse.length; e++){

        btnEliminar = document.getElementById(`btnDelete${e}`);
        btnEliminar.addEventListener("click",
        function(e){
            console.log(this.name);
            var saveNameId = this.name;
            
            eliminarPorId(saveNameId);

            function eliminarPorId(id){
                becomeArrayParse.forEach(function(currentValue, index, arr){
                if(becomeArrayParse[index].id==id){
                    becomeArrayParse.splice(index, index);     
                 }
                });
              }
            

             localStorage.setItem('WishListStorage', JSON.stringify(becomeArrayParse));

            swal("El elemento", "Se ha eliminado correctamente de la lista!", "error");
            setInterval(function(){ 
                location.reload();
            }, 2000);
        });

   }

});