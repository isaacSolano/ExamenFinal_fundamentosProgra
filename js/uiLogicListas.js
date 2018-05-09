generarInterfaceLista();
var botonMostrarPrompt=document.querySelector('#btnMostrarPrompt');
	botonMostrarPrompt.addEventListener('click', mostrarPrompt);

	function mostrarPrompt(){
		var promptCrearLista=document.querySelector('#pmpCrearLista');
			promptCrearLista.classList.toggle('hide');
	}
	/*muestra caja donde define detalles de la lista por crear*/

	function validarLista(inputLista){
		var bError=false;
		if (inputLista.value=='') {
			bError=true;
		}else{

		}
		return bError
	}
	/*funcion que valida el texto digitado para la creacion de la lista*/

var botonCrearLista=document.querySelector('#btnCrearLista');
	botonCrearLista.addEventListener('click', crearLista);

	function crearLista(){
		var inputLista=document.querySelector('#txtNombreLista'),
			bCampoVacio=validarLista(inputLista),
			sMensaje=document.querySelector('#txtMensajePmp'),
			bListaExistente=false,
			promptCrearLista=document.querySelector('#pmpCrearLista'),
			mostrarListasCreadas=false;

			if (bCampoVacio==true) {
				inputLista.classList.add('inputError');
				inputLista.classList.remove('inputBien');

				sMensaje.innerHTML='No puede haber un campo vacío';
				sMensaje.classList.remove('mensajeBien');
				sMensaje.classList.add('mensajeError');
			}else{
				inputLista.classList.remove('inputError');
				inputLista.classList.add('inputBien');

				sMensaje.innerHTML='Lista creada';
				sMensaje.classList.add('mensajeBien');
				sMensaje.classList.remove('mensajeError');

				bListaExistente=agregarLista(inputLista);
				if (bListaExistente==true) {
					inputLista.classList.add('inputError');
					inputLista.classList.remove('inputBien');

					sMensaje.innerHTML='Ya hay una lista con este nombre';
					sMensaje.classList.add('mensajeError');
					sMensaje.classList.remove('mensajeBien');				
				}else{
					inputLista.classList.remove('inputError');
					inputLista.classList.add('inputBien');

					sMensaje.innerHTML='Lista creada';
					promptCrearLista.classList.toggle('hide');
				}
			}
	}
	/*funcion que envia los datos para crear una nueva lista*/

var botonCancelarOperacion=document.querySelector('#btnCancelarOperacion');
	btnCancelarOperacion.addEventListener('click', cancelarOperacion);

	function cancelarOperacion(){
		var promptCrearLista=document.querySelector('#pmpCrearLista');
			promptCrearLista.classList.toggle('hide');
	}
	/*funcion que cierra el prompt de crear lista sin agragar ningun valor al aray*/

function generarInterfaceLista(){
	var sSinListas=document.querySelector('#txtSinListas'),
		listasSection=document.querySelector('#listas'),
		arregloListas=getArregloListas(),
		cantListas=numeroDeListas();
	if (cantListas==false) {
		sSinListas.classList.remove('hide');
	}else{
		for(var t=0; t<arregloListas.length; t++){
			var lista=document.createElement('a');
			lista.innerHTML=arregloListas[t];
			lista.id=t;
			lista.classList.add('interfaceLista');
			lista.addEventListener('click', obtId);
			lista.addEventListener('click', ingresarCanciones);
			sSinListas.classList.add('hide');
			listasSection.appendChild(lista);
		}
	}
}