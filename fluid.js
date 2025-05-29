
'use strict';

const canvas = document.querySelector('canvas');
resizeCanvas();

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
    const ctx = canvas.getContext('2d');
    const radius = 50;
    const gradient = ctx.createRadialGradient(e.clientX, e.clientY, 0, e.clientX, e.clientY, radius);
    const color = Math.random() > 0.5 ? 'rgba(128,255,128,0.2)' : 'rgba(128,0,255,0.2)';
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(e.clientX - radius, e.clientY - radius, radius * 2, radius * 2);
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
