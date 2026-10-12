// Fixed background of 1s and 0s that shows while scrolling, fades when you stop
(function(){
  const d=document.createElement('div');
  d.id='bgbin';
  d.style.cssText='position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;font:400 12px/14px "JetBrains Mono",monospace;color:rgba(190,150,80,.22);word-break:break-all;overflow-wrap:anywhere;padding:4px;opacity:0;transition:opacity .75s cubic-bezier(.2,.6,.3,1)';
  document.body.appendChild(d);
  const fill=()=>{const n=Math.ceil(innerWidth/7.2)*Math.ceil(innerHeight/14);let t='';for(let i=0;i<n;i++)t+=Math.random()<.5?'0':'1';d.textContent=t};
  let to=null,last=0;
  addEventListener('scroll',()=>{const now=performance.now();if(now-last>50){fill();last=now}d.style.transition='opacity .1s';d.style.opacity=1;clearTimeout(to);to=setTimeout(()=>{d.style.transition='opacity .75s cubic-bezier(.2,.6,.3,1)';d.style.opacity=0},250)},{passive:true});
  fill();
})();
