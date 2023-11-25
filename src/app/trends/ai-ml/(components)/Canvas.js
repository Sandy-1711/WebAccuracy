'use client'
import { useEffect, useLayoutEffect } from "react"
import * as THREE from 'three'
import aimlcss from '../aiml.module.css';
export default function Canvas() {



    useEffect(function () {
        var can1=document.querySelectorAll(`.${aimlcss.canvas}`)[0]
        var can2=document.querySelectorAll(`.${aimlcss.canvas}`)[1]
        var vertShader = `
        uniform float size;
        uniform float time;
        uniform float amplitude;
        uniform float waveLength;
        varying float ampNormalized;
          void main() {
          vec3 p = position;
          float wLength = 1. / waveLength;
          p.y = sin(position.x * wLength + time) * cos(position.z * wLength  + time) * amplitude;
          ampNormalized = abs(- amplitude  + p.y) / (amplitude * 2.);
            vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
          gl_PointSize = size * ( 300.0 / length( mvPosition.xyz ) );
          gl_Position = projectionMatrix * mvPosition;
            }
      `;
        var fragShader = `
          uniform vec3 color;
        uniform float opacity;
        varying float ampNormalized;
        void main() {
          vec3 c = color;
          gl_FragColor = vec4(c, opacity);
        }
      `;
        // Extend PlaneBufferGeometry with toGrid method
        Object.assign(THREE.PlaneGeometry.prototype, {
            toGrid: function() {
                let segmentsX = this.parameters.widthSegments || 1;
                let segmentsY = this.parameters.heightSegments || 1;
                let indices = [];
                for (let i = 0; i < segmentsY + 1; i++) {
                    let index11 = 0;
                    let index12 = 0;
                    for (let j = 0; j < segmentsX; j++) {
                        index11 = (segmentsX + 1) * i + j;
                        index12 = index11 + 1;
                        let index21 = index11;
                        let index22 = index11 + (segmentsX + 1);
                        indices.push(index11, index12);
                        if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                            indices.push(index21, index22);
                        }
                    }
                    if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                        indices.push(index12, index12 + segmentsX + 1);
                    }
                }
                this.setIndex(indices);
                return this;
            }
        });
        
        // Your Three.js scene setup
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 25, 180);
        
        var renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setClearColor('#2A2459'); // Light blue color

        renderer.setSize(window.innerWidth, window.innerHeight);
        can1.appendChild(renderer.domElement);
        // can2.appendChild(renderer.domElement);
        
        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
        
        var pWidth = 50;
        var pHeight = 50;
        
        // Use the extended toGrid() method with PlaneGeometry
        var planeGeom = new THREE.PlaneGeometry(500, 500, pWidth, pHeight).toGrid();
        planeGeom.rotateX(-Math.PI * .2);
        
        var seaDown = new THREE.LineSegments(planeGeom, new THREE.ShaderMaterial({
            uniforms: {
                color: {
                    value: new THREE.Color("#2A2459")
                },
                opacity: {
                    value: 0.5
                },
                time: {
                    value: 0
                },
                amplitude: {
                    value: 2
                },
                waveLength: {
                    value: Math.PI * 5
                }
            },
            vertexShader: vertShader,  // Replace with your vertex shader code
            fragmentShader: fragShader,  // Replace with your fragment shader code
        }));
        scene.add(seaDown);
        
        var clock = new THREE.Clock();
        var t = 0;
        render();
        
        function render() {
            requestAnimationFrame(render);
            var delta = clock.getDelta();
            t += delta;
        
            seaDown.material.uniforms.time.value = t;
        
            // scene.rotation.y += delta * 0.05;
        
            renderer.render(scene, camera);
        }

    })
    return (<>

    </>)
}