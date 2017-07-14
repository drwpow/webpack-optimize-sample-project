/**
 * Desert Scene
 * In the desert, you can’t remember your name…
 */

import React from 'react';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

const cactusModel = require('../lib/cactusModel.json');

class DesertScene extends React.Component {
  constructor(props) {
    super(props);
    this.paint.bind(this);
  }

  componentDidMount() {
    const canvasBox = this.canvas.getBoundingClientRect();
    const canvasWidth = canvasBox.width;
    const canvasHeight = canvasBox.width * 0.4255;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xc8faeb);
    this.camera = new THREE.PerspectiveCamera(20, canvasWidth/canvasHeight, 0.1, 1000);
    this.camera.position.z = 100;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(canvasWidth, canvasHeight);
    this.canvas.appendChild(this.renderer.domElement);
    this.scene.add(this.camera);

    const lights = [];
    lights[0] = new THREE.HemisphereLight(0xffffbb, 0xf89316, 1);
    this.scene.add(lights[0]);

    // 🌵
    const cactusGeometry = new THREE.JSONLoader().parse(cactusModel).geometry;
    const cactusMaterial = new THREE.MeshPhongMaterial({ color: 0xA9DCAA, shininess: 50 });
    for (var n = 0; n < 50; n += 1) {
      const cactus = new THREE.Mesh(cactusGeometry, cactusMaterial);
      cactus.position.x = Math.random() * 400 - 200;
      cactus.position.z = Math.random() * 400 - 200;
      cactus.rotation.y = Math.random() * 2 * Math.PI;
      const scalefactor = Math.random() * 4;
      cactus.scale.set(scalefactor, scalefactor, scalefactor);
      this.scene.add(cactus);
    }

    // 🏜
    this.desert = new THREE.Mesh(
      new THREE.BoxGeometry(500, 0.1, 500),
      new THREE.MeshPhongMaterial({ color: 0xe3d9c0 }),
    );
    this.desert.rotation.x = Math.PI;
    this.scene.add(this.desert);
    this.paint();
  }

  paint(frame) {
    const rotationSpeed = frame / 4000;
    this.camera.position.set(
      100 * Math.sin(rotationSpeed),
      10,
      100 * Math.cos(rotationSpeed),
    );
    this.desert.rotation.y += 0.01;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(nextFrame => this.paint(nextFrame));
  }

  render() {
    return <div ref={canvas => this.canvas = canvas} />;
  }
}

export default DesertScene;
