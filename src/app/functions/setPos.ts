interface IPos {
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
    setMouseData: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
}

export default function SetPos({ e, setMouseData }: IPos) {
    setMouseData({
        x: e.clientX,
        y: e.clientY,
    })
}
