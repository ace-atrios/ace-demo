window.SCRIPT=[
 {w:'Taylor',c:'me',t:"My friend Maya just raised a round of funding, can you send the best perks for Brex for banking and Deel for HR software?",d:400,step:0},
 {w:'Ace',c:'ace',typing:1600,t:"Maya, great to meet you, thanks for the intro Taylor! Congrats on the round. Here's what you'd get:",step:1},
 {w:'Ace',c:'ace',typing:2200,h:"<b>1. Brex</b>: cards, banking and spend controls, set up before the team grows.\nPerk: <b>up to $15k in founder perks</b>\n\n<b>2. Deel</b>: payroll, HR and global hiring in one place as you start hiring.\nPerk: <b>3 months free</b>",step:3},
 {w:'Ace',c:'ace',typing:900,t:"Send me a few times that work, or I can drop booking links!"},
 {w:'Maya',c:'them',typing:1400,t:"Both! Tue after 2pm works for Brex, Deel anytime Wed"},
 {w:'Ace',c:'ace',typing:1500,h:"Done. <b>Brex Tue 2:00 PM ET</b> and <b>Deel Wed 11:00 AM ET</b>. Invites are in your inbox.<div class='card'><div class='t'>Confirmed</div>Brex × Lumen · Tue 2:00-2:30 PM ET<br>Deel × Lumen · Wed 11:00-11:30 AM ET</div>",step:4},
 {w:'Taylor',c:'me',typing:800,t:"🙌 that was fast"}
];
window.SCORES=[['Brex',94,'$500k+ raised, founder/CEO, fresh round, no corporate card yet'],['Deel',88,'3+ employees, hiring now'],['Rho',86,'$500k+ raised, US-based, new bank wanted'],['Superposition',80,'Actively hiring engineers in the US'],['Corridor',55,'5+ US W-2s, renewal date unknown'],['Veroa',40,'No offshore hiring signal yet'],['Finaloop',4,'Shopify-only, not a fit'],['WithCoverage',3,'Requires $20M+ revenue']];


const S=window.SCRIPT||[
 {w:'Taylor',c:'me',t:"Ace, meet my friend Maya Chen. She's CEO of Lumen (seed AI infra, NYC). Can you share the perks that make sense for her?",d:400,step:0},
 {w:'Ace',c:'ace',typing:1600,t:"Maya, great to meet you, thanks for the intro Taylor! A few that fit Lumen right now:",step:1},
 {w:'Ace',c:'ace',typing:2200,h:"<b>1. Rho</b>: startup banking with treasury yield on your seed.\nPerk: <b>$875 welcome bonus</b>\n\n<b>2. Superposition</b>: AI headhunter for those 2 open eng reqs.\nPerk: <b>1 month free + 20% off + $1,050 bonus</b>\n\n<b>3. Secure Cloud</b>: SOC 2 before your enterprise pilots ask twice.\nPerk: <b>10% off yr 1 + $825 bonus</b>",step:3},
 {w:'Ace',c:'ace',typing:900,t:"Send me a few times that work, or I can drop booking links!"},
 {w:'Maya',c:'them',typing:1400,t:"Rho for sure. Tue after 2pm or Wed morning works"},
 {w:'Ace',c:'ace',typing:1500,h:"Done. You're booked with Rho <b>Tue 2:00 PM ET</b>. Invite's in your inbox.<div class='card'><div class='t'>Confirmed</div>Rho × Lumen · Tue 2:00-2:30 PM ET<br>$875 welcome bonus applies when you open your account</div>",step:4},
 {w:'Taylor',c:'me',typing:800,t:"🙌 that was fast"}
];
const chat=document.getElementById('chat');let timer=[];
function stepOn(n){document.querySelectorAll('.step').forEach(s=>s.classList.toggle('on',+s.dataset.s<=n))}
function bubble(m){
  if(m.w!=='Taylor'){const w=document.createElement('div');w.className='who';w.textContent=m.w;chat.appendChild(w)}
  const b=document.createElement('div');b.className='msg '+m.c;if(m.h)b.innerHTML=m.h;else b.textContent=m.t;chat.appendChild(b);chat.scrollTop=chat.scrollHeight}
