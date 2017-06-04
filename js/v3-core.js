var V3 = {} || V3;
V3.titleBase = document.title;
V3.addLibrariesTab = function() {
	};
V3.addAboutVa3cTab = function() {
JA.addAboutTab();
JA.aboutDialog.style.height = '710px';
JA.aboutDialog.style.width = '800px';
JA.aboutDialog.innerHTML =
	'<iframe style="width:800px; height:700px" src="http://localhost:8085/graph_model.html"></iframe>' + '';
	};

	// GRAFIK EKRANINA AIT GORUNUMU BURDAN VERIYORUZ. BOYUTLARI DEGISTIREBILIRSIN
	V3.addAboutVa3cTab2 = function() {
		JA.addAboutTab2();
		JA.aboutDialog.style.height = (window.innerHeight-100) + 'px';
		JA.aboutDialog.style.width = (window.innerWidth-300) + 'px';
				JA.aboutDialog.innerHTML =
				'<iframe  style=" opacity:0.8; align:center; width:'+(window.innerWidth-300)+'px; height:'+(window.innerHeight-100)+
				'px;" src="http://localhost:8085/graph_model.html"></iframe>'+''
	};

	V3.init = function () {
		if ( !location.hash ) {
			V3.getSplashScreen();
		} else if ( location.hash.toLowerCase().indexOf('auto') >  0 ){
			if ( location.hash.toLowerCase().indexOf('autocrap') >  0 ){
				V3.getAutoCrapdoodle();
			} else {
				V3.loadScript( 'autoScript' + '.js' );
			}
		} else {
			V3.getPermalinkBundles ();
		}
	};

	V3.loadScript = function ( fileName ) {
		var js = document.body.appendChild( document.createElement( 'script' ) );
		js.setAttribute( 'src', fileName );
	};

	V3.getSplashScreen = function () {
	};

	V3.getAutoCrapdoodle = function () {
		V3PL.getAutoCrapdoodle();
		location.hash = 'autocrapdoodle';
	};

	V3.getPermalinkBundles = function () {
		var hashes, defaults, src, name;
		var items, item, basepath, fileName;
		hashes = decodeURIComponent( location.hash );
		hashes = hashes.split('&');
		V3PL.permalinks = [];
		V3PL.permalinks.push( V3PL.setDefaults( V3PL.defaultScene ) );
		var permalink = V3PL.permalinks[0];
		items = hashes[0].slice(1).split( '#' );
		for (var i = 0, len = items.length; i < len; i++) {
			item = items[i].split( '=' );
			if ( isNaN( item[1] ) ) {
				permalink[ item[0] ] = item[1];
			} else {
				permalink[ item[0] ] = parseFloat( item[1] );
			}
		}
		for ( i = 1; i < hashes.length; i++ ) {
			defaults = V3PL.setDefaults( V3PL.defaultObject );
			items = hashes[i].slice(1).split( '#' );
			for ( var j = 0; j < items.length; j++ ) {
				item = items[j].split( '=' );
				if ( item[0] === 'mat' || item[0] === 'name' || item[0] === 'override' || item[0] === 'src' ) {
					defaults[ item[0] ] = item[1];
				} else {
					defaults[ item[0] ] = parseFloat( item[1] );
				}
			}
			V3PL.permalinks.push( defaults );
		}
		JAFO.openPermalinks( V3PL.permalinks );
	}
