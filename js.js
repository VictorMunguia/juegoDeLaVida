let largo="50";
let Timer;
let estado;
let velocidad=1000;
document.getElementById("speed").value=1000;
inicioMatriz();
dibujarTablero();

//Se crea una matriz en blanco con las dimensiones que están en la variable largo
function inicioMatriz()
{
	estado=new Array(largo);
	for(a=0;a<largo;a++)
		estado[a]=new Array(largo);
}	


//Dibuja un tablero dependiendo del valor de la variable largo y la dibuja en un <tbody> con id="tablacont"
function dibujarTablero(){
		document.getElementById("tablacont").innerHTML="";
	for(let i=0;i<largo;i++){
		document.getElementById("tablacont").innerHTML+="<tr id="+i+"></tr>";
		for(let j=0;j<largo;j++)
			document.getElementById(i).innerHTML+="<td class='muerta' id="+i+","+j+"></td> ";
	}
}