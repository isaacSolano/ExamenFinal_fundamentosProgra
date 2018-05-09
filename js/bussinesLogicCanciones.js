var mCanciones=JSON.parse(localStorage.getItem('mCancionesLocal')),
	mCancionesEnLista=[];
almacLocal();

function almacLocal(){
	var matrizCancionesLista=JSON.parse(localStorage.getItem('mCancionesEnListaLocal'));
	if (matrizCancionesLista==null) {
		mCancionesEnLista=[
			['0', '1', '1', 'vetusta morla', 'mapas', 'lo que te hace grande'],
		//	[idCancion, idLista, idUsuario],
		];
	}else{
		mCancionesEnLista=JSON.parse(localStorage.getItem('mCancionesEnListaLocal'));
	}
}

function getMatrizCanciones(){
	return mCanciones
}

function getMatrizCancionesEnLista(){
	return mCancionesEnLista
}

function agregarCancionAlSistema(){
	var nIndiceCancion=JSON.parse(localStorage.getItem('nIndiceCancion')),
		bBandera=true,
		nIdLista=JSON.parse(localStorage.getItem('nIndiceListaLocal'));
		nIdUsuario=JSON.parse(localStorage.getItem('nIndiceUsuarioLocal'));
	for(var i=0; i<mCancionesEnLista.length; i++){
		if (mCancionesEnLista[i][2]==nIdUsuario&&mCancionesEnLista[i][1]==nIdLista) {
			if (mCancionesEnLista[i][0]==nIndiceCancion) {
				bBandera=false;
			}
		}
	}
	if (bBandera==true) {
		var aCancionNueva=mCanciones[nIndiceCancion];
		var aDatosNuevos=[nIndiceCancion, nIdLista, nIdUsuario, aCancionNueva[0], aCancionNueva[1], aCancionNueva[2]];
		mCancionesEnLista.push(aDatosNuevos);
		localStorage.setItem('mCancionesEnListaLocal', JSON.stringify(mCancionesEnLista));
	}
	return bBandera
}

function obtId(){
	var nIndice=this.id;
	localStorage.setItem('nIndiceCancion', JSON.stringify(nIndice));
}