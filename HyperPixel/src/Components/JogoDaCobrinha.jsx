import React, { useRef, useEffect, useState } from "react";

const CELL = 0.8 * 16; // tamanho visual de cada célula
const WIDTH = (41.4375 - 2) * 16;
const HEIGHT = (43.5 - 5.3) * 16;
const COLS = Math.floor(WIDTH / CELL);
const ROWS = Math.floor(HEIGHT / CELL);

const DIRS = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  w: [0, -1],
  s: [0, 1],
  a: [-1, 0],
  d: [1, 0],
};

function getRandomPos(snake = []) {
  let pos;
  do {
    pos = [Math.floor(Math.random() * COLS), Math.floor(Math.random() * ROWS)];
  } while (snake.some(([x, y]) => x === pos[0] && y === pos[1]));
  return pos;
}

export default function JogoDaCobrinha() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([[5, 5]]);
  const [dir, setDir] = useState([1, 0]);
  const [food, setFood] = useState(() => getRandomPos([[5, 5]]));
  const [dead, setDead] = useState(false);
  const [themeVersion, setThemeVersion] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => setThemeVersion((v) => v + 1));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (DIRS[key]) {
        const [dx, dy] = DIRS[key];
        if (!(dx === -dir[0] && dy === -dir[1])) {
          setDir([dx, dy]);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir]);

  useEffect(() => {
    if (dead) return;
    const tick = 100;
    const id = setInterval(() => {
      setSnake((prev) => {
        let head = [prev[0][0] + dir[0], prev[0][1] + dir[1]];

        // teletransporte estilo Pac-Man
        if (head[0] < 0) head[0] = COLS - 1;
        else if (head[0] >= COLS) head[0] = 0;
        if (head[1] < 0) head[1] = ROWS - 1;
        else if (head[1] >= ROWS) head[1] = 0;

        // colisão consigo mesmo
        if (prev.some(([x, y]) => x === head[0] && y === head[1])) {
          setDead(true);
          return prev;
        }

        // comeu a comida
        if (head[0] === food[0] && head[1] === food[1]) {
          const newSnake = [head, ...prev];
          setFood(getRandomPos(newSnake));
          return newSnake;
        }

        // movimento normal
        return [head, ...prev.slice(0, -1)];
      });
    }, tick);
    return () => clearInterval(id);
  }, [dir, food, dead]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    const snakeColor =
      getComputedStyle(document.documentElement).getPropertyValue("--Cobra") ||
      "#222";
    const foodColor =
      getComputedStyle(document.documentElement).getPropertyValue("--Comida") ||
      "#A61717";
    const borderColor =
      getComputedStyle(document.documentElement).getPropertyValue("--background") ||
      "#A61717";
    const fontFamily =
      getComputedStyle(document.documentElement).getPropertyValue("--fonte-p") ||
      "sans-serif";

    ctx.fillStyle = dead ? borderColor : snakeColor;
    snake.forEach(([x, y]) =>
      ctx.fillRect(x * CELL, y * CELL, CELL, CELL)
    );

    ctx.fillStyle = foodColor;
    ctx.fillRect(food[0] * CELL, food[1] * CELL, CELL, CELL);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, WIDTH - 1, HEIGHT - 1);

    if (dead) {
      ctx.font = `2rem ${fontFamily}`;
      ctx.fillStyle = snakeColor;
      ctx.textAlign = "center";
      ctx.fillText("Game Over", WIDTH / 2, HEIGHT / 2);
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
        border: `10px solid var(--background)`,
      }}
      tabIndex={0}
    />
  );
}
