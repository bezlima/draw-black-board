import { useDrawContext } from '@/app/context/drawContext'
import functions from '@/app/utils/menuUtils'
import { DownloadSimple } from '@phosphor-icons/react'

export default function SaveCanvas() {
    const { saveCanvasAsImage } = functions
    const { canvasRef } = useDrawContext()

    return (
        <button onClick={() => saveCanvasAsImage(canvasRef)}>
            <DownloadSimple size={32} color="#115e59" weight="bold" className="hover:fill-teal-400" />
        </button>
    )
}
