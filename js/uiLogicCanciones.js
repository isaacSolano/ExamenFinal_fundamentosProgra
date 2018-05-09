generarInterfaceCanciones();
generarInterfaceCancionesLista();

function generarInterfaceCanciones(){
	var mCanciones=getMatrizCanciones(),
		sectionCanciones=document.querySelector('#sectionCanciones');

	for(var i=0; i<mCanciones.length; i++){
		var cancionBloque=document.createElement('a'),
			artista=document.createElement('span'),
			album=document.createElement('span'),
			cancion=document.createElement('span');

			artista.innerHTML=mCanciones[i][0];
			album.innerHTML=mCanciones[i][1];
			cancion.innerHTML=mCanciones[i][2];

			cancionBloque.classList.add('interfaceCancion');
			cancionBloque.id=i;
			cancionBloque.addEventListener('click', obtId);
			cancionBloque.addEventListener('click', mostrarPmp);
			
			sectionCanciones.appendChild(cancionBloque);
			cancionBloque.appendChild(artista);
			cancionBloque.appendChild(album);
			cancionBloque.appendChild(cancion);
	}
}

function mostrarPmp(){
	var prompt=document.querySelector('#pmpCrearLista');
		prompt.classList.remove('hide');
}

var botonCancelar=document.querySelector('#btnCancelar');
	botonCancelar.addEventListener('click', cancelarOperacion);

function cancelarOperacion(){
	var prompt=document.querySelector('#pmpCrearLista');
		prompt.classList.toggle('hide');
}

var botonAgregar=document.querySelector('#btnAgregar');
	botonAgregar.addEventListener('click', agregarALista);

function agregarALista(){
	var prompt=document.querySelector('#pmpCrearLista'),
		agregarCancion=agregarCancionAlSistema(),
		sMensaje=document.querySelector('#txtMensajePmp');

		if (agregarCancion==false) {
			sMensaje.innerHTML='Esta cancion ya está agregada';
			sMensaje.classList.add('mensajeError');
		}else{
			prompt.classList.toggle('hide');
			generarInterfaceCancionesLista();
		}
}

function generarInterfaceCancionesLista(){
	var mCanciones=getMatrizCanciones(),
		mCancionesEnLista=getMatrizCancionesEnLista(),
		sectionCancionesLista=document.querySelector('#sectionCancionesLista'),
		nIdLista=JSON.parse(localStorage.getItem('nIndiceListaLocal'));
		nIdUsuario=JSON.parse(localStorage.getItem('nIndiceUsuarioLocal'));

		for(i=0; i<mCancionesEnLista.length; i++){
			if (mCancionesEnLista[i][2]==nIdUsuario&&mCancionesEnLista[i][1]==nIdLista) {
				var cancionBloque=document.createElement('a'),
					artista=document.createElement('span'),
					album=document.createElement('span'),
					cancion=document.createElement('span');

					artista.innerHTML=mCancionesEnLista[i][3];
					album.innerHTML=mCancionesEnLista[i][4];
					cancion.innerHTML=mCancionesEnLista[i][5];

					cancionBloque.classList.add('interfaceCancion');
					
					sectionCancionesLista.appendChild(cancionBloque);
					cancionBloque.appendChild(artista);
					cancionBloque.appendChild(album);
					cancionBloque.appendChild(cancion);
			}

		}
}

var bloqueCancion=document.getElementById('0');
	bloqueCancion.addEventListener('click', reproducirCancion);

function reproducirCancion(){
	var reproductor=document.querySelector('#reproductor'),
		contenedor=document.querySelector('#reproductorBloque');
		contenedor.classList.remove('hide');
		reproductor.autoplay='autoplay';
		reproductor.src='musica/cancion1.mp3';
		contenedor.appendChild(reproductor);
}