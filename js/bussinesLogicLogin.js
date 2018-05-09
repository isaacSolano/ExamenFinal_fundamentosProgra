var mDatosUsuario=[];

almacLocal();

function almacLocal(){
	var matrizDatosUsuario=localStorage.getItem('mDatosUsuarioLocal');

	if (matrizDatosUsuario==null) {
		mDatosUsuario=[
		]
	}else{
		mDatosUsuario=JSON.parse(localStorage.getItem('mDatosUsuarioLocal'));
	}
}

function calcularEdad(pinputNacimiento){
	var nFechaNac=new Date(pinputNacimiento.value),
		nAnnoNac=nFechaNac.getFullYear(),
		nFechaActual=new Date(),
		nAnnoAct=nFechaActual.getFullYear(),
		nEdad=0;

		nEdad=nAnnoAct-nAnnoNac;
		return nEdad
}

function validarContrasenna(inputCreacionContrasenna,inputConfirmacionContrasenna){
	var patronContrasenna=/^[A-Z\a-z\0-9]+$/,
	bError=false;

	if (patronContrasenna.test(inputCreacionContrasenna.value)==true&&inputCreacionContrasenna.value==inputConfirmacionContrasenna.value) {

	}else{
		bError=true;
	}
	return bError
}

function verificarCorreo(pinputCorreo){
	var patronCorreo=/^[@/./com]+$/,
		bError=false;

	if (patronCorreo.test(pinputCorreo.value)==true) {

	}else{
		bError=true;
	}
	return bError
}

function creacionDeUsuario(inputCrearUsuario,inputCreacionContrasenna){
	var aDatosNuevos=[inputCrearUsuario.value, inputCreacionContrasenna.value],
		nIndice=0,
		bError=false;
	for( var i=0; i<mDatosUsuario.length; i++){
		if (mDatosUsuario[i][0]==aDatosNuevos[0]) {
			bError=true;
		}else{
			nIndice=i+1;
		}
	}
	if (bError==false) {
		aDatosNuevos.push(nIndice);
		mDatosUsuario.push(aDatosNuevos);
		localStorage.setItem('mDatosUsuarioLocal', JSON.stringify(mDatosUsuario));
	}

	return bError

}

function iniciacionDeUsuario(aInputs){
	var bError=true,
		nIndice=0;
	
	for(var i=0; i<mDatosUsuario.length; i++){
		if (mDatosUsuario[i][0]==aInputs[0].value&&mDatosUsuario[i][1]==aInputs[1].value) {
			nIndice=i;
			localStorage.setItem('nIndiceUsuarioLocal', JSON.stringify(nIndice));
			bError=false
		}

	}
	return bError
}

function verificarAdmin(aInputs){
	var aAdmin=['adm', 'adm1234!'],
	bExito=true;
	for(var r=0; r<aAdmin.length; r++){
		if (aAdmin[r]!=aInputs[r].value) {
			bExito=false;
		}
	}
	return bExito
}