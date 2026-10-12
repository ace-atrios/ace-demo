// While scrolling, 1s and 0s flicker only on the images in view, then fade when you stop
(function(){
  const SEL='.frame,.hc,.shot,.card3 .img,.chairwrap';
  const hosts=[...document.querySelectorAll(SEL)];
  const layers=new Map();
  hosts.forEach(h=>{if(getComputedStyle(h).position==='static')h.style.position='relative';
    const d=document.createElement('div');
    d.style.cssText='position:absolute;inset:0;z-index:3;pointer-events:none;overflow:hidden;font:400 11px/12px "JetBrains Mono",monospace;color:rgba(226,200,143,.55);word-break:break-all;overflow-wrap:anywhere;padding:4px;opacity:0;transition:opacity .75s cubic-bezier(.2,.6,.3,1);mix-blend-mode:screen';
    h.appendChild(d);layers.set(h,d)});
  const fill=(h,d)=>{const n=Math.ceil(h.clientWidth/6.6)*Math.ceil(h.clientHeight/12);let t='';for(let i=0;i<n;i++)t+=Math.random()<.5?'0':'1';d.textContent=t};
  const vis=h=>{const r=h.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight};
  let to=null,last=0;
  addEventListener('scroll',()=>{const now=performance.now();const fresh=now-last>50;if(fresh)last=now;
    layers.forEach((d,h)=>{if(!vis(h))return;if(fresh)fill(h,d);d.style.transition='opacity .1s';d.style.opacity=.7});
    clearTimeout(to);to=setTimeout(()=>layers.forEach(d=>{d.style.transition='opacity .75s cubic-bezier(.2,.6,.3,1)';d.style.opacity=0}),250)},{passive:true});
})();
