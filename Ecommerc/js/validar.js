
function validar() {


var parrafo = document.getElementById("parrafo").value;

var search= document.getElementById("search").value;
if(search.value.lenght <3){
document.getElementById("parrafo").innerHTML ='tiene que tener mas de tras caracteres';

return false;

}
}


 