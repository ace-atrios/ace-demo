(()=>{document.querySelectorAll('.atr-sig').forEach(el=>{
  const num=el.querySelector('.sg-num'),cap=el.querySelector('.sg-cap');
  let v=+el.dataset.start||110524;const rate=+el.dataset.rate||3;let shown=v,last=performance.now();
  const caps=["Reading founder and operator community groups","Spotting fresh raises and new hires on LinkedIn","Catching launches on Product Hunt","Listening to Reddit, X and Slack threads"];
  let ci=0;cap.textContent=caps[0];
  setInterval(()=>{cap.classList.add('out');setTimeout(()=>{ci=(ci+1)%caps.length;cap.textContent=caps[ci];cap.classList.remove('out')},700)},3800);
  (function tick(t){const dt=Math.min(.1,(t-last)/1000);last=t;v+=rate*dt*(0.6+Math.random()*0.8);shown+=(v-shown)*Math.min(1,dt*4);num.textContent=Math.floor(shown).toLocaleString('en-US');requestAnimationFrame(tick)})(last);
})})();
