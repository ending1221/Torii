const $outer = document.querySelector('.card');
const bodyWidth = document.body.clientWidth;
let scale = 1;

if (bodyWidth < 550) scale = 0.9;
if (bodyWidth < 500) scale = 0.7;
if (bodyWidth < 400) scale = 0.6;

$outer.style.transform = 'scale('+scale+')';