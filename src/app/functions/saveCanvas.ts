export default function saveCanvasAsImage(canvasRef: any) {
    const canvas = canvasRef.current
    if (canvas) {
        const link = document.createElement('a')
        link.href = canvas.toDataURL()
        link.download = 'meu_desenho.png'
        link.click()
    }
}
