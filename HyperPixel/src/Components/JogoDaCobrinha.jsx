import { useRef, useEffect, useState } from "react";

const SIZE = 0.8 * 16;
const WIDTH = 41.4375 * 16;
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
  const [themeVersion, setThemeVersion] = useState(0);

  // Detecta mudança de tema (classe do html)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeVersion((v) => v + 1);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

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
        if (
          head[0] < 0 ||
          head[1] < 0 ||
          head[0] >= WIDTH ||
          head[1] >= HEIGHT
        ) {
          setDead(true);
          return prev;
        }
        if (prev.some(([x, y]) => x === head[0] && y === head[1])) {
          setDead(true);
          return prev;
        }
        // Se encostar na comida, cresce (não faz pop) e gera nova comida
        if (head[0] === food[0] && head[1] === food[1]) {
          setFood(getRandomPos());
          return [head, ...prev]; // cresce
        }
        // Movimento normal: não cresce
        let newSnake = [head, ...prev];
        newSnake.pop();
        return newSnake;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [dir, food, dead]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Sempre pega as variáveis CSS atuais
    const snakeColor =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--Cobra"
      ) || "#222";
    const foodColor =
      getComputedStyle(document.documentElement).getPropertyValue("--Comida") ||
      "#A61717";
    const borderColor =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--background"
      ) || "#A61717";
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--fonte-p') || 'sans-serif';

    ctx.fillStyle = dead ? borderColor : snakeColor;
    snake.forEach(([x, y]) => {
      ctx.fillRect(x, y, SIZE, SIZE);
    });
    ctx.fillStyle = foodColor;
    ctx.fillRect(food[0], food[1], SIZE, SIZE);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, WIDTH, HEIGHT);
    if (dead) {
      ctx.font = `2rem ${fontFamily}`;
      ctx.fillStyle = snakeColor;
      ctx.fillText("Game Over", WIDTH / 2 - 80, HEIGHT / 2);
    }
  }, [snake, food, dead, themeVersion]);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        background: "var(--background)",
        display: "block",
        margin: "0 auto",
        border: `2px solid ${getComputedStyle(
          document.documentElement
        ).getPropertyValue("--card-filtro") || "#A61717"}`,
      }}
      tabIndex={0}
    />
  );
}