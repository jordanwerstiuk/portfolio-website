import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function PCBViewer({ modelPath }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add controls for orbiting/zooming
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Add a light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Load the 3D model
    const loader = new OBJLoader();
    loader.load(modelPath, (object) => {
      object.scale.set(0.1, 0.1, 0.1); // Scale the model appropriately
      scene.add(object);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
}

export default PCBViewer;