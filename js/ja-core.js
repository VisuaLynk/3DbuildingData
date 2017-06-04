	var JA = {} || JA;

	JA.addCSS = function () {

		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow:hidden;}' +
			'h4 { margin: 0; }' +
			'a { opacity: 1; text-decoration: none; font-size: 10pt; color:#FF5733;z-index: 1 }' +
			'p { opacity: 1; text-decoration: none; font-size: 10pt; color:#FF5733;z-index: 1 }' +
			'#closerIcon p { margin: 0; opacity: 0.8; color:#1abc9c;z-index: 1}' +
			'#movable {  opacity: 1	; ccursor: move; left: 20px; max-width: 400px;' +
			'height: 127px; width: 120px;' +
			'overflow-x: hidden; overflow-y: auto; position: absolute; top: ' + (window.innerHeight-100)/1.3+'px; left: ' + (window.innerWidth-100)/2+'px; z-index: 50; }' +
			'.buttonFile {opacity:1;  background-color: #222; cursor: pointer; border: 1px #FF5733 solid; border-radius:50%; z-index: 10; }' +
			'.buttonLibrary {opacity:1; background-color: #222; cursor: pointer; border: 1px #FF5733 solid; border-radius:50%; z-index: 10; }' +
			'.button { opacity:1; padding: 20px 0px 20px 0px; margin: 0px 19px 0px 19px;  cursor: pointer; border: 2px #F62459 solid; border-radius:50%; line-height:20px; z-index: 10; }'
		'';
	};

	JA.addMenu = function () {
		JA.menu = JA.container.appendChild( document.createElement( 'div' ) );
		JA.menu.id = 'movable';
		JA.menu.title = 'Move the menu around or click here to close the menu';
		JA.menu.addEventListener( 'mousedown', JA.mouseMove, false );
		window.addEventListener( 'mouseup', JA.mouseUp, false);

	};

	JA.addAboutTab = function () {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Visualize Node-Link Form of Data';
		tab.style.cssText = 'z-index:10';
		tab.innerHTML =
			'<a style= "z-index:10;" href=# onclick=JA.toggleDialogs(JA.aboutDialog); ><p style= "font-weight: bold; color:#F62459;z-index:10; text-align:center" class=button >' +
				'<i class="fa fa-share-alt"></i> VisualData' +
			'</p></a>';
		JA.aboutDialog = JA.container.appendChild( document.createElement( 'div' ) );
		
		// DIAGRAMA AIT OLAN ARKA PLANI BURDAN DEGISTIRECEKSIN
		JA.aboutDialog.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; z-index:10; ';
	};

	JA.addAboutTab2 = function () {
	};

	JA.addMessageArea = function () {
		JA.msg = JA.menu.appendChild( document.createElement( 'div' ) );
		JA.msg.style.cssText = 'cursor: auto;';
		JA.msg.innerHTML =
			'<div id=divMsg1 ></div>' +
			'<div id=divMsg2 ></div>' +
			'<div id=divMsg3 ></div>' +
			'<div id=divMsg4 ></div>' +
			'<div id=divMsg5 ></div>' +
		''};
// Toggles

	JA.toggleMenu = function () {
		var toggle = JA.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < JA.menu.children.length; i++) {
			JA.menu.children[i].style.display = toggle;
		}
	};

	JA.toggleTab = function ( tab ) {
		tab.style.display = tab.style.display === 'none' ? '' : 'none' ;
	};

	JA.toggleDialogs = function ( dialog ) {
		var toggle = dialog.style.display;
		for (var i = 1, len = JA.container.children.length; i < len; i++) {
			JA.container.children[i].style.display = 'none';
		}
		dialog.style.display = toggle === 'none' ? '' : 'none';
	};

//Events

	JA.mouseUp = function () {
		window.removeEventListener('mousemove', JA.divMove, true);
	};

	JA.mouseMove = function( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();
			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', JA.divMove, false);
		}
	};

	JA.divMove = function( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	};