let looping=false,deckT=[];
const btns=[...document.querySelectorAll('[onclick="play()"]')];btns.forEach(x=>x.dataset.label=x.innerHTML);
function setBtn(on){btns.forEach(x=>x.innerHTML=on?'❚❚ Pause':x.dataset.label)}
function run(done){
  timer.forEach(clearTimeout);timer=[];chat.innerHTML='';stepOn(0);
  const F=.13;let t=100;
  S.forEach((m,i)=>{
    if(m.typing){const ti=t;timer.push(setTimeout(()=>{const d=document.createElement('div');d.className='msg '+m.c+' typing';d.id='ty';d.innerHTML='<i></i><i></i><i></i>';chat.appendChild(d);chat.scrollTop=chat.scrollHeight;if(m.c==='ace'&&i===1){stepOn(1);setTimeout(()=>stepOn(2),120)}},ti));t+=m.typing*F}
    const tt=t;timer.push(setTimeout(()=>{const y=document.getElementById('ty');if(y)y.remove();bubble(m);if(m.step)stepOn(m.step)},tt));
    t+=((m.d||700)+ (m.h?900:0))*F;
  });
  timer.push(setTimeout(()=>stepOn(5),t+150));
  if(done)timer.push(setTimeout(done,t+800));
}
const wrap=document.querySelector('.wrap');
let slides=[...wrap.children].filter(e=>e.matches('.hero,section')).map((e,k)=>{const s=document.createElement('div');s.className='slide';s.dataset.o=e.dataset.slide||(k+1);e.replaceWith(s);s.appendChild(e);return s});
slides=slides.slice().sort((x,y)=>x.dataset.o-y.dataset.o);
const ctl=document.createElement('div');ctl.className='deckctl';ctl.innerHTML='<div class="dots">'+slides.map(()=>'<i></i>').join('')+'</div><button onclick="play()">❚❚ Pause</button>';document.body.appendChild(ctl);
function fit(s){const el=s.firstElementChild;el.style.transform='';const h=el.scrollHeight,avail=window.innerHeight-120;const k=Math.min(1,avail/h);el.style.transform=k<1?`scale(${k})`:''}
function show(i){slides.forEach((s,k)=>s.classList.toggle('on',k===i));ctl.querySelectorAll('.dots i').forEach((d,k)=>d.classList.toggle('on',k===i));fit(slides[i]);ctl.querySelector('button').style.visibility=slides[i].querySelector('[onclick="play()"]')?'hidden':'visible'}
function deck(i){
  if(!looping)return;
  show(i);
  const nx=(i+1)%slides.length;
  if(slides[i].querySelector('#chat'))run(()=>{if(looping)deck(nx)});
  else deckT.push(setTimeout(()=>deck(nx),slides[i].querySelector('.qrbox')?9000:7000));
}
function play(){
  if(looping){looping=false;timer.forEach(clearTimeout);timer=[];deckT.forEach(clearTimeout);deckT=[];const y=document.getElementById('ty');if(y)y.remove();
    document.body.classList.remove('deck');slides.forEach(s=>{s.classList.remove('on');s.firstElementChild.style.transform=''});setBtn(false);window.scrollTo(0,0);return}
  looping=true;setBtn(true);window.scrollTo(0,0);document.body.classList.add('deck');deck(0);
}
window.addEventListener('resize',()=>{const s=slides.find(x=>x.classList.contains('on'));if(s)fit(s)});
const V=window.SCORES||[['Rho',92,'$500k+ raised, US-based, fresh seed in a legacy bank'],['Superposition',90,'Actively hiring engineers in the US'],['Secure Cloud Innovations',84,'10+ team, enterprise pilots will require SOC 2'],['Veroa',70,'$1M+ raised, but no ops/SDR hiring signal yet'],['Corridor',55,'5+ US W-2s, renewal date unknown'],['Deel',30,'No international hires'],['Finaloop',4,'Shopify-only, not a fit'],['WithCoverage',3,'Requires $20M+ revenue']];
const sc=document.getElementById('score');
if(sc)V.forEach(([n,s,w])=>{sc.insertAdjacentHTML('beforeend',`<div><b>${n}</b></div><div>${s}<div class="bar"><i style="width:${s}%"></i></div></div><div style="color:#c4d1cb">${w}</div>`)});
if(document.body.classList.contains('vp')){paged()}else{setTimeout(()=>{if(!looping)run()},900)}

