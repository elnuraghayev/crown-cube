var camera, scene, renderer;
var geometry, material, mesh;
var stats;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1500;

	scene = new THREE.Scene();

	geometry = new THREE.CubeGeometry( 600, 75, 600 );

	material = new THREE.MeshPhongMaterial( { color: 0xE51F34} );
	planeTop = new THREE.Mesh( geometry, material );
	planeTop.position.y = -150 ;
	planeTop.rotation.x = 0.45 ;
	planeTop.rotation.y = 0.8 ;
	scene.add( planeTop );

	material = new THREE.MeshPhongMaterial( { color: 0xF7AF3C} );
	planeMiddle = new THREE.Mesh( geometry, material );
	planeMiddle.position.y = 0 ;
	planeMiddle.rotation.x = 0.45 ;
	planeMiddle.rotation.y = 0.8 ;
	scene.add( planeMiddle );

	material = new THREE.MeshPhongMaterial( { color: 0xDFDB3C} );
	planeBottom = new THREE.Mesh( geometry, material );
	planeBottom.position.y = 150 ;
	planeBottom.rotation.x = 0.45 ;
	planeBottom.rotation.y = 0.8 ;
	scene.add( planeBottom );

	var light = new THREE.PointLight( 0xffffff , 1 );
	light.position.set( 1000, 1000, 2000 ); 
	scene.add( light );

	var light2 = new THREE.PointLight( 0xffffff , .8 );
	light2.position.set( -2000, -1000, 500 ); 
	scene.add( light2 );

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	document.body.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

}

function animate() {
	requestAnimationFrame( animate );

	planeTop.rotation.y -= .01 ;
	planeMiddle.rotation.y -= .01 ;
	planeBottom.rotation.y -= .01 ;

	renderer.render( scene, camera );
	stats.update();

}
