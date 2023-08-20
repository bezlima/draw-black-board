'use client'
import BrushColor from './brushColor'
import BrushSize from './brushSize'
import BrushMode from './brushMode'
import ClearCanvas from './clearButton'
import SaveCanvas from './saveButton'

export default function Menu() {
    return (
        <menu className="absolute top-2 left-2 flex items-center gap-4 bg-neutral-300 px-4 py-1 rounded-sm">
            <BrushColor />
            <BrushSize />
            <BrushMode />
            <ClearCanvas />
            <SaveCanvas />
        </menu>
    )
}
