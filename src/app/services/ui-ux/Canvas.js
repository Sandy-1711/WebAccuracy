"use client"

import uiux from './uiux.module.css'
import { useEffect, useRef } from "react"
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

export default function Canvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current, {
            // SIM_RESOLUTION: 64,
            // PRESSURE: 0.8,
            // SUNRAYS: false,
            // SPLAT_RADIUS: 0.5,
            // START_SPLATS: 10,
            // DENSITY_DISSIPATION: 2,
            // CURL: 4,
            // BLOOM:true,
            // COLORFUL:true,
            // VELOCITY_DISSIPATION: 0,
            // INITIAL: false,
            // COLOR_PALETTE: ['#0000ff', '#111111', '#1d1d1d', '#eaeaea', '#4dba87', '#FCD702', '#ff6347'],
            // SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 1024,
            CAPTURE_RESOLUTION: 512,
            DENSITY_DISSIPATION: 1,
            VELOCITY_DISSIPATION: 0.2,
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 6,
            CURL: 15,
            INITIAL: false,
            SPLAT_AMOUNT: 5,
            SPLAT_RADIUS: 0.25,
            SPLAT_FORCE: 6000,
            SPLAT_KEY: 'Space',
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 5,
            COLOR_PALETTE: [],
            HOVER: true,
            BACK_COLOR: '#000000',
            TRANSPARENT: false,
            BRIGHTNESS: 0.5,
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 1.0,
        });
    }, []);
    return (<canvas ref={canvasRef} id='canvas'></canvas>)
}