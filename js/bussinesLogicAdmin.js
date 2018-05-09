var mCanciones=[
];
almacLocal();

function almacLocal(){
	var matrizCancionesLocal=JSON.parse(localStorage.getItem('mCancionesLocal'));
	if (matrizCancionesLocal==null) {
		mCanciones=[
			['vetusta morla', 'mapas', 'lo que te hace grande', '0'],
		]
	}else{
		mCanciones=JSON.parse(localStorage.getItem('mCancionesLocal'));
	}
}
function agregarCancionAlSistema(aInputsValor){
	var bError=false,
		nIndiceCancion=0;
	for(var o=0; o<mCanciones.length; o++){
		if (mCanciones[o][2]==aInputsValor[2].toLowerCase()) {
			bError=true;
		}else{
			nIndiceCancion++;
		}
	}
	if (bError==false) {
		var aNuevosDatos=[aInputsValor[0], aInputsValor[1], aInputsValor[2], nIndiceCancion];
		mCanciones.push(aNuevosDatos);
		localStorage.setItem('mCancionesLocal', JSON.stringify(mCanciones));
		generarInterface();
	}
	return bError
}

function getMatrizCanciones() {
	return mCanciones
}