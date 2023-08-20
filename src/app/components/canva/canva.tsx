'use client'

import { useDrawContext } from '../../context/drawContext'
import CanvasFunctions from '../../utils/canvasUtil'

export default function Canvas() {
    const { mouseData, setMouseData, canvasRef, canvasCTX, color, brushSize, drawingMode } = useDrawContext()

    const setPosProps = {
        setMouseData,
    }

    const drawProps = {
        canvasCTX,
        canvasRef,
        setMouseData,
        mouseData,
        color,
        brushSize,
        drawingMode,
    }

    const styles = `
        cursor-crosshair
    `

    return (
        <>
            <canvas
                className={styles}
                width={'100%'}
                height={'100%'}
                ref={canvasRef}
                onMouseEnter={(e) => CanvasFunctions.SetPos({ e, ...setPosProps })}
                onMouseMove={(e) => (
                    CanvasFunctions.SetPos({ e, ...setPosProps }), CanvasFunctions.Draw({ e, ...drawProps })
                )}
                onMouseDown={(e) => CanvasFunctions.SetPos({ e, ...setPosProps })}
            ></canvas>
        </>
    )
}
