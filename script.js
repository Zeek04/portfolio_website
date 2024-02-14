const canvas = document.createElement("canvas");
document.querySelector(".background-container").appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const codeLines = [];

class CodeLine {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = Math.random() * 20 + 5;
    this.speed = Math.random() * 1 + 1;
    this.code = generateRandomCode();
  }

  update() {
    this.y += this.speed;

    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
      this.code = generateRandomCode();
    }
  }

  draw() {
    ctx.font = "12px monospace";
    ctx.fillStyle = "green";
    ctx.fillText(this.code, this.x, this.y);
  }
}

function generateRandomCode() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,.<>?/";
  const codeLength = Math.floor(Math.random() * 20) + 5;
  let code = '';

  for (let i = 0; i < codeLength; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
}

function createCodeLines() {
  for (let i = 0; i < 30; i++) {
    codeLines.push(new CodeLine());
  }
}

function animateCodeLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < codeLines.length; i++) {
    codeLines[i].update();
    codeLines[i].draw();
  }

  requestAnimationFrame(animateCodeLines);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createCodeLines();
});

createCodeLines();
animateCodeLines();