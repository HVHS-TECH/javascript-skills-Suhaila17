const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreLabel = document.getElementById('scoreLabel');
const hudScore = document.getElementById('hudScore');
const bestLabel = document.getElementById('bestLabel');
const messages = document.getElementById('messages');
const hudMessage = document.getElementById('hudMessage');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const overlayButton = document.getElementById('overlayButton');
const resetButton = document.getElementById('resetButton');
const hudResetButton = document.getElementById('hudResetButton');
const bestScoreText = document.getElementById('bestScoreText');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const GRAVITY = 0.28;
const FLAP_STRENGTH = -6;
const PIPE_SPEED = 1.8;
const PIPE_GAP = 260;
const PIPE_WIDTH = 80;
const PIPE_DISTANCE = 180;

let bird;
let pipes;
let score;
let bestScore = 0;
let playing = false;
let gameState = 'ready';
let frameCount;

function resetGame() {
  bird = {
    x: WIDTH * 0.25,
    y: HEIGHT / 2,
    radius: 11,
    velocity: 0,
    rotation: 0,
  };

  pipes = [];
  score = 0;
  frameCount = 0;
  playing = false;
  setOverlay('ready');
}

function spawnPipe() {
  const minPipeHeight = 80;
  const maxPipeHeight = HEIGHT - PIPE_GAP - minPipeHeight;
  const topHeight = Math.floor(Math.random() * (maxPipeHeight - minPipeHeight + 1)) + minPipeHeight;
  pipes.push({
    x: WIDTH,
    top: topHeight,
    bottom: topHeight + PIPE_GAP,
    passed: false,
  });
}

function updateScore() {
  scoreLabel.textContent = `Score: ${score}`;
  hudScore.textContent = `Score: ${score}`;
  bestLabel.textContent = `High Score: ${bestScore}`;
  updateMessages();
}

function setOverlay(state) {
  gameState = state;
  overlay.style.display = 'flex';
  overlayTitle.textContent = state === 'gameOver' ? 'Game Over' : 'Flappy Bird';
  overlayText.textContent = state === 'gameOver'
    ? `You scored ${score} points. Press Start to play again.`
    : 'Press Space, Click, or Tap to start.';
  overlayButton.textContent = state === 'gameOver' ? 'Play Again' : 'Start';
  bestScoreText.textContent = `Best: ${bestScore}`;
  updateScore();
}

