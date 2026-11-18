(()=>{const N=%N%;
const T=16;// loop seconds
// cherub waypoints [t, x, y] in plate fractions (cherub center), smooth Catmull-Rom
const WP=[[0,.10,.86],[1.6,.30,.40],[2.6,.34,.20],[3.6,.50,.17],[4.6,.66,.20],[6.0,.82,.42],[7.0,.84,.56],[8.2,.66,.66],[9.2,.40,.72],[10.0,.22,.66],[10.8,.22,.48],[11.6,.27,.30],[12.6,.50,.80],[13.6,.75,.70],[14.6,.80,.52],[16,.10,.86]];
// node glow windows [key,start,peak-hold-end]
const G=[['fo',2.2,3.4],['vc',3.3,4.5],['op',4.3,5.6],['sl',6.6,8.0],['x',9.2,10.6],['rd',9.8,11.2],['li',10.4,11.8],['ph',11.0,12.4],['wa',13.8,14.8],['sl',13.9,14.9]];
const CAPS=[[0,""],[2.2,"Talking to founders, VC's and Operators"],[6.4,"Scanning millions of posts"],[12.8,"Reading founder and operator community groups"]];
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function cr(p0,p1,p2,p3,t){const t2=t*t,t3=t2*t;return .5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3)}
function pos(t){let i=0;while(i<WP.length-2&&WP[i+1][0]<=t)i++;const a=WP[Math.max(0,i-1)],b=WP[i],c=WP[i+1],d=WP[Math.min(WP.length-1,i+2)];const u=ease((t-b[0])/(c[0]-b[0]));return[cr(a[1],b[1],c[1],d[1],u),cr(a[2],b[2],c[2],d[2],u)]}
document.querySelectorAll('.atr-sp').forEach(el=>{
 const st=el.querySelector('.sp-stage'),ch=el.querySelector('.sp-cherub'),num=el.querySelector('.sp-num'),cap=el.querySelector('.sp-cap span'),core=el.querySelector('.sp-core');
 const glow={},thr={};el.querySelectorAll('.sp-glow').forEach(g=>glow[g.dataset.k]=g);el.querySelectorAll('.sp-thread').forEach(p=>thr[p.dataset.k]=p);
 let capIdx=-1,t0=performance.now(),lastX=0,face=1;
 function frame(now){const t=((now-t0)/1000)%T;const w=st.clientWidth,h=st.clientHeight;
  // cherub
  const [x,y]=pos(t),[x2]=pos((t+.08)%T);const dir=x2>=x?1:-1;face+=(dir-face)*.08;
  const bob=Math.sin(now/380)*.008,rot=Math.sin(now/520)*3;const cw=ch.offsetWidth,chh=ch.offsetHeight;
  ch.style.transform=`translate(${x*w-cw/2}px,${(y+bob)*h-chh/2}px) rotate(${rot}deg) scaleX(${face<0?-1:1})`;
  // node glows + threads
  const lit={};G.forEach(([k,a,b])=>{let v=0;if(t>=a-.5&&t<=b+.8){v=t<a?(t-(a-.5))/.5:t<=b?1:1-(t-b)/.8}lit[k]=Math.max(lit[k]||0,Math.max(0,Math.min(1,v)))});
  const fin=t>=14.4?Math.min(1,(t-14.4)/.7)*(t>15.5?Math.max(0,1-(t-15.5)/.5):1):0;
  for(const k in glow){const v=Math.max(lit[k]||0,fin*.9);glow[k].style.opacity=v;glow[k].style.transform=`translate(-50%,-50%) scale(${.85+.25*v+.04*Math.sin(now/300)})`;
   const p=thr[k];const draw=Math.max(lit[k]||0,fin);p.style.opacity=Math.min(1,draw*1.4)*.9;p.style.strokeDashoffset=1-ease(Math.min(1,draw))}
  core.style.opacity=fin;core.style.transform=`scale(${.8+.3*fin})`;
  // counter 52,262 -> 110,524 eased over the loop
  const c=52262+(110524-52262)*ease(Math.min(1,t/14.6));num.textContent=Math.floor(c).toLocaleString('en-US');
  // caption
  let ci=0;CAPS.forEach((c,i)=>{if(t>=c[0])ci=i});
  if(ci!==capIdx){capIdx=ci;cap.classList.add('out');setTimeout(()=>{cap.textContent=CAPS[ci][1];cap.classList.remove('out')},capIdx===0?0:350)}
  requestAnimationFrame(frame)}
 requestAnimationFrame(frame)})})();
