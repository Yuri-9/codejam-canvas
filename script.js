
let width = array32x32[0].length;
let height = array32x32.length;
scale = 128;
draw4x4();

function draw4x4() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < array4x4.length; i++) {
    for (let j = 0; j < array4x4[0].length; j++) {
      ctx.fillStyle = '#' + array4x4[i][j];
      ctx.fillRect(j * 128, i * 128, 128, 128);
    }
  }
};

function draw32x32() {  
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');  
  for (let i = 0; i < array32x32.length; i++) {
    for (let j = 0; j < array32x32[0].length; j++) {
      ctx.fillStyle = ('rgba(' + array32x32[i][j] + ')'); 
      ctx.fillRect(j * 16, i * 16, 16, 16);
    }
  }
  };

 function draw256x256() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  var img = document.getElementById("img");
  ctx.drawImage(img, 0, 0, 512, 512);
}
document.getElementById('size4x4').addEventListener('click', draw4x4);
document.getElementById('size32x32').addEventListener('click', draw32x32);
document.getElementById('size256x256').addEventListener('click', draw256x256);