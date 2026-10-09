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
  const PEOPLE=[['Priya S.','Founder & CEO','pf','YC W24 · SF','2.4k'],['Marcus L.','Partner','pi','Seed fund · NYC','5.1k'],['Dana K.','Community lead','pc','Founder meetups · Austin','3.8k'],['Ethan R.','Fractional CFO','po','12 startups · Boston','1.9k'],['Sofia M.','Angel investor','pi','40+ checks · LA','4.2k'],['Jamal T.','Founder','pf','Series A · Chicago','2.7k'],['Lena W.','Accelerator director','pc','Demo days · Miami','6.3k'],['Omar H.','VC principal','pi','Fintech fund · NYC','3.3k']];
  const COL={pf:'#C9A96E',pi:'#7cc49a',pc:'#8fb4ff',po:'#e6a3c8'};
  let netRAF=null;
  function netAnim(s,done){
    const box=s.querySelector('#netviz'),cv=box.querySelector('canvas');
    box.querySelectorAll('.pcard').forEach(x=>x.remove());
    const OX=40,OY=90,W=box.clientWidth+OX*2,H=box.clientHeight+OY*2,dpr=window.devicePixelRatio||1;cv.width=W*dpr;cv.height=H*dpr;const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    const cx=W/2,cy=H/2,R1=Math.min(W-OX*2,H-OY*2)*0.33;
    const BW=W-OX*2,BH=H-OY*2;const POS=[[-0.36,-0.31],[0.05,-0.41],[0.37,-0.30],[0.44,0.04],[0.33,0.33],[-0.06,0.40],[-0.35,0.31],[-0.44,-0.03]];const hubs=PEOPLE.map((p,k)=>{const x=cx+POS[k][0]*BW,y=cy+POS[k][1]*BH;const a=Math.atan2(y-cy,x-cx);return {p,a,x,y,kids:[]}});
    // network nodes per person
    let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
    hubs.forEach(h=>{for(let n=0;n<60;n++){const a=h.a+(rnd()-.5)*1.5,d=25+rnd()*Math.max(W,H)*0.38;h.kids.push({x:h.x+Math.cos(a)*d,y:h.y+Math.sin(a)*d,r:.8+rnd()*1.8,c:'#FCF7E9',ph:rnd()*6})}});
    const freeOK=(x,y)=>x>OX+60&&x+135<W-OX&&y-24>OY+20&&y<H-OY-20&&Math.hypot(x-cx,y-cy)>85&&!hubs.some(o=>{const L=o.x-96,R=o.x+96,T=o.y-70,B=o.y+70;return (x>L&&x<R&&y>T&&y<B)||(x+135>L&&x+6<R&&y>T&&y-24<B)});
    hubs.forEach(h=>{h.cands=[];for(let tries=0;tries<120&&h.cands.length<6;tries++){const a=rnd()*Math.PI*2,d=95+rnd()*150,x=h.x+Math.cos(a)*d,y=h.y+Math.sin(a)*d;if(freeOK(x,y)){const n={x,y,r:2,c:'#FCF7E9',ph:rnd()*6};h.cands.push(n);h.kids.push(n)}}});
    // pop profile cards
    hubs.forEach((h,k)=>{const el=document.createElement('div');el.className='pcard';el.style.left=(h.x-OX)+'px';el.style.top=(h.y-OY)+'px';const ini=h.p[0].split(' ').map(w=>w[0]).join('');el.innerHTML=`<div class="ctop"><div class="av" style="background:${COL[h.p[2]]}">${ini}</div><div><b>${h.p[0]}</b><span>${h.p[1]}</span></div></div><div class="cmeta">${h.p[3]}</div><div class="cnet"><i style="background:${COL[h.p[2]]}"></i>${h.p[4]} connections</div>`;box.appendChild(el);pt.push(setTimeout(()=>el.classList.add('in'),60+k*65))});
    const t0=performance.now();cancelAnimationFrame(netRAF);let matches=[],nextM=0.8;const ic=s.querySelector('#introc');let icv=0;
    const draw=t=>{const e=(t-t0)/1000;ctx.clearRect(0,0,W,H);
      // spokes hub->people
      hubs.forEach((h,k)=>{const f=Math.min(1,Math.max(0,(e-0.06-k*0.065)/0.15));if(f<=0)return;ctx.strokeStyle='rgba(201,169,110,'+(0.45*f)+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+(h.x-cx)*f,cy+(h.y-cy)*f);ctx.stroke();
        // pulse dot along spoke
        const pp=((e*1.2+k*0.13)%1);ctx.fillStyle='rgba(201,169,110,.9)';ctx.beginPath();ctx.arc(cx+(h.x-cx)*pp,cy+(h.y-cy)*pp,1.8,0,7);ctx.fill();
        // network expand
        const g=Math.min(1,Math.max(0,(e-0.6)/0.5));if(g<=0)return;const ease=1-Math.pow(1-g,3);
        h.kids.forEach(n=>{const x=h.x+(n.x-h.x)*ease,y=h.y+(n.y-h.y)*ease;ctx.strokeStyle='rgba(201,169,110,'+(0.09*ease)+')';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(h.x,h.y);ctx.lineTo(x,y);ctx.stroke();const tw=.55+.45*Math.sin(e*2+n.ph);ctx.globalAlpha=ease*tw;ctx.fillStyle=n.c;ctx.beginPath();ctx.arc(x,y,n.r,0,7);ctx.fill();ctx.globalAlpha=1});
      });
      // glowing match paths: lead -> tastemaker -> company
      if(e>0.8){while(nextM<e){nextM+=0.11;const hs=hubs.filter(x=>x.cands.length);if(!hs.length)break;const h=hs[Math.floor(rnd()*hs.length)];const fr=h.cands.filter(c=>!matches.some(m=>m.n===c||Math.hypot(m.n.x-c.x,m.n.y-c.y)<40));if(!fr.length)continue;const n=fr[Math.floor(rnd()*fr.length)];matches.push({h,n,t:nextM-0.11});if(ic){icv+=4+Math.floor(rnd()*9);ic.textContent=icv.toLocaleString();ic.classList.remove('bump');void ic.offsetWidth;ic.classList.add('bump')}}}
      if(ic&&e>0.8&&Math.random()<.4){icv+=1;ic.textContent=icv.toLocaleString()}
      if(ic&&e<=0.8){icv=Math.round(120*(1-Math.pow(1-Math.min(1,e/0.8),3)));ic.textContent=icv}
      matches=matches.filter(m=>e-m.t<1.8);
      matches.forEach(m=>{const age=e-m.t,draw1=Math.min(1,age/0.15),draw2=Math.min(1,Math.max(0,(age-0.15)/0.15)),fade=age>1.3?Math.max(0,1-(age-1.3)/0.5):1;
        ctx.save();ctx.shadowColor='rgba(252,226,160,.95)';ctx.shadowBlur=14;ctx.strokeStyle='rgba(252,226,160,'+(0.9*fade)+')';ctx.lineWidth=1.8;ctx.beginPath();
        ctx.moveTo(m.n.x,m.n.y);ctx.lineTo(m.n.x+(m.h.x-m.n.x)*draw1,m.n.y+(m.h.y-m.n.y)*draw1);
        if(draw2>0){ctx.moveTo(m.h.x,m.h.y);ctx.lineTo(m.h.x+(cx-m.h.x)*draw2,m.h.y+(cy-m.h.y)*draw2)}
        ctx.stroke();ctx.fillStyle='rgba(252,226,160,'+fade+')';ctx.beginPath();ctx.arc(m.n.x,m.n.y,3.6,0,7);ctx.fill();
        ctx.strokeStyle='rgba(252,226,160,'+(0.6*fade)+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(m.n.x,m.n.y,6+age*4,0,7);ctx.globalAlpha=Math.max(0,1-age/1.2)*fade;ctx.stroke();ctx.globalAlpha=fade*Math.min(1,age/0.3);ctx.shadowBlur=0;ctx.font='600 11px Aspekta,sans-serif';const lb='✓ Lead matched',tw=ctx.measureText(lb).width;ctx.fillStyle='rgba(14,39,35,.9)';ctx.fillRect(m.n.x+8,m.n.y-20,tw+12,18);ctx.fillStyle='#FCE2A0';ctx.fillText(lb,m.n.x+14,m.n.y-7);ctx.restore()});
      if(cur===slides.indexOf(s))netRAF=requestAnimationFrame(draw)};
    netRAF=requestAnimationFrame(draw);
    pt.push(setTimeout(done,1400));
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
