generarInterface();
var botonMostrarPrompt=document.querySelector('#btnMostrarPrompt');
	botonMostrarPrompt.addEventListener('click', mostrarPrompt);

	function mostrarPrompt(){
		var promptCrearLista=document.querySelector('#pmpAgregarCancion');
			promptCrearLista.classList.toggle('hide');
	}

	function validarCampoCancion(aInputs){
		var bError=false;
		for(var y=0; y<aInputs.length; y++){
			if (aInputs[y].value==''||aInputs[y].value==0) {
				bError=true;

				aInputs[y].classList.add('inputError');
				aInputs[y].classList.remove('inputBien');
			}else{
				aInputs[y].classList.remove('inputError');
				aInputs[y].classList.add('inputBien');
			}
		}
		return bError
	}

var botonAgregarCancion=document.querySelector('#btnAgregarCancion');
	botonAgregarCancion.addEventListener('click', agregarCancion);

	function agregarCancion(){
		var aInputs=document.querySelectorAll('#pmpAgregarCancion .box input'),
			bCampoVacio=validarCampoCancion(aInputs),
			sMensaje=document.querySelector('#txtMensajePmp'),
			bCancionExistente=false,
			promptAgregarCancion=document.querySelector('#pmpAgregarCancion'),
			mostrarCancionesAgregadas=false;

			if (bCampoVacio==true) {
				sMensaje.innerHTML='No puede haber un campo vacío';
				sMensaje.classList.remove('mensajeBien');
				sMensaje.classList.add('mensajeError');
			}else{
				var aInputsValor=[aInputs[0].value, aInputs[4].value, aInputs[6].value];

				sMensaje.innerHTML='LAgregando canción';
				sMensaje.classList.add('mensajeBien');
				sMensaje.classList.remove('mensajeError');

				bCancionExistente=agregarCancionAlSistema(aInputsValor);
				if (bCancionExistente==true) {
					aInputs[6].classList.add('inputError');
					aInputs[6].classList.remove('inputBien');

					sMensaje.innerHTML='Ya hay una cancion con este nombre';
					sMensaje.classList.add('mensajeError');
					sMensaje.classList.remove('mensajeBien');				
				}else{
					aInputs[6].classList.remove('inputError');
					aInputs[6].classList.add('inputBien');

					sMensaje.innerHTML='Lista creada';
					promptAgregarCancion.classList.toggle('hide');
				}
			}
	}
	/*funcion que envia los datos para crear una nueva lista*/

var botonCancelarOperacion=document.querySelector('#btnCancelarOperacion');
	btnCancelarOperacion.addEventListener('click', cancelarOperacion);

	function cancelarOperacion(){
		var promptCrearLista=document.querySelector('#pmpAgregarCancion');
			promptCrearLista.classList.toggle('hide');
	}

function generarInterface(){
	var mValoresAgregar=getMatrizCanciones(),
		cancionesSection=document.querySelector('#sectionCanciones');

	for(var t=0; t<mValoresAgregar.length; t++){
		var cancionBloque=document.createElement('a'),
			artista=document.createElement('span'),
			album=document.createElement('span'),
			cancion=document.createElement('span');

			artista.innerHTML=mValoresAgregar[t][0];
			album.innerHTML=mValoresAgregar[t][1];
			cancion.innerHTML=mValoresAgregar[t][2];

			cancionBloque.classList.add('interfaceCancion');
			
			cancionesSection.appendChild(cancionBloque);
			cancionBloque.appendChild(artista);
			cancionBloque.appendChild(album);
			cancionBloque.appendChild(cancion);
	}
}