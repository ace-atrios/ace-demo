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
  let t=600;
  S.forEach((m,i)=>{
    if(m.typing){const ti=t;timer.push(setTimeout(()=>{const d=document.createElement('div');d.className='msg '+m.c+' typing';d.id='ty';d.innerHTML='<i></i><i></i><i></i>';chat.appendChild(d);chat.scrollTop=chat.scrollHeight;if(m.c==='ace'&&i===1){stepOn(1);setTimeout(()=>stepOn(2),900)}},ti));t+=m.typing}
    const tt=t;timer.push(setTimeout(()=>{const y=document.getElementById('ty');if(y)y.remove();bubble(m);if(m.step)stepOn(m.step)},tt));
    t+=(m.d||700)+ (m.h?900:0);
  });
  timer.push(setTimeout(()=>stepOn(5),t+300));
  if(done)timer.push(setTimeout(done,t+2500));
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
    pb.forEach((b,k)=>b.classList.toggle('on',k===i));fitP(slides[i]);
    const nx=(i+1)%slides.length;
    if(slides[i].querySelector('#chat')){run(()=>{if(auto)pt.push(setTimeout(()=>go(nx),5000))})}
    else if(auto)pt.push(setTimeout(()=>go(nx),5000));
  }
  function setAuto(on){auto=on;ap.classList.toggle('on',on);ap.textContent=on?'❚❚ Autoplay on':'▶ Autoplay off'}
  pb.forEach(b=>b.onclick=()=>{setAuto(false);go(+b.dataset.k)});
  ap.onclick=()=>{if(auto){setAuto(false);clr()}else{setAuto(true);const nx=(cur+1)%slides.length;slides[cur].querySelector('#chat')?go(cur):go(nx)}};
  btns.forEach(x=>{x.removeAttribute('onclick');x.innerHTML='▶ Replay the intro';x.onclick=()=>go(0)});
  window.addEventListener('resize',()=>fitP(slides[cur]));
  setAuto(true);setTimeout(()=>go(0),400);
}
