interface IDraw {
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
    canvasCTX: CanvasRenderingContext2D | null
    canvasRef: React.RefObject<HTMLCanvasElement>
    setMouseData: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
    mouseData: { x: number; y: number }
    color: string
    brushSize: number
    drawingMode: string
}

export default function Draw({
    e,
    canvasCTX,
    canvasRef,
    setMouseData,
    mouseData,
    color,
    brushSize,
    drawingMode,
}: IDraw) {
    if (!canvasCTX || e.buttons !== 1) return

    if (!canvasRef.current) return
    const ctx = canvasCTX
    const canvas = canvasRef.current
    if (canvas && ctx) {
        ctx.lineWidth = brushSize
        ctx.lineCap = 'round'

        if (drawingMode === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out'
        } else {
            ctx.globalCompositeOperation = 'source-over'
            ctx.strokeStyle = color
        }

        ctx.beginPath()
        ctx.moveTo(mouseData.x, mouseData.y)
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()

        setMouseData({
            x: e.clientX,
            y: e.clientY,
        })
    }
}
