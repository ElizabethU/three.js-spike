$(document).ready(function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 70;
    
    var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(12, 23, 23), 
        new THREE.MeshLambertMaterial({
            color: 0xff0000
    }));
    // add your code here
    scene.add(sphere);
    renderer.render(scene,camera);
});