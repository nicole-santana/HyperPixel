import { useRef, useEffect, useState } from "react";

const SIZE = 0.2 * 16; // 0.2rem em px (16px = 1rem)
const WIDTH = 41.4375 * 16; // rem para px
const HEIGHT = 43.5 * 16;

const DIRS = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};

function getRandomPos() {
  return [
    Math.floor(Math.random() * (WIDTH / SIZE)) * SIZE,
    Math.floor(Math.random() * (HEIGHT / SIZE)) * SIZE,
  ];
}

export default function JogoDaCobrinha() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([[SIZE * 5, SIZE * 5]]);
  const [dir, setDir] = useState([SIZE, 0]);
  const [food, setFood] = useState(getRandomPos());
  const [dead, setDead] = useState(false);

  // Cores do tema
  const snakeColor = getComputedStyle(document.documentElement).getPropertyValue('--background') || '#222';
  const foodColor = getComputedStyle(document.documentElement).getPropertyValue('--texto') || '#A61717';
  const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--card-filtro') || '#A61717';

  useEffect(() => {
    const handleKey = (e) => {
      if (DIRS[e.key]) {
        const [dx, dy] = DIRS[e.key];
        setDir([dx * SIZE, dy * SIZE]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (dead) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = [prev[0][0] + dir[0], prev[0][1] + dir[1]];
        // Colisão com borda
        if (
          head[0] < 0 ||
          head[1] < 0 ||
          head[0] >= WIDTH ||
          head[1] >= HEIGHT
        ) {
          setDead(true);
          return prev;
        }
        // Colisão com si mesmo
        if (prev.some(([x, y]) => x === head[0] && y === head[1])) {
          setDead(true);
          return prev;
        }
        // Comeu comida
        let newSnake = [head, ...prev];
        if (head[0] === food[0] && head[1] === food[1]) {
          setFood(getRandomPos());
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [dir, food, dead]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    // Snake
    ctx.fillStyle = dead ? borderColor : snakeColor;
    snake.forEach(([x, y]) => {
      ctx.fillRect(x, y, SIZE, SIZE);
    });
    // Food
    ctx.fillStyle = foodColor;
    ctx.fillRect(food[0], food[1], SIZE, SIZE);
    // Border
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, WIDTH, HEIGHT);
    if (dead) {
      ctx.font = "2rem sans-serif";
      ctx.fillStyle = borderColor;
      ctx.fillText("Game Over", WIDTH / 2 - 80, HEIGHT / 2);
    }
  }, [snake, food, dead, snakeColor, foodColor, borderColor]);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        background: "#fff",
        display: "block",
        margin: "0 auto",
        border: `2px solid ${borderColor}`,
      }}
      tabIndex={0}
    />
  );
}