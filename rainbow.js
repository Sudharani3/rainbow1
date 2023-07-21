const button=document.querySelector("button");
const body=document.querySelector("body");
const colors=['violet','indogo','blue','green','yellow','red'];
body.style.backgroundColor='pink';
document.addEventListener('click',function()
{
  const colorIndex=parseInt(Math.random()*colors.length);
//   document.write(colorIndex);
  body.style.background=colors[colorIndex];
});