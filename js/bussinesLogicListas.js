var mListas=[];

almacLocal();

function almacLocal(){
	matrizListasLocal=JSON.parse(localStorage.getItem('mListasLocal'));

	if (matrizListasLocal==null) {
		mListas=[
			['trail', '0', '1']
		]
	}else{
		mListas=JSON.parse(localStorage.getItem('mListasLocal'));
	}
}

function getArregloListas(){
	var nIndiceUsuario=JSON.parse(localStorage.getItem('nIndiceUsuarioLocal')),
		aCrearListas=[];
	for(var f=0; f<mListas.length; f++){
		if (mListas[f][2]==nIndiceUsuario) {
			aCrearListas.push(mListas[f][0]);
		}
	}
	return aCrearListas
}

function agregarLista(inputLista){
	var bEncontrado=false,
	nIndiceLista=0,
	nIndiceUsuario=localStorage.getItem('nIndiceUsuarioLocal'),
	cantListas=numeroDeListas();
	for(var i=0; i<mListas.length; i++){
		if (mListas[i][2]==nIndiceUsuario) {
			if (mListas[i][0]==inputLista.value) {
				bEncontrado=true;
			}else{
				nIndiceLista++
			}
		}
	}
	if (bEncontrado==false) {
		var aDatosNuevos=[inputLista.value, nIndiceLista, nIndiceUsuario];
		mListas.push(aDatosNuevos);
		localStorage.setItem('mListasLocal', JSON.stringify(mListas));
		generarInterfaceLista();
	}
	return bEncontrado
}

function numeroDeListas(){
	var bSinListas=false,
		nIndiceUsuario=localStorage.getItem('nIndiceUsuarioLocal');
	for(var i=0; i<mListas.length; i++){
		if (mListas[i]==nIndiceUsuario) {
		}else{
			bSinListas=true;
		}
	}

	return bSinListas
}

function ingresarCanciones(){
	window.location='../practica_arreglos/canciones.html';
}

function obtId(){
	var nIndiceLista=this.id;
	localStorage.setItem('nIndiceListaLocal', JSON.stringify(nIndiceLista));
}
//cuando yo quiera agregar una cancion, al dar click en 'agregar' voy a llamar el indice de la lista en la que estoy y el indice del usuario en el que estoy trabajando