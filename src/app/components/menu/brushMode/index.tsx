import { useDrawContext } from '@/app/context/drawContext'
import { Eraser, PaintBrush } from '@phosphor-icons/react'
import { useState } from 'react'

export default function BrushMode() {
    const { setDrawingMode } = useDrawContext()
    const [selectOption, setSelectOption] = useState<number>(0)

    return (
        <div className="flex items-center gap-4">
            <button onClick={() => (setDrawingMode('brush'), setSelectOption(0))}>
                <PaintBrush
                    size={32}
                    color={selectOption === 0 ? '#2dd4bf' : '#115e59'}
                    weight="bold"
                    className="hover:fill-teal-400"
                />
            </button>
            <button onClick={() => (setDrawingMode('eraser'), setSelectOption(1))}>
                <Eraser
                    size={32}
                    color={selectOption === 1 ? '#2dd4bf' : '#115e59'}
                    weight="bold"
                    className="hover:fill-teal-400"
                />
            </button>
        </div>
    )
}
