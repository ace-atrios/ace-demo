(()=>{const N=%N%;
const T=16;const NB=[.8335,.47];
const WP=[[0,.14,.80],[1.6,.30,.40],[2.6,.36,.26],[3.6,.50,.24],[4.6,.64,.27],[6.0,.78,.44],[7.0,.80,.56],[8.2,.64,.64],[9.2,.40,.70],[10.0,.26,.64],[10.8,.26,.48],[11.6,.30,.34],[12.8,.50,.62],[13.6,.70,.56],[14.3,.50,.60],[15.6,.48,.62],[16,.14,.80]];
const G=[['fo',2.2,3.4],['vc',3.3,4.5],['op',4.3,5.6],['sl',6.6,8.0],['x',9.2,10.6],['rd',9.8,11.2],['li',10.4,11.8],['ph',11.0,12.4],['wa',13.0,13.9],['sl',13.2,14.0]];
const CAPS=[[0,"Talking to founders, VC's and Operators"],[6.2,"Scanning millions of posts"],[12.8,"Reading founder and operator community groups"],[14.4,"Writing down every signal for you"]];
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function cr(p0,p1,p2,p3,t){const t2=t*t,t3=t2*t;return .5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3)}
function pos(t){let i=0;while(i<WP.length-2&&WP[i+1][0]<=t)i++;const a=WP[Math.max(0,i-1)],b=WP[i],c=WP[i+1],d=WP[Math.min(WP.length-1,i+2)];const u=ease((t-b[0])/(c[0]-b[0]));return[cr(a[1],b[1],c[1],d[1],u),cr(a[2],b[2],c[2],d[2],u)]}
document.querySelectorAll('.atr-sp').forEach(el=>{
 const st=el.querySelector('.sp-stage'),ch=el.querySelector('.sp-cherub'),ink=el.querySelector('.sp-ink'),num=el.querySelector('.sp-num'),cap=el.querySelector('.sp-cap span'),core=el.querySelector('.sp-core');
 const glow={},thr={};el.querySelectorAll('.sp-glow').forEach(g=>glow[g.dataset.k]=g);el.querySelectorAll('.sp-thread').forEach(p=>thr[p.dataset.k]=p);
 let capIdx=-1,t0=performance.now(),face=1,fs=1;cap.textContent=CAPS[0][1];
 function frame(now){const t=((now-t0)/1000)%T;const w=st.clientWidth,h=st.clientHeight;
  const [x,y]=pos(t),[x2]=pos((t+.12)%T);if(Math.abs(x2-x)>.002)face=x2>x?1:-1;fs+=(face-fs)*.15;
  const bob=Math.sin(now/380)*.006;const cw=ch.offsetWidth,chh=ch.offsetHeight;
  const scrib=Math.sin(now/90)*.7+Math.sin(now/57)*.4;
  const tx=x*w-cw/2,ty=(y+bob)*h-chh/2;
  ch.style.transform=`translate(${tx}px,${ty}px) rotate(${scrib}deg) scaleX(${fs})`;
  const nfx=.5+(NB[0]-.5)*fs;const nbx=(tx+nfx*cw)/w*1536,nby=(ty+NB[1]*chh)/h*1152;
  const iw=ink.offsetWidth;ink.style.transform=`translate(${(nbx/1536)*w-iw/2+Math.sin(now/70)*2}px,${(nby/1152)*h-iw/2+Math.cos(now/83)*2}px)`;
  const lit={};G.forEach(([k,a,b])=>{let v=0;if(t>=a-.5&&t<=b+.8){v=t<a?(t-(a-.5))/.5:t<=b?1:1-(t-b)/.8}lit[k]=Math.max(lit[k]||0,Math.max(0,Math.min(1,v)))});
  const fin=t>=14.2?Math.min(1,(t-14.2)/.6)*(t>15.5?Math.max(0,1-(t-15.5)/.5):1):0;
  let any=0;
  for(const k in glow){const v=Math.max(lit[k]||0,fin);any=Math.max(any,v);glow[k].style.opacity=v;glow[k].style.transform=`translate(-50%,-50%) scale(${.85+.25*v+.04*Math.sin(now/300)})`;
   const px=N[k][0]*1536,py=N[k][1]*1152;const p=thr[k];
   if(v>0.01){const r=ease(Math.min(1,v*1.3));const ex=px+(nbx-px)*r,ey=py+(nby-py)*r;const mx=(px+ex)/2,my=(py+ey)/2-80;
     p.setAttribute('d',`M${px},${py} Q${mx},${my} ${ex},${ey}`);p.style.opacity=Math.min(1,v*1.4)*.9}else{p.style.opacity=0}}
  ink.style.opacity=Math.min(1,any*1.2);
  core.setAttribute('cx',nbx);core.setAttribute('cy',nby);core.setAttribute('r',60+70*fin);core.style.opacity=fin;
  const c=52262+(110524-52262)*ease(Math.min(1,t/14.6));num.textContent=Math.floor(c).toLocaleString('en-US');
  let ci=0;CAPS.forEach((c,i)=>{if(t>=c[0])ci=i});
  if(ci!==capIdx){const first=capIdx<0;capIdx=ci;if(first){cap.textContent=CAPS[ci][1]}else{cap.classList.add('out');setTimeout(()=>{cap.textContent=CAPS[ci][1];cap.classList.remove('out')},350)}}
  requestAnimationFrame(frame)}
 requestAnimationFrame(frame)})})();
