'use client'
import React, { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react'

interface IDraw {
    mouseData: { x: number; y: number }
    setMouseData: React.Dispatch<React.SetStateAction<any>>
    canvasRef: any
    canvasCTX: CanvasRenderingContext2D | null
    setCanvasCTX: React.Dispatch<React.SetStateAction<CanvasRenderingContext2D | null>>
    color: string
    setColor: React.Dispatch<React.SetStateAction<string>>
    brushSize: number
    setBrushSize: React.Dispatch<React.SetStateAction<number>>
    drawingMode: string
    setDrawingMode: React.Dispatch<React.SetStateAction<string>>
}

const Draw = createContext<IDraw>({
    mouseData: { x: 0, y: 0 },
    setMouseData: () => {},
    canvasRef: null,
    canvasCTX: null,
    setCanvasCTX: () => {},
    color: '#000000',
    setColor: () => {},
    brushSize: 10,
    setBrushSize: () => {},
    drawingMode: 'brush',
    setDrawingMode: () => {},
})

export function DrawContext({ children }: { children: ReactNode }) {
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 })
    const canvasRef = useRef<any>(null)
    const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(null)
    const [color, setColor] = useState('#115e59')
    const [brushSize, setBrushSize] = useState(15)
    const [drawingMode, setDrawingMode] = useState('brush')

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            setCanvasCTX(ctx)
        }
    }, [canvasRef])

    useEffect(() => {
        if (brushSize === 0) {
            setBrushSize(1)
        }
    }, [brushSize, setBrushSize])

    return (
        <Draw.Provider
            value={{
                mouseData,
                setMouseData,
                canvasRef,
                canvasCTX,
                setCanvasCTX,
                color,
                setColor,
                brushSize,
                setBrushSize,
                drawingMode,
                setDrawingMode,
            }}
        >
            {children}
        </Draw.Provider>
    )
}

export const useDrawContext = () => useContext(Draw)