function paged(){
  document.body.classList.add('paged');
  const track=document.createElement('div');track.className='track';document.body.appendChild(track);
  slides.forEach(s=>track.appendChild(s));
  track.style.width=(slides.length*100)+'vw';
  const bar=document.createElement('div');bar.className='pbar';
  bar.innerHTML=slides.map((s,k)=>`<button data-k="${k}">Page ${k+1}</button>`).join('')+'<button class="ap"></button>';
  document.body.appendChild(bar);
  ctl.remove();
  const pb=[...bar.querySelectorAll('[data-k]')],ap=bar.querySelector('.ap');
  let cur=0,auto=true,pt=[];
  const clr=()=>{pt.forEach(clearTimeout);pt=[]};
  function fitP(s){const el=s.firstElementChild;el.style.transform='';const k=Math.min(1,(s.clientHeight-20)/el.scrollHeight);if(k<1)el.style.transform=`scale(${k})`}
  function go(i){
    clr();cur=i;track.style.transform=`translateX(${-i*100}vw)`;
    pb.forEach((b,k)=>b.classList.toggle('on',k===i));fitP(slides[i]);const sc=slides[i].querySelector('#sigc');if(sc){let n=0;const T=4812,st=performance.now();const tick=t=>{const f=Math.min(1,(t-st)/1200);n=Math.round(T*(1-Math.pow(1-f,3)));sc.textContent=n.toLocaleString();if(f<1&&cur===i)requestAnimationFrame(tick)};requestAnimationFrame(tick)}
    const nx=(i+1)%slides.length;
    if(slides[i].querySelector('#chat')){run(()=>{if(auto)pt.push(setTimeout(()=>go(nx),5000))})}
    else if(slides[i].querySelector('#netviz')){netAnim(slides[i],()=>{if(auto)pt.push(setTimeout(()=>go(nx),5000))})}
    else if(slides[i].querySelector('.icp')){anim2(slides[i],()=>{if(auto)pt.push(setTimeout(()=>go(nx),5000))})}
    else if(slides[i].querySelector('.bow.live')){anim3(slides[i],()=>{if(auto)pt.push(setTimeout(()=>go(nx),5000))})}
    else if(auto)pt.push(setTimeout(()=>go(nx),5000));
  }
  const QA=[...document.querySelectorAll('.bow.live .qa')].map(q=>{const p=q.querySelector('p');const pre=[...p.querySelectorAll('span')].map(s=>s.outerHTML).join(' ');const tmp=p.cloneNode(true);tmp.querySelectorAll('span').forEach(s=>s.remove());return {q,p,pre,txt:tmp.textContent.trim()}});
  const ICPV=[...document.querySelectorAll('.icp li')].map(li=>{const b=li.querySelector('b');const v=li.textContent.replace(b.textContent,'').trim();return {li,b:b.outerHTML,v}});
  const PEOPLE=[['Priya S.','Founder · YC W24','pf'],['Marcus L.','Seed investor','pi'],['Dana K.','Community builder','pc'],['Ethan R.','Fractional CFO','po'],['Sofia M.','Angel investor','pi'],['Jamal T.','Founder · Series A','pf'],['Lena W.','Startup community lead','pc'],['Omar H.','VC partner','pi']];
  const COL={pf:'#C9A96E',pi:'#7cc49a',pc:'#8fb4ff',po:'#e6a3c8'};
  let netRAF=null;
  function netAnim(s,done){
    const box=s.querySelector('#netviz'),cv=box.querySelector('canvas');
    box.querySelectorAll('.pcard').forEach(x=>x.remove());
    const OX=40,OY=90,W=box.clientWidth+OX*2,H=box.clientHeight+OY*2,dpr=window.devicePixelRatio||1;cv.width=W*dpr;cv.height=H*dpr;const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    const cx=W/2,cy=H/2,R1=Math.min(W-OX*2,H-OY*2)*0.33;
    const hubs=PEOPLE.map((p,k)=>{const a=-Math.PI/2+k*2*Math.PI/PEOPLE.length;const x=cx+Math.cos(a)*R1*1.3,y=cy+Math.sin(a)*R1*1.02;return {p,a,x,y,kids:[]}});
    // network nodes per person
    let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
    hubs.forEach(h=>{for(let n=0;n<60;n++){const a=h.a+(rnd()-.5)*1.5,d=25+rnd()*Math.max(W,H)*0.38;h.kids.push({x:h.x+Math.cos(a)*d,y:h.y+Math.sin(a)*d,r:.8+rnd()*1.8,c:COL[PEOPLE[Math.floor(rnd()*PEOPLE.length)][2]],ph:rnd()*6})}});
    // pop profile cards
    hubs.forEach((h,k)=>{const el=document.createElement('div');el.className='pcard';el.style.left=(h.x-OX)+'px';el.style.top=(h.y-OY)+'px';const ini=h.p[0].split(' ').map(w=>w[0]).join('');el.innerHTML=`<div class="av" style="background:${COL[h.p[2]]}">${ini}</div><div><b>${h.p[0]}</b><span>${h.p[1]}</span></div>`;box.appendChild(el);pt.push(setTimeout(()=>el.classList.add('in'),120+k*70))});
    const t0=performance.now();cancelAnimationFrame(netRAF);
    const draw=t=>{const e=(t-t0)/1000;ctx.clearRect(0,0,W,H);
      // spokes hub->people
      hubs.forEach((h,k)=>{const f=Math.min(1,Math.max(0,(e-0.1-k*0.07)/0.3));if(f<=0)return;ctx.strokeStyle='rgba(201,169,110,'+(0.45*f)+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+(h.x-cx)*f,cy+(h.y-cy)*f);ctx.stroke();
        // pulse dot along spoke
        const pp=((e*0.5+k*0.13)%1);ctx.fillStyle='rgba(201,169,110,.9)';ctx.beginPath();ctx.arc(cx+(h.x-cx)*pp,cy+(h.y-cy)*pp,1.8,0,7);ctx.fill();
        // network expand
        const g=Math.min(1,Math.max(0,(e-0.9)/0.9));if(g<=0)return;const ease=1-Math.pow(1-g,3);
        h.kids.forEach(n=>{const x=h.x+(n.x-h.x)*ease,y=h.y+(n.y-h.y)*ease;ctx.strokeStyle='rgba(124,196,154,'+(0.10*ease)+')';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(h.x,h.y);ctx.lineTo(x,y);ctx.stroke();const tw=.55+.45*Math.sin(e*2+n.ph);ctx.globalAlpha=ease*tw;ctx.fillStyle=n.c;ctx.beginPath();ctx.arc(x,y,n.r,0,7);ctx.fill();ctx.globalAlpha=1});
      });
      if(cur===slides.indexOf(s))netRAF=requestAnimationFrame(draw)};
    netRAF=requestAnimationFrame(draw);
    pt.push(setTimeout(done,2000));
  }
  function anim2(s,done){
    const rows=[...s.querySelectorAll('.leads .lr')],note=s.querySelector('.icp small');
    ICPV.forEach(o=>o.li.innerHTML=o.b+'<span class="val"><span class="ghost">'+o.v+'</span></span>');
    rows.forEach(r=>r.classList.add('wait'));note.style.opacity=0;
    let t=150;const at=(ms,f)=>pt.push(setTimeout(f,ms));
    ICPV.forEach(o=>{
      at(t,()=>{o.li.classList.add('typing');o.li.querySelector('.val').innerHTML='<span class="tt"></span><span class="caret"></span><span class="ghost">'+o.v+'</span>'});
      for(let k=1;k<=o.v.length;k++)at(t+k*12,()=>{const tt=o.li.querySelector('.tt'),g=o.li.querySelector('.ghost');if(tt){tt.textContent=o.v.slice(0,k);g.textContent=o.v.slice(k)}});
      t+=o.v.length*12+60;
      at(t,()=>{o.li.classList.remove('typing');o.li.querySelector('.val').innerHTML=o.v+' <span class="ok">✓</span>'});t+=30;
    });
    at(t,()=>note.style.opacity=1);t+=80;
    rows.forEach(r=>{at(t,()=>{r.classList.remove('wait');r.classList.add('scan')});t+=170;at(t,()=>r.classList.remove('scan'))});
    at(t,done);
  }
  function anim3(s,done){
    const sl=s.querySelector('.slack.live');
    sl.classList.remove('in');sl.classList.add('typing');
    QA.forEach(o=>{o.q.classList.remove('ans');o.p.innerHTML=(o.pre?o.pre+' ':'')+o.txt});
    let t=200;const at=(ms,f)=>pt.push(setTimeout(f,ms));
    at(t+1150,()=>{sl.classList.remove('typing');sl.classList.add('in')});
    QA.forEach(o=>o.q.classList.add('show'));
    t+=1050;
    QA.forEach((o,k)=>at(t+k*180,()=>o.q.classList.add('ans')));
    t+=QA.length*180+100;
    at(t,done);
  }
  function setAuto(on){auto=on;ap.classList.toggle('on',on);ap.textContent=on?'❚❚ Autoplay on':'▶ Autoplay off'}
  pb.forEach(b=>b.onclick=()=>{setAuto(false);go(+b.dataset.k)});
  ap.onclick=()=>{if(auto){setAuto(false);clr()}else{setAuto(true);const nx=(cur+1)%slides.length;slides[cur].querySelector('#chat')?go(cur):go(nx)}};
  btns.forEach(x=>{x.removeAttribute('onclick');x.innerHTML='▶ Replay the intro';x.onclick=()=>go(0)});
  window.addEventListener('resize',()=>fitP(slides[cur]));
  setAuto(true);setTimeout(()=>go(0),400);
}
