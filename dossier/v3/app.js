const names=['Welcome','In common','Why Rho','Backers','Sign'];
const track=document.getElementById('track'),dotsEl=document.getElementById('dots'),prev=document.getElementById('prev'),next=document.getElementById('next'),slides=[...document.querySelectorAll('.slide')];
let i=0;const seen=new Set([0]);
names.forEach((n,k)=>{if(k){const b=document.createElement('div');b.className='bar';dotsEl.appendChild(b)}const d=document.createElement('div');d.className='dot';d.innerHTML='<b>'+(k+1)+'</b><span>'+n+'</span>';d.onclick=()=>{if(k===4&&!readAll())return;go(k)};dotsEl.appendChild(d)});
const dots=[...dotsEl.querySelectorAll('.dot')];
function readAll(){return [0,1,2,3].every(k=>seen.has(k))}
function go(k){i=Math.max(0,Math.min(4,k));seen.add(i);track.style.transform='translateX(-'+(i*100)+'%)';render()}
function render(){slides.forEach((s,k)=>s.classList.toggle('on',k===i));
 dots.forEach((d,k)=>{d.classList.toggle('on',k===i);d.classList.toggle('seen',seen.has(k)&&k!==i);d.classList.toggle('locked',k===4&&!readAll())});
 prev.disabled=i===0;next.style.visibility=i===4?'hidden':'visible';next.textContent=i===3?'Sign →':'Next →';
 document.getElementById('lockmsg').style.display=readAll()?'none':'block';if(i===4)setTimeout(sizeCv,50);upd()}
prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(i+1);if(e.key==='ArrowLeft')go(i-1)});
let sx=null;track.addEventListener('touchstart',e=>{if(e.target.closest('#pad'))return;sx=e.touches[0].clientX},{passive:true});track.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(i+(dx<0?1:-1));sx=null});

/* quill signature: broad-edge nib, width varies with stroke angle, speed and pen pressure */
const pad=document.getElementById('pad'),cv=document.getElementById('cv'),cx=cv.getContext('2d'),quill=document.getElementById('quill'),hint=document.getElementById('hint');
let drawing=false,last=null,lastW=2.2,inkLen=0,locked=false;
function sizeCv(){const r=cv.getBoundingClientRect(),dpr=window.devicePixelRatio||1;if(!r.width||cv.width===Math.round(r.width*dpr))return;cv.width=Math.round(r.width*dpr);cv.height=Math.round(r.height*dpr);cx.setTransform(dpr,0,0,dpr,0,0);inkLen=0;hint.style.opacity=1}
window.addEventListener('resize',()=>{if(i===4)sizeCv()});
function pt(e){const r=cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top,t:performance.now()}}
function moveQuill(e){quill.style.left=e.clientX+'px';quill.style.top=e.clientY+'px'}
function blot(x,y,r,a){cx.fillStyle='rgba(22,24,50,'+a+')';cx.beginPath();cx.arc(x,y,r,0,7);cx.fill()}
pad.addEventListener('pointerenter',e=>{if(!locked&&e.pointerType!=='touch'){quill.style.opacity=1;moveQuill(e)}});
pad.addEventListener('pointerleave',()=>{quill.style.opacity=0;drawing=false});
pad.addEventListener('pointerdown',e=>{if(locked||!readAll())return;
 pad.setPointerCapture(e.pointerId);drawing=true;last=pt(e);lastW=2.4;hint.style.opacity=0;quill.style.opacity=1;moveQuill(e);blot(last.x,last.y,1.6,.9)});
pad.addEventListener('pointermove',e=>{if(!locked)moveQuill(e);if(!drawing)return;const p=pt(e),dx=p.x-last.x,dy=p.y-last.y,d=Math.hypot(dx,dy);if(d<0.8)return;
 const v=d/Math.max(1,p.t-last.t),pr=e.pressure&&e.pointerType==='pen'?e.pressure:0.5;
 const nib=Math.abs(Math.sin(Math.atan2(dy,dx)-Math.PI/4));
 let w=Math.max(0.7,Math.min(4.6,(1.1+3.2*nib)*(1.25-Math.min(v,2)*0.35)*(0.6+pr*0.8)));w=lastW*0.6+w*0.4;
 const steps=Math.ceil(d/1.2);for(let s=1;s<=steps;s++){const t=s/steps,x=last.x+dx*t,y=last.y+dy*t,ww=lastW+(w-lastW)*t;
  cx.fillStyle='rgba(22,24,50,'+(0.78+Math.random()*0.12)+')';cx.beginPath();cx.ellipse(x,y,ww*0.62,ww*0.32,-Math.PI/4,0,7);cx.fill()}
 inkLen+=d;lastW=w;last=p;upd()});
['pointerup','pointercancel'].forEach(ev=>pad.addEventListener(ev,()=>{if(drawing&&inkLen>4&&Math.random()<0.25)blot(last.x+1,last.y+1,lastW*0.9,.55);drawing=false}));
document.getElementById('clr').onclick=()=>{if(locked)return;cx.clearRect(0,0,cv.width,cv.height);inkLen=0;hint.style.opacity=1;upd()};
const gobtn=document.getElementById('go'),cks=[...document.querySelectorAll('.ck')];
document.getElementById('dt').textContent=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
function upd(){gobtn.disabled=locked||!(readAll()&&inkLen>120&&cks.every(c=>c.checked))}
cks.forEach(c=>c.addEventListener('change',upd));
gobtn.onclick=()=>{locked=true;quill.style.opacity=0;pad.style.cursor='default';document.getElementById('wax').classList.add('on');cks.forEach(c=>c.disabled=true);gobtn.style.display='none';
 setTimeout(()=>{document.getElementById('done').classList.add('on');document.getElementById('reward').innerHTML='<span class="ic">✓</span><span><span class="amt">$330</span> locked in. See you Monday.</span>';
 document.dispatchEvent(new CustomEvent('atrios:briefing-signed',{detail:{signature:cv.toDataURL('image/png')}}))},500)};
render();
