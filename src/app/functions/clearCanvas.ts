interface IClear {
  canvasCTX: CanvasRenderingContext2D | null;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function clearCanvas({
  canvasCTX,
  canvasRef
}:IClear) {

  const ctx = canvasCTX;
  const canvas = canvasRef.current;
  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};