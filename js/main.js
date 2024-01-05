// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear una geometría de esfera
const sphereGeometry = new THREE.SphereGeometry(500, 60, 40); // Tamaño y resolución de la esfera

// Cargar la imagen panorámica
const panoramicTexture = new THREE.TextureLoader().load('./imagen360.jpeg'); // Ruta de la imagen panorámica

// Invertir la textura para que la visualización sea correcta
panoramicTexture.mapping = THREE.UVMapping;
panoramicTexture.rotation = Math.PI;

// Crear el material de la esfera con la textura cargada
const sphereMaterial = new THREE.MeshBasicMaterial({ map: panoramicTexture });

// Crear la esfera con la geometría y el material
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Posicionar la cámara al centro de la esfera
camera.position.set(0, 0, 0.1);

// Función de renderizado
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Manejo del redimensionamiento de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});