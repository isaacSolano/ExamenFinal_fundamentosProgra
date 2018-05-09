var botonMostrarCreacionUsuario=document.querySelector('#btnMostrarCreacionUsuario');
	botonMostrarCreacionUsuario.addEventListener('click', mostrarFormCreacionUsuario);

	function mostrarFormCreacionUsuario(){
		var formCreacionUsuario=document.querySelector('#boxCreacionUsuario');
			formCreacionUsuario.classList.remove('hide');

		var bienvenidaBox=document.querySelector('#bienvenida');
			bienvenidaBox.classList.add('hide');

		var vueltaHome=document.querySelector('#btnMostrarPaginaInicio');
			vueltaHome.classList.toggle('hide');
	}
	/*funcion que muestra creacion de usuario*/

var botonMostrarInicioSesion=document.querySelector('#btnMostrarInicioSesion');
	botonMostrarInicioSesion.addEventListener('click', mostrarFormInicioSesion);

	function mostrarFormInicioSesion(){
		var formInicioSesion=document.querySelector('#boxInicioSesion');
			formInicioSesion.classList.remove('hide');

		var bienvenidaBox=document.querySelector('#bienvenida');
			bienvenidaBox.classList.add('hide');

		var vueltaHome=document.querySelector('#btnMostrarPaginaInicio');
			vueltaHome.classList.toggle('hide');
	}
	/*funcion que muestra inicio de sesion*/

var botonMostrarInicio=document.querySelector('#btnMostrarPaginaInicio');
	botonMostrarInicio.addEventListener('click', mostrarPaginaInicio);

	function mostrarPaginaInicio(){
		var formInicioSesion=document.querySelector('#boxInicioSesion');
			formInicioSesion.classList.add('hide');

		var formCreacionUsuario=document.querySelector('#boxCreacionUsuario');
			formCreacionUsuario.classList.add('hide');	

		var bienvenidaBox=document.querySelector('#bienvenida');
			bienvenidaBox.classList.remove('hide');

		var vueltaHome=document.querySelector('#btnMostrarPaginaInicio');
			vueltaHome.classList.toggle('hide');
	}
	/*funcion que me envia de vuelta al homepage*/

/*visual-->encargada de aparecer/desaparecer formularios de inicio y creacion de sesion*/

var btnCrearUsuario=document.querySelector('#botonCrearUsuario');
	btnCrearUsuario.addEventListener('click', enviarSolicictudCreacionUsuario);

	function validacionCreacionIncorrecta(inputNombreUsuario,inputCrearUsuario,inputNacimiento,inputCorreo,inputGenero,inputCreacionContrasenna,inputConfirmacionContrasenna){
			var aValidacion=[inputNombreUsuario, inputCrearUsuario, inputNacimiento, inputCorreo, inputGenero, inputCreacionContrasenna, inputConfirmacionContrasenna],
			nTamannoArray=aValidacion.length,
			bError=false,
			nEdad=calcularEdad(inputNacimiento),
			bValidarContrasenna=validarContrasenna(inputCreacionContrasenna,inputConfirmacionContrasenna),
			bErrorCorreo=verificarCorreo(inputCorreo);

			for(var i=0; i<nTamannoArray; i++){
				if(aValidacion[i].value=='default'||aValidacion[i].value==''){
					aValidacion[i].classList.add('inputError');
					aValidacion[i].classList.remove('inputBien');

					bError=true;
				}else{
					aValidacion[i].classList.add('inputBien');
					aValidacion[i].classList.remove('inputError');
				}				
			}
			if (bError==false) {
				if (nEdad<14) {
					bError=true;

					inputNacimiento.classList.add('inputError');
					inputNacimiento.classList.remove('inputBien');
				}else{
					inputNacimiento.classList.remove('inputError');
					inputNacimiento.classList.add('inputBien');
				}
				if (bValidarContrasenna==true) {
					bError=true;

					inputCreacionContrasenna.classList.add('inputError');
					inputConfirmacionContrasenna.classList.add('inputError');

					inputCreacionContrasenna.classList.remove('inputBien');
					inputConfirmacionContrasenna.classList.remove('inputBien');
				}else{
					inputCreacionContrasenna.classList.remove('inputError');
					inputConfirmacionContrasenna.classList.remove('inputError');

					inputCreacionContrasenna.classList.add('inputBien');
					inputConfirmacionContrasenna.classList.add('inputBien');
				}
				if (bErrorCorreo==true) {
					bError=true;

				}else{

				}
			}else{

			}
			return bError
		}
	/*funcion que se encarga de admitir informacion correcta en la creacion del usuario*/

	function validacionInicioIncorrecta(aInputs){
			var bError=false;

			for(var i=0; i<aInputs.length; i++){
				if(aInputs[i].value==''){
					aInputs[i].classList.add('inputError');
					aInputs[i].classList.remove('inputBien');

					bError=true;
				}else{
					aInputs[i].classList.add('inputBien');
					aInputs[i].classList.remove('inputError');
				}				
			}
			return bError
	}
	/*funcion que se encarga de admitir informacion correcta en el inicio de sesion*/

