import { useDrawContext } from '@/app/context/drawContext'
import { useEffect } from 'react'

export default function BrushSize() {
    const { setBrushSize, brushSize } = useDrawContext()

    return (
        <input
            type="number"
            min={1}
            value={brushSize === 0 ? 1 : brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className={`
                border-b-2 
                border-teal-800
                bg-transparent
                px-1
                w-20
            `}
        />
    )
}
