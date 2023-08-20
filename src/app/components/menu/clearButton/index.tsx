import { useDrawContext } from '@/app/context/drawContext'
import functions from '@/app/utils/menuUtils'
import { Trash } from '@phosphor-icons/react'

export default function ClearCanvas() {
    const { clearCanvas } = functions
    const { canvasRef, canvasCTX } = useDrawContext()

    return (
        <button onClick={() => clearCanvas({ canvasCTX, canvasRef })}>
            <Trash size={32} color="#115e59" weight="bold" className="hover:fill-teal-400" />
        </button>
    )
}