var btnIniciarUsuario=document.querySelector('#botonIniciarUsuario');
	btnIniciarUsuario.addEventListener('click', enviarIniciarSesion);


	function enviarSolicictudCreacionUsuario(){
		var inputNombreUsuario=document.querySelector('#txtNombreCompleto'),
		 	inputCrearUsuario=document.querySelector('#txtCrearUsuario'),
		 	inputNacimiento=document.querySelector('#txtNacimiento'),
		 	inputCorreo=document.querySelector('#txtCorreo'),
		 	inputGenero=document.querySelector('#txtGenero'),
		 	inputCreacionContrasenna=document.querySelector('#txtCreacionContrasenna'),
		 	inputConfirmacionContrasenna=document.querySelector('#txtConfirmacionContrasenna'),
		 	bValidacionCreacionIncorrecta=validacionCreacionIncorrecta(inputNombreUsuario,inputCrearUsuario,inputNacimiento,inputCorreo,inputGenero,inputCreacionContrasenna,inputConfirmacionContrasenna),
			sMensaje=document.querySelector('#txtMensajeCrear'),
			bEnviarSolicitudCrear=false;
			
			if(bValidacionCreacionIncorrecta==true){
				sMensaje.innerHTML='No se puede registrar, si los campos estan completos, puede que tengas un problema con tu edad!';

				sMensaje.classList.add('mensajeError');
				sMensaje.classList.remove('mensajeBien');
			}else{
				bEnviarSolicitudCrear=creacionDeUsuario(inputCrearUsuario,inputCreacionContrasenna);

				if (bEnviarSolicitudCrear==true) {
					sMensaje.innerHTML='Este usuario ya existe';
					sMensaje.classList.add('mensajeError');
					sMensaje.classList.remove('mensajeBien');

					inputCrearUsuario.classList.add('inputError');
					inputCrearUsuario.classList.remove('inputBien');
				}else{
					sMensaje.innerHTML='Registrado, ahora inicia sesión'
					sMensaje.classList.remove('mensajeError');
					sMensaje.classList.add('mensajeBien');
				}
			}
	}
	/*funcion que envia los datos de creacion al registro*/

	function enviarIniciarSesion(){
		var inputNombreUsuario=document.querySelector('#txtIniciarUsuario'),
		 	inputContrasenna=document.querySelector('#txtIniciarContrasenna'),
			sMensaje=document.querySelector('#txtMensajeRegistrar'),
			aInputs=[inputNombreUsuario, inputContrasenna],
			bValidacionInicioIncorrecta=validacionInicioIncorrecta(aInputs),
			bEnviarSolicitudIniciar=false;

			if (bValidacionInicioIncorrecta==true) {
				sMensaje.innerHTML='No se puede iniciar con campos vacios';

				sMensaje.classList.add('mensajeError');
				sMensaje.classList.remove('mensajeBien');
			}else{
				bAdmin=verificarAdmin(aInputs);

				if(bAdmin==true){
					window.location='../practica_arreglos/admin.html';
				}else{
					for(var t=0; t<aInputs.length; t++){
						aInputs[t].classList.add('inputError');
						aInputs[t].classList.remove('inputBien');
					}
					sMensaje.innerHTML='Los datos no con concuerdan, intente de nuevo';
					sMensaje.classList.add('mensajeError');
					sMensaje.classList.remove('mensajeBien');
				
					bEnviarSolicitudIniciar=iniciacionDeUsuario(aInputs);

					if (bEnviarSolicitudIniciar==false) {
						sMensaje.innerHTML='Ingresado';

						sMensaje.classList.add('mensajeBien');
						sMensaje.classList.remove('mensajeError');

						for(var i=0; i<aInputs.length; i++){
							aInputs[i].classList.add('inputBien');
							aInputs[i].classList.remove('inputError');
						}

						/*enviar a pagina de listas*/
						window.location='../practica_arreglos/listas.html'
					}else{
						sMensaje.innerHTML='Datos incorrectos, verifique el nombre de usuario o la contraseña';

						sMensaje.classList.add('mensajeError');
						sMensaje.classList.remove('mensajeBien');
						for(var i=0; i<aInputs.length; i++){
							aInputs[i].classList.remove('inputBien');
							aInputs[i].classList.add('inputError');
						}
					}					
				}
			}
		}
	/*funcion que envia los datos del inicio de sesion al registro*/
