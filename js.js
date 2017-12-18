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

//Llena la tabla de manera aleatoria
function llenar(){	
	for(let i=0;i<largo;i++)
		for(let j=0;j<largo;j++)
		{
			document.getElementById(i+","+j).className = Math.random() > 0.7 ? 'viva' : 'muerta';
		}
}

//Cambia el tamaño de la tabla dependiendo del valor que esté en el input con el id="largo"
function cambiarTamano(){
	largo=document.getElementById("largo").value;
	if(largo>0)
	{
		inicioMatriz();
		dibujarTablero();
	}
	else
		alert("Dimensiones fuera de los límites");
}

//Compara el entorno de una célula con los parametros dados y retorna la suma de la cantidad de células vivas a su alrededor
function compararEntorno(i,j)
{
	let vida=0;
	if(i>=1 )//Arriba
		if(document.getElementById((i-1)+","+j).className == "viva")
			vida++;
	if(i<largo-1)//Abajo
		if(document.getElementById((i+1)+","+j).className == "viva")
			vida++;
	if(j<largo-1)//Derecha
		if(document.getElementById(i+","+(j+1)).className == "viva")
			vida++;
	if(j>=1)//Izquierda
		if(document.getElementById(i+","+(j-1)).className == "viva")
			vida++;
	if(i>=1 && j<largo-1)//Arriba derecha
		if(document.getElementById((i-1)+","+(j+1)).className == "viva")
			vida++;
	if(i>=1 && j!=0)//Arriba izquierda
		if(document.getElementById((i-1)+","+(j-1)).className == "viva")
			vida++;
	if(i<largo-1 && j<largo-1)//Abajo derecha
		if(document.getElementById((i+1)+","+(j+1)).className == "viva")
			vida++;
	if(i<largo-1 && j>0)//Abajo izquierda
		if(document.getElementById((i+1)+","+(j-1)).className == "viva")
			vida++;
	return vida;
}

//A partir del resultado que retorna la función compararEntorno se decide si la célula vive, renace, muere o permanece en el estado en el que se encontraba anteriormente
function evaluarEstado(i,j){
	let resultadoComparacion=compararEntorno(i,j);
	if(document.getElementById(i+","+j).className=="muerta" && resultadoComparacion==3)
		estado[i][j]="viva";
	else if(document.getElementById(i+","+j).className=="viva" && (resultadoComparacion==2 || resultadoComparacion==3))
		estado[i][j]="viva";
	else
		estado[i][j]="muerta";	
}

//Ejecuta el método siguiente de manera automática mediante un timer cada n tiempo dependiendo del valor de la variable velocidad
function iniciar() {
    Timer = setInterval(siguiente, velocidad);            
}

function cambiarEstados(){
	for(let i=0;i<largo;i++)
		for(let j=0;j<largo;j++)
			document.getElementById(i+","+j).className=estado[i][j];	
}