function updateMessages() {
  if (gameState === 'playing') {
    if (score >= 20) {
      messages.textContent = 'Unstoppable! Keep flying!';
      hudMessage.textContent = 'You are on fire — fly through with confidence!';
    } else if (score >= 10) {
      messages.textContent = 'Great job — you’re doing awesome!';
      hudMessage.textContent = 'Keep the rhythm and keep going!';
    } else if (score >= 5) {
      messages.textContent = 'Nice work, keep the rhythm!';
      hudMessage.textContent = 'Stay calm and keep your pace!';
    } else {
      messages.textContent = 'Focus on the gap and keep flapping!';
      hudMessage.textContent = 'Watch the gap and float steady!';
    }
  } else if (gameState === 'ready') {
    messages.textContent = 'Ready? Press Space, Click, or Tap to start.';
    hudMessage.textContent = 'Press Start to begin — you’ve got this!';
  } else if (gameState === 'gameOver') {
    messages.textContent = 'Game Over — press Start to try again.';
    hudMessage.textContent = 'Game over. Breathe and try again!';
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  if (score >= 20) {
    gradient.addColorStop(0, '#1d3358');
    gradient.addColorStop(1, '#0b1c3c');
  } else if (score >= 10) {
    gradient.addColorStop(0, '#ffb347');
    gradient.addColorStop(1, '#ff7f50');
  } else {
    gradient.addColorStop(0, '#a9e0ff');
    gradient.addColorStop(1, '#64b5ff');
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawBird() {
  ctx.save();
  ctx.translate(bird.x, bird.y);
  ctx.rotate(bird.rotation);
  ctx.fillStyle = '#ffe066';
  ctx.beginPath();
  ctx.ellipse(0, 0, bird.radius, bird.radius * 0.9, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#e68a00';
  ctx.beginPath();
  ctx.moveTo(bird.radius - 4, 0);
  ctx.lineTo(bird.radius + 14, -7);
  ctx.lineTo(bird.radius + 8, 2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#1f1f1f';
  ctx.beginPath();
  ctx.arc(-4, -5, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPipes() {
  ctx.fillStyle = '#3c9d25';
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, PIPE_WIDTH, HEIGHT - pipe.bottom);

    ctx.fillStyle = '#37a82a';
    ctx.fillRect(pipe.x + 20, pipe.top - 10, PIPE_WIDTH - 40, 12);
    ctx.fillRect(pipe.x + 20, pipe.bottom - 2, PIPE_WIDTH - 40, 12);
    ctx.fillStyle = '#3c9d25';
  });
}

function drawGround() {
  ctx.fillStyle = '#8c6239';
  ctx.fillRect(0, HEIGHT - 40, WIDTH, 40);
  ctx.fillStyle = '#b07d4f';
  ctx.fillRect(0, HEIGHT - 46, WIDTH, 6);
}

function checkCollision() {
  if (bird.y + bird.radius >= HEIGHT - 40 || bird.y - bird.radius <= 0) {
    return true;
  }
  for (const pipe of pipes) {
    const withinX = bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + PIPE_WIDTH;
    if (withinX && (bird.y - bird.radius < pipe.top || bird.y + bird.radius > pipe.bottom)) {
      return true;
    }
  }
  return false;
}

function update() {
  if (!playing) {
    draw();
    requestAnimationFrame(update);
    return;
  }

  bird.velocity += GRAVITY;
  bird.y += bird.velocity;
  bird.rotation = clamp((bird.velocity / 20) * 0.75, -0.5, 0.8);

  if (pipes.length === 0 || pipes[pipes.length - 1].x < WIDTH - PIPE_DISTANCE) {
    spawnPipe();
  }

  pipes.forEach(pipe => {
    pipe.x -= PIPE_SPEED;
    if (!pipe.passed && bird.x > pipe.x + PIPE_WIDTH) {
      pipe.passed = true;
      score += 1;
      updateScore();
    }
  });

  pipes = pipes.filter(pipe => pipe.x + PIPE_WIDTH > -20);

  if (checkCollision()) {
    playing = false;
    if (score > bestScore) {
      bestScore = score;
    }
    setOverlay('gameOver');
  }

  draw();
  requestAnimationFrame(update);
}

function draw() {
  drawBackground();
  drawPipes();
  drawGround();
  drawBird();
}

function startGame() {
  if (!playing) {
    if (pipes.length === 0) {
      spawnPipe();
      spawnPipe();
    }
    overlay.style.display = 'none';
    gameState = 'playing';
    playing = true;
    updateMessages();
  }
}

function flap() {
  if (!playing) {
    startGame();
  }
  bird.velocity = FLAP_STRENGTH;
}

window.addEventListener('keydown', event => {
  if (event.code === 'Space' || event.key === ' ') {
    event.preventDefault();
    if (!playing) {
      if (gameState === 'gameOver') {
        resetGame();
      }
      startGame();
    }
    flap();
  }
  if (event.code === 'Enter' && gameState === 'gameOver') {
    resetGame();
    startGame();
  }
});

window.addEventListener('pointerdown', event => {
  if (!playing) {
    if (gameState === 'gameOver') {
      resetGame();
    }
    startGame();
  }
  flap();
});

overlayButton.addEventListener('click', () => {
  if (gameState === 'gameOver') {
    resetGame();
  }
  startGame();
});

resetButton.addEventListener('click', event => {
  event.stopPropagation();
  resetGame();
});

hudResetButton.addEventListener('click', event => {
  event.stopPropagation();
  resetGame();
});

canvas.addEventListener('pointerdown', event => {
  event.preventDefault();
});

resetGame();
requestAnimationFrame(update);
