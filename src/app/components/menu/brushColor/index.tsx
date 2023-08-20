import { useDrawContext } from '@/app/context/drawContext'
import { useState } from 'react'

export default function BrushColor() {
    const { color, setColor } = useDrawContext()

    return (
        <>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className={`
                    border-none 
                    bg-transparent
                    cursor-pointer 
                    w-10
                `}
            />
        </>
    )
}
