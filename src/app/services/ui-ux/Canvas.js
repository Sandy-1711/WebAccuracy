"use client"

import uiux from './uiux.module.css'
import { useEffect, useRef } from "react"
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

export default function Canvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current, {
            SIM_RESOLUTION: 64,
            PRESSURE: 0.1,
            SUNRAYS: false,
            SPLAT_RADIUS: 0.5,
            START_SPLATS: 10,
            DENSITY_DISSIPATION: 2,
            CURL: 4,
            VELOCITY_DISSIPATION: 0.1,
            INITIAL: false,
            COLOR_PALETTE: ['#0000ff', '#111111', '#1d1d1d', '#eaeaea', '#4dba87', '#FCD702', '#ff6347'],
        });
    }, []);
    return (<canvas ref={canvasRef} id='canvas'></canvas>)
}