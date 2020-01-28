/* eslint-disable no-undef */
const CANVAS_SIZE_256 = 256;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './data/image.png';

const draw = (arrayToDraw) => {
  canvas.width = arrayToDraw.length;
  canvas.height = arrayToDraw.length;

  for (let i = 0; i < arrayToDraw.length; i += 1) {
    for (let j = 0; j < arrayToDraw[0].length; j += 1) {
      if (typeof arrayToDraw[0][0] === 'string') {
        ctx.fillStyle = `#${arrayToDraw[i][j]}`;
      } else {
        ctx.fillStyle = `rgba(${arrayToDraw[i][j]})`;
      }

      ctx.fillRect(j, i, 1, 1);
    }
  }
};

draw(array4x4);

const drawImageOnCanvas = () => {
  canvas.width = CANVAS_SIZE_256;
  canvas.height = CANVAS_SIZE_256;
  ctx.drawImage(img, 0, 0, CANVAS_SIZE_256, CANVAS_SIZE_256);
};

const selectButton = (target) => {
  document.querySelectorAll('.menu_size--item').forEach((item) => item.classList.remove('selected'));
  target.classList.add('selected');
};

const mouseHandler = ({ target }) => {
  selectButton(target);
  if (target.id === 'size4x4') {
    draw(array4x4);
  }
  if (target.id === 'size32x32') {
    draw(array32x32);
  }
  if (target.id === 'size256x256') {
    drawImageOnCanvas();
  }
};

document.getElementById('menu_size').addEventListener('click', (event) => mouseHandler(event));
