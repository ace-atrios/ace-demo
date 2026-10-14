const EARN={rho:'5,500 pts',slash:'5,500 pts',deel:'2,500 pts',superposition:'3,000 pts',corridor:'6,000 pts',securecloud:'3,100 pts',veroa:'2,000 pts',globaltize:'2,500 pts',charlemagne:'3,000 pts',supper:'2,500 pts',oyster:'5,500 pts',withcoverage:'5,500 pts'};
const BY=Object.fromEntries(V.map(v=>[v.id,v]));
const CATS=['Banking','Hiring','HR & Payroll','Compliance','AI & Data','Insurance'];
const PICKS=['rho','deel','superposition','corridor','securecloud','slash'];
const ic={
 share:'<svg viewBox="0 0 24 24"><path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7"/><path d="M16 6l-4-4-4 4M12 2v13"/></svg>',
 gift:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/></svg>',
 check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 arrow:'<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
 cal:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
 star:'<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 17l-5.4 3 1.2-6-4.5-4.2 6.1-.7z"/></svg>',
 user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
 coin:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8m0 8v1.5"/></svg>'
};
const S={variant:localStorage.getItem('x7v')||'B',tab:'All',claim:{},slot:null,back:'#/discover'};
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2400)}
function base(){return location.hash.startsWith('#/c/')?'#/c/taylor/':'#/discover/'}
function curId(){const p=location.hash.slice(2).split('/');return p[0]==='c'?p[2]:p[1]}

function meta(v){return v.rating?`<span class="stars">★ ${v.rating}</span><span>/5 · ${v.reviews} reviews</span>`:`<span>${v.reviews} reviews from Atrios members</span>`}
function card(v,o={}){
  const variant=o.variant||S.variant,b=o.base||'#/discover/';
  const claim=`<a class="pillbtn gold grow" href="${b}${v.id}/claim">Claim Perk</a>`;
  const acts=o.why?claim:claim+`<button class="pillbtn" data-open="${v.id}">Learn More</button>`;
  return `<article class="card" data-open="${v.id}">
    <div class="hd"><div class="mark">${v.name[0]}</div><div><h3>${v.name}</h3><div class="cat">${v.sub}</div></div></div>
    <span class="perk">${ic.gift}${v.perk}</span>
    ${o.why?`<div class="why">${esc(v.why)}<small>Why ${o.owner||'Taylor'} recommends it</small></div>`:`<p class="about">${v.about}</p><div class="whofor"><div class="lbl">Who it's for</div><ul>${v.who.map(w=>`<li>${w}</li>`).join('')}</ul></div>`}
    <div class="meta">${meta(v)}</div>
    <div class="acts">${acts}</div>
  </article>`;
}

function vDiscover(){
  const list=V.filter(v=>S.tab==='All'||(S.tab==='Recommended'?PICKS.includes(v.id):v.cat===S.tab));
  const vn={A:'Variant A: separate Claim and Share buttons on every card.',B:'Variant B: one Claim button per card. Sharing lives in the perk panel and on the "you\'re booked" screen.',R:'Recommended: Variant B plus a quiet share icon in the card corner.'}[S.variant];
  return `<div class="wrap">
    <div class="dhead"><div><div class="eyebrow">My Perks</div><h1>Perks for your startup</h1></div><span class="sp"></span>
      </div>
    <form class="acebar" data-askform><div class="ab-top"><span class="av">A</span><div><b>Talk to Ace</b><span>Ace tracks every signal (reviews, funding, hiring, what founders like you actually buy) and recommends the companies that will help you most.</span></div></div><div class="feed"><div class="core2"><div class="ring2"></div><div class="ring2 b"></div><div class="cin2"><b class="sigctr">48,213</b><span>signals</span></div></div><div class="streams"><div class="srow s1"><span class="sp"><i style="animation-delay:0.0s"></i>Scanning Product Hunt</span><span class="sp"><i style="animation-delay:0.3s"></i>Interviewing founders</span><span class="sp"><i style="animation-delay:0.6s"></i>Talking to VCs</span><span class="sp"><i style="animation-delay:0.9s"></i>Checking with operators</span><span class="sp"><i style="animation-delay:1.2s"></i>Reading reviews</span><span class="sp"><i style="animation-delay:1.5s"></i>Tracking funding rounds</span><span class="sp"><i style="animation-delay:0.0s"></i>Watching who\'s hiring</span><span class="sp"><i style="animation-delay:0.3s"></i>Reading Buy-or-Why feedback</span><span class="sp"><i style="animation-delay:0.6s"></i>Mapping founder stacks</span><span class="sp"><i style="animation-delay:0.9s"></i>Scanning Product Hunt</span><span class="sp"><i style="animation-delay:1.2s"></i>Interviewing founders</span><span class="sp"><i style="animation-delay:1.5s"></i>Talking to VCs</span><span class="sp"><i style="animation-delay:0.0s"></i>Checking with operators</span><span class="sp"><i style="animation-delay:0.3s"></i>Reading reviews</span><span class="sp"><i style="animation-delay:0.6s"></i>Tracking funding rounds</span><span class="sp"><i style="animation-delay:0.9s"></i>Watching who\'s hiring</span><span class="sp"><i style="animation-delay:1.2s"></i>Reading Buy-or-Why feedback</span><span class="sp"><i style="animation-delay:1.5s"></i>Mapping founder stacks</span></div></div></div><div class="bigask"><input placeholder="Ask Ace anything about your business…" aria-label="Talk to Ace"><button type="submit">${ic.arrow}<span>Talk to Ace</span></button></div><div class="prompts"><button type="button" data-prompt="What tools can help my business?">What tools can help my business?</button><button type="button" data-prompt="Best tools to get more revenue">Best tools to get more revenue</button><button type="button" data-prompt="What perks am I missing out on?">What perks am I missing out on?</button></div></form>
    <div class="tabs">${['All','Recommended'].map(t=>`<button class="${S.tab===t?'on':''}" data-tab="${t}">${t}</button>`).join('')}<span class="div"></span>${CATS.map(t=>`<button class="${S.tab===t?'on':''}" data-tab="${t}">${t}</button>`).join('')}</div>
    <div class="grid">${list.map(v=>card(v)).join('')}</div>
  </div>`;
}
const EXTRA_Q=[['"Short, useful call. No hard sell."','Founder, B2B SaaS'],['"The perk was applied the same week we signed."','COO, seed-stage startup'],['"Worth the 20 minutes even though we didn\'t switch yet."','Founder, marketplace']];
function pageIds(){try{return JSON.parse(localStorage.getItem('x7page'))||['rho','deel','superposition']}catch(e){return ['rho','deel','superposition']}}
function setPage(a){localStorage.setItem('x7page',JSON.stringify(a))}
function mineCard(v){const on=pageIds().includes(v.id);
  return `<article class="card" data-open="${v.id}">
    <div class="hd"><div class="mark">${v.name[0]}</div><div><h3>${v.name}</h3><div class="cat">${v.sub}</div></div></div>
    <span class="perk">${ic.gift}${v.perk}</span>
    <p class="about">${v.about}</p>
    <div class="acts"><button class="pillbtn gold grow" data-share="${v.id}">${ic.share}Share one-on-one</button><button class="pillbtn ${on?'onpage':''}" data-addpage="${v.id}">${on?ic.check+'On your page':'+ Add to page'}</button></div>
  </article>`}
const FRIENDS_LIKELY=[
 {n:'Maya Chen',r:'Co-founder & CEO, Lumen Health',why:'Same YC batch as you · 14 mutual connections',v:['deel','rho']},
 {n:'Sam Patel',r:'Founder, Orbit Labs',why:'Worked together at Stripe · 9 mutuals',v:['rho','superposition']},
 {n:'Priya Shah',r:'COO, Northwind',why:'Same NYC founder dinners · 21 mutuals',v:['corridor','slash']},
 {n:'Leo Park',r:'CTO, Brightline',why:'Both Penn alumni · 6 mutuals',v:['superposition','securecloud']},
 {n:'Jordan Kim',r:'Founder, Tidepool',why:'Commented on your last 3 posts',v:['slash','deel']},
 {n:'Ava Moreno',r:'Head of People, Fieldwork',why:'Same pickleball league · 11 mutuals',v:['corridor','globaltize']}];
const FRIENDS_INTRO=[
 {n:'Maya Chen',r:'Co-founder & CEO, Lumen Health',why:'Raised a $6M seed last month and is hiring 4 engineers. You message her weekly.',v:['superposition','rho','deel'],s:96},
 {n:'Priya Shah',r:'COO, Northwind',why:'Team just passed 30 people, benefits renewal is coming up. You met twice in September.',v:['corridor','slash'],s:91},
 {n:'Sam Patel',r:'Founder, Orbit Labs',why:'Opened a team in Lisbon and is paying contractors abroad. You worked together at Stripe.',v:['deel','rho'],s:88},
 {n:'Jordan Kim',r:'Founder, Tidepool',why:'Spending heavily on ads after a Series A. Engages with everything you post.',v:['slash','superposition'],s:84},
 {n:'Leo Park',r:'CTO, Brightline',why:'Prepping SOC 2 for an enterprise deal. Same Penn alumni group.',v:['securecloud','superposition'],s:79},
 {n:'Ava Moreno',r:'Head of People, Fieldwork',why:'Hiring 10+ remote roles this quarter.',v:['globaltize','corridor'],s:74}];
function liHave(){return !!localStorage.getItem('x7li')}
function vMine(){
  const sm=S.smode||'companies',q=(S.sq||'').toLowerCase();
  const next=RW.filter(r=>r.pts>PTS).sort((a,b)=>a.pts-b.pts)[0];
  const top=`<section class="shero"><div class="rglow"></div>
    <div class="shl"><div class="eyebrow">Share Perks</div><h1>Share perks, <em>earn rewards</em></h1>
     <p>Send a friend a perk they actually need. You earn points when they book a call, then redeem them for real rewards.</p>
     <div class="howpts sm"><div class="hp"><span class="hn">1</span><b>Share a perk</b><p>By text, email or link</p></div><div class="hp"><span class="hn">2</span><b>They book a call</b><p><span class="gold">2,000–6,000 pts</span></p></div><div class="hp"><span class="hn">3</span><b>They sign up</b><p><span class="gold">+2,500 pts</span> bonus</p></div></div></div>
    <div class="shr"><div class="rbal"><div class="ring" style="--p:${Math.min(100,Math.round(PTS/next.pts*100))}"><div><b>${PTS.toLocaleString()}</b><span>points</span></div></div><div class="rnext">${(next.pts-PTS).toLocaleString()} to <b>${next.name}</b></div><button class="pillbtn gold shine redeem" data-redeem>Redeem points</button></div>
     <div class="rmini">${RW.slice(0,4).map(r=>{const ok=PTS>=r.pts;return `<button class="rm ${ok?'ready':''}" data-claimr="${r.id}" title="${r.name}"><span style="background-image:url(${r.img})"></span><b>${r.name}</b><i>${ok?'Claim now':r.pts.toLocaleString()+' pts'}</i></button>`}).join('')}</div></div>
   </section>`;
  const toggle=`<div class="stog"><button class="${sm==='companies'?'on':''}" data-smode="companies">Search by companies</button><button class="${sm==='friends'?'on':''}" data-smode="friends">Search by friends</button></div>`;
  let body='';
  if(sm==='companies'){
    const list=V.filter(v=>!q||(v.name+' '+v.sub+' '+v.cat).toLowerCase().includes(q));
    body=`<div class="ssearch"><input data-sq placeholder="Search companies, e.g. banking, hiring, payroll" value="${esc(S.sq||'')}"></div>
     <div class="slist">${list.map(v=>`<article class="srowc"><div class="hd"><div class="mark">${v.name[0]}</div><div><h3>${v.name}</h3><div class="cat">${v.sub}</div></div></div>
       <div class="sfor"><div class="lbl">Your friend gets</div><b>${v.perk}</b><span>For: ${v.who.join(' · ')}</span></div>
       <div class="searn"><div class="lbl">You earn</div><b>${EARN[v.id]||'2,500 pts'}</b><span>per call booked</span></div>
       <button class="pillbtn gold bigshare" data-share="${v.id}">${ic.share}SHARE</button></article>`).join('')||'<div class="pvempty">No companies match</div>'}</div>`;
  }else{
    const have=liHave(),F=have?FRIENDS_INTRO:FRIENDS_LIKELY;
    body=(have?`<div class="liok">${ic.check}<span>LinkedIn connected (${esc(localStorage.getItem('x7li'))}). Ranked by who you're most likely to intro, and what they need right now.</span><button class="lnk" data-liclear>Disconnect</button></div>`
      :`<form class="liform" data-liform><div><b>Connect your LinkedIn</b><span>Ace ranks your network by who you can actually help, and which perks fit each friend.</span></div><input id="liurl" placeholder="linkedin.com/in/yourname"><button class="pillbtn gold" type="button" data-liconnect>Connect</button></form>
       <div class="lbl" style="margin:18px 0 8px">Until then: people you're most likely to connect with</div>`)
     +`<div class="flist">${F.map((f,i)=>`<article class="frow"><div class="fav">${f.n.split(' ').map(x=>x[0]).join('')}</div>
        <div class="fmain"><div class="fn"><b>${f.n}</b>${f.s?`<span class="fscore">${f.s}% match</span>`:''}</div><div class="fr">${f.r}</div><div class="fwhy">${f.why}</div>
        <div class="fv">${f.v.map(id=>`<button class="fchip" data-sharef="${id}|${f.n.split(' ')[0]}">${BY[id].name} · ${BY[id].perk}</button>`).join('')}</div></div>
        <div class="facts"><button class="pillbtn gold" data-sharef="${f.v[0]}|${f.n.split(' ')[0]}">${ic.share}Text ${f.n.split(' ')[0]}</button><button class="pillbtn" data-copylink="${f.v[0]}">Copy link</button></div></article>`).join('')}</div>
      <div class="note"><b>Sample people.</b> In the real product this list comes from your synced LinkedIn, Gmail and calendar.</div>`;
  }
  return `<div class="wrap">${top}${toggle}${body}</div>`;
}
const RW=[
 {id:'watch',img:'rw/watch.jpg',name:'Rolex Submariner',tag:'Grand prize',pts:25000},
 {id:'mattress',img:'rw/mattress.jpg',name:'Eight Sleep Pod',tag:'Sleep upgrade',pts:6000},
 {id:'rent',img:'rw/rent.jpg',name:'A month of rent, on us',tag:'Life upgrade',pts:12000},
 {id:'events',img:'rw/events.jpg',name:'Founder dinner + VIP events',tag:'Experiences',pts:3000},
 {id:'charity',img:'rw/charity.jpg',name:'$1,000 to a charity you pick',tag:'Give back',pts:4000}
];
const PTS=6850;
function vRewards(){
  const next=RW.filter(r=>r.pts>PTS).sort((a,b)=>a.pts-b.pts)[0];
  return `<div class="wrap rwrap">
   <section class="rhero"><div class="rglow"></div>
     <div><div class="eyebrow">Atrios Rewards</div><h1>Turn intros into <em>rewards</em></h1><p>Every time a friend books a call through you, you earn points. Stack them toward a Rolex, an Eight Sleep, a month of rent, and more.</p>
       <div class="rbtns"><a class="pillbtn gold" href="#/mine">Earn more points</a><a class="pillbtn" href="#/discover">Browse perks to share</a></div></div>
     <div class="rbal"><div class="ring" style="--p:${Math.min(100,Math.round(PTS/next.pts*100))}"><div><b>${PTS.toLocaleString()}</b><span>points</span></div></div>
       <div class="rnext">${(next.pts-PTS).toLocaleString()} to <b>${next.name}</b></div></div>
   </section>
   <section class="howpts"><div class="hp"><span class="hn">1</span><b>Share a perk</b><p>Send a friend a perk, or put it on your page.</p></div>
     <div class="hp"><span class="hn">2</span><b>They book a call</b><p><span class="gold">+500 pts</span> when the call happens.</p></div>
     <div class="hp"><span class="hn">3</span><b>They become a customer</b><p><span class="gold">+2,500 pts</span> bonus when they sign up.</p></div>
     <div class="hp"><span class="hn">★</span><b>Streaks</b><p><span class="gold">2x points</span> on your 3rd intro in a month.</p></div></section>
   <h2 class="rh2">Rewards</h2>
   <div class="rgrid">${RW.map(r=>{const p=Math.min(100,Math.round(PTS/r.pts*100)),ok=PTS>=r.pts;return `<article class="rcard ${ok?'ready':''}">
      <div class="rimg" style="background-image:url(${r.img})"><span class="rtag">${r.tag}</span>${ok?'<span class="rready">Ready to claim</span>':''}</div>
      <div class="rbody"><h3>${r.name}</h3><div class="rpts">${r.pts.toLocaleString()} pts</div>
       <div class="bar"><i style="width:${p}%"></i></div><div class="rprog"><span>${PTS.toLocaleString()} / ${r.pts.toLocaleString()}</span><span>${p}%</span></div>
       <button class="pillbtn ${ok?'gold shine':''} claimr" data-claimr="${r.id}" ${ok?'':'aria-disabled="true"'}>${ok?'Claim reward':(r.pts-PTS).toLocaleString()+' pts to go'}</button></div></article>`}).join('')}</div>
   <div class="note"><b>Demo values.</b> Point amounts and reward thresholds are placeholders to show the mechanic.</div></div>`;
}
function openRedeem(){
  $('#modal').innerHTML=`<div class="mh"><h3>Redeem points</h3><button class="x" data-closemodal aria-label="Close">✕</button></div><div class="mb"><div class="rdbal">You have <b>${PTS.toLocaleString()} points</b></div>
   ${RW.map(r=>{const ok=PTS>=r.pts;return `<div class="rdrow"><span class="rdimg" style="background-image:url(${r.img})"></span><div style="flex:1"><b>${r.name}</b><span>${r.pts.toLocaleString()} pts</span></div><button class="pillbtn ${ok?'gold':''}" data-claimr="${r.id}" ${ok?'':'aria-disabled="true"'}>${ok?'Redeem':(r.pts-PTS).toLocaleString()+' to go'}</button></div>`}).join('')}</div>`;
  $('#modal').classList.add('on');$('#scrim').classList.add('on')}
function claimReward(id){const r=RW.find(x=>x.id===id);if(PTS<r.pts){toast(`${(r.pts-PTS).toLocaleString()} more points to unlock`);return}
  $('#modal').innerHTML=`<div class="mh"><h3>Claim your reward</h3><button class="x" data-closemodal>✕</button></div><div class="mb" style="text-align:center"><div class="rimg" style="background-image:url(${r.img});height:170px;border-radius:12px"></div><h3 style="font-size:24px;margin:16px 0 6px">${r.name}</h3><p style="color:var(--muted);margin:0 0 16px">We'll email you within a day to arrange delivery.</p><button class="pillbtn gold shine" data-claimdone style="width:100%;justify-content:center;padding:13px">Confirm claim · ${r.pts.toLocaleString()} pts</button></div>`;
  $('#modal').classList.add('on');$('#scrim').classList.add('on')}
function bigAsk(q){const v=q.toLowerCase();
  const hit=/(revenue|sales|grow)/.test(v)?BY.slash:/(bank|card|cash)/.test(v)?BY.rho:/(hir|recruit)/.test(v)?BY.superposition:/(payroll|abroad|international)/.test(v)?BY.deel:BY.rho;
  location.hash='#/discover/'+hit.id;setTimeout(()=>askAce(q),420)}
const MAIL=[
 {id:'m1',u:1,from:'Ace',av:'A',tag:'Booking',sub:'Your Rho call is confirmed',snip:'Thu, Oct 22 at 2:00 PM ET. I added it to your calendar.',t:'2m',body:'<p>Hi Taylor,</p><p>Your call with Rho is confirmed for <b>Thu, Oct 22 at 2:00 PM ET</b>. The invite is on your calendar.</p><p>After the call you get the <b>$875 bonus</b> once your account is live, plus $50 for your feedback.</p><p>Want me to prep 3 questions for the call?</p><p>Ace</p>',b:'View perk',href:'#/discover/rho'},
 {id:'m2',u:1,from:'Maya Chen',av:'MC',tag:'Referral',sub:'Booked the Deel call you sent me',snip:'Thanks for the intro, booked Monday at 11.',t:'1h',body:'<p>Hey! Thanks for sending the Deel perk. Booked a call for Monday at 11. The $1,500 credits are a nice push since we just hired in Lisbon.</p><p>Maya</p><p style="color:var(--muted)">You earn 2,500 pts once the call happens.</p>'},
 {id:'m3',u:1,from:'Atrios Perks',av:'✦',tag:'Promotion',sub:'New this week: Supper, 2 months free',snip:'Data answers in Slack. Members only through Oct 31.',t:'3h',body:'<p><b>Supper</b> answers business questions from your live data in Slack, so nobody waits on a dashboard.</p><p>Atrios members get <b>2 months free</b> through Oct 31.</p>',b:'See the perk',href:'#/discover/supper'},
 {id:'m4',from:'Atrios Rewards',av:'★',tag:'Reward',sub:'$50 feedback reward sent',snip:'Thanks for sharing your take on Corridor after your call.',t:'Yesterday',body:'<p>Your <b>$50</b> for sharing feedback on Corridor is on its way. It lands in 1-2 business days.</p><p>You are 5,150 points from a month of rent on us.</p>'},
 {id:'m5',from:'Atrios Perks',av:'✦',tag:'Promotion',sub:'Limited: Superposition first month free',snip:'For founders hiring in the US or Canada. Ends Friday.',t:'2d',body:'<p>Hiring in the US or Canada? <b>Superposition</b> sources candidates for any eng, sales, marketing or CS role.</p><p>First month free + 20% off your first hire + $1,050. Ends Friday.</p>',b:'See the perk',href:'#/discover/superposition'}];
function vInbox(){
  const f=S.ifilter||'All',sel=S.isel||'m1';
  const list=MAIL.filter(m=>f==='All'||(f==='Unread'?m.u:m.tag==='Promotion'));
  const m=MAIL.find(x=>x.id===sel)||MAIL[0];
  return `<div class="wrap mailw"><div class="mailhd"><div><div class="eyebrow">Inbox</div><h1 style="font-size:34px;margin:4px 0 0">Inbox</h1></div>
    <div class="mtabs">${['All','Unread','Promotions'].map(t=>`<button class="${f===t?'on':''}" data-ifilter="${t}">${t}${t==='Unread'?` <i>${MAIL.filter(x=>x.u).length}</i>`:''}</button>`).join('')}</div></div>
   <div class="mail"><div class="mlist">${list.map(x=>`<button class="mrow ${x.u?'unread':''} ${x.id===m.id?'sel':''}" data-isel="${x.id}"><span class="mav">${x.av}</span><span class="mtxt"><span class="mtop"><b>${x.from}</b><em>${x.t}</em></span><span class="msub">${x.sub}</span><span class="msnip">${x.snip}</span></span></button>`).join('')}</div>
    <div class="mread"><div class="mrh"><span class="mav lg">${m.av}</span><div><h3>${m.sub}</h3><div class="mfrom">${m.from} <span>· ${m.t}</span> <span class="mtag">${m.tag}</span></div></div></div>
     <div class="mbody">${m.body}</div>${m.b?`<a class="pillbtn gold" href="${m.href}">${m.b}</a>`:''}
     <div class="mreply"><input placeholder="Reply to ${m.from}…"><button class="pillbtn" data-ireply>Send</button></div></div></div></div>`;
}
const PROF_DEF={name:'Taylor Offer',title:'CEO',company:'Atrios',linkedin:'linkedin.com/in/tayloroffer',email:'taylor@atrios.com',phone:'',location:'New York, NY',bio:'Founder of Atrios. I share the tools I actually use with founders I know.'};
function prof(){try{return Object.assign({},PROF_DEF,JSON.parse(localStorage.getItem('x7prof')||'{}'))}catch(e){return PROF_DEF}}
function vProfile(){
  const p=prof();
  const f=(k,l,ph,t='text')=>`<label class="pf2"><span>${l}</span><input data-pf="${k}" type="${t}" value="${esc(p[k]||'')}" placeholder="${ph}"></label>`;
  return `<div class="wrap profw"><div class="eyebrow">Profile</div>
   <section class="phero"><div class="pava"><img src="taylor.jpg" alt=""><button class="pchg" data-pphoto>Change</button></div>
    <div><h1 style="font-size:36px;margin:0">${esc(p.name)}</h1><div class="psub">${esc(p.title)}${p.company?' at '+esc(p.company):''} · ${esc(p.location)}</div>
     <div class="pstats"><div><b>12</b><span>perks shared</span></div><div><b>5</b><span>friends booked</span></div><div><b>6,850</b><span>points</span></div></div></div></section>
   <div class="pgrid"><section class="pcard"><h3>About you</h3>
     <div class="pform">${f('name','Full name','Your name')}${f('title','Job title','e.g. CEO')}${f('company','Company','Company name')}${f('location','Location','City')}${f('linkedin','LinkedIn','linkedin.com/in/you')}${f('email','Email','you@company.com','email')}${f('phone','Phone','(555) 555-5555','tel')}
      <label class="pf2 full"><span>Bio</span><textarea data-pf="bio" rows="3">${esc(p.bio||'')}</textarea></label></div>
     <div class="pacts"><button class="pillbtn gold" data-psave>Save changes</button><button class="pillbtn" data-preset>Reset</button></div></section>
    <aside class="pside"><section class="pcard"><h3>Connected accounts</h3><p class="pmut">Ace uses these to find which friends you can help.</p>
      ${[['LinkedIn',1],['Gmail',1],['Google Calendar',0],['X / Twitter',0]].map(([n,on])=>`<div class="conn"><span>${n}</span><button class="tgl ${on?'on':''}" data-tgl><i></i></button></div>`).join('')}</section>
     <section class="pcard"><h3>Notifications</h3>${[['Text me booking updates',1],['Email me new perks',1],['Weekly rewards summary',0]].map(([n,on])=>`<div class="conn"><span>${n}</span><button class="tgl ${on?'on':''}" data-tgl><i></i></button></div>`).join('')}</section></aside></div></div>`;
}
function vVariants(){
  const v=BY.deel;
  return `<div class="wrap"><div class="eyebrow">Claim + Share</div><h1 style="font-size:36px;margin:4px 0 6px">Two ways to support claim and share</h1>
  <p style="color:var(--muted);max-width:720px;margin:0">Same perk, same card. The only change is where "share with a friend" lives. Every button works, try them.</p>
  <div class="vgrid">
   <div class="vcol"><span class="vtag">Variant A</span><h3>Separate Claim and Share</h3><div class="sub">Two buttons on every card. Share is always one tap away.</div>${card(v,{variant:'A'})}</div>
   <div class="vcol"><span class="vtag">Variant B</span><h3>One Claim, share after</h3><div class="sub">One button on the card. Share is offered in the panel and right after claiming.</div>${card(v,{variant:'B'})}</div>
   <div class="vcol rec"><span class="vtag">Recommended</span><h3>B + quiet share icon</h3><div class="sub">B's single CTA, plus a small share icon for people who came to share.</div>${card(v,{variant:'R'})}</div>
  </div>
  <div class="verdict"><h3>My read: B, plus a quiet share icon</h3>
   <ul>
    <li><b class="gold">A</b> makes sharing obvious, but two buttons on every card doubles the noise across a 12+ card grid, and first-time visitors have to decide which one is "the" action.</li>
    <li><b class="gold">B</b> reads clearest: one obvious action per card. Share shows up where intent is highest, inside the panel and on the "you're booked" screen ("Know someone who'd want this too?").</li>
    <li>The gap in pure B is tastemakers who arrive only to share. The corner icon covers them without competing with Claim.</li>
    <li>Every share entry point opens the same pre-written, editable text, so it's one flow wherever it starts.</li>
   </ul></div></div>`;
}
function vCollection(){
  const picks=pageIds().map(id=>BY[id]);
  return `<div class="cpage">
   <div class="cbar"><a href="index.html"><img src="wordmark.svg" alt="Atrios"></a><span class="sp"></span><a class="pillbtn" href="#/discover">Explore all perks</a><a class="pillbtn gold" href="../stack/build.html">Make your own</a></div>
   <section class="owner">
     <div class="ph"><img src="taylor.jpg" alt=""></div>
     <div><div class="eyebrow">Curated by</div><h1>Taylor Offer's <em>perks</em></h1><div class="role">CEO, Atrios · Tools I'd vouch for, with perks you get through me</div><span class="badge">★ Exclusive to Taylor's network</span></div>
     <div class="ostats"><div><b>${picks.length}</b><span>Picks</span></div><div><b>$1,500+</b><span>Top perk</span></div></div>
   </section>
   <div class="grid">${picks.map(v=>card(v,{why:1,owner:'Taylor',base:'#/c/taylor/'})).join('')}</div>
   <div class="explore">
     <div><h3>Looking for something else?</h3><p>Browse every perk on Atrios, sorted by what fits your startup.</p><a class="pillbtn" href="#/discover">Explore all perks →</a></div>
     <div><h3>Share perks like Taylor</h3><p>Build your own page in 60 seconds and earn rewards when friends claim.</p><a class="pillbtn gold" href="../stack/build.html">Build your collection</a></div>
   </div>
   <div class="note" style="margin-top:26px"><b>This is what a copied collection link opens</b> (atrios.com/c/taylor). Visitors never land in Taylor's inbox. Each perk opens the same panel as My Perks, and the rest of Atrios is one click away.</div>
  </div>`;
}

function panelHTML(v,step){
  const b=base();
  const head=`<div class="ph"><div class="mark">${v.name[0]}</div><div><h2>${v.name}</h2><div style="font-size:13px;color:var(--muted)">${v.sub} · ${v.reviews} reviews</div></div><a class="x" href="${S.back}" aria-label="Close">✕</a></div>`;
  if(step==='detail') return head+`<div class="pb">
      <div class="perkbox"><div class="eyebrow">Your perk</div><div class="big">${v.perk}</div><p>${v.perkLong}. Plus $50 for your feedback after the call, whether you sign up or not.</p></div>
      <div class="chatbox"><div class="chathead"><span class="av">A</span><div><b>Ask Ace about ${v.name}</b><span>Ace has every review, call note and signal on ${v.name}. Ask anything.</span></div></div>
        <div class="msgs" id="msgs"><div class="msg ace">Hi! I know ${v.name} inside out from ${v.reviews} member reviews and calls. What do you want to know?</div></div>
        <div class="chips"><button data-q="How will ${v.name} help my company?">How will this help my company?</button><button data-q="Who is the ${v.name} perk for?">Who is the perk for?</button><button data-q="What do people say about ${v.name}?">What do people say?</button></div>
        <form class="ain" data-aceform><input placeholder="Ask any question…"><button>Ask</button></form></div>
      <div class="sec"><div class="lbl">What it is</div><p>${v.long}</p></div>
      <div class="sec"><div class="lbl">Who the perk is for</div><ul>${v.who.map(w=>`<li>${w}</li>`).join('')}</ul>
        <div class="elig">Interested in the product? You can still meet with their team, and you may be eligible even if you don't meet the above.</div></div>
      <div class="sec"><div class="lbl">Reviews and insights from Atrios members</div>
        <div class="insights"><div><b>${v.reviews}</b><span>member reviews</span></div><div><b>${v.rating?('★ '+v.rating):'New'}</b><span>${v.rating?'avg rating':'rating soon'}</span></div><div><b>${v.cat}</b><span>category</span></div></div>
        <div class="revs">${(v.quotes||[v.quote]).concat(EXTRA_Q).slice(0,4).map(q=>`<div class="revq">${q[0]}<small>${q[1]}</small></div>`).join('')}</div></div>
    </div>
    <div class="pf"><a class="pillbtn gold" href="${b}${v.id}/claim">Claim perk</a><button class="pillbtn" data-share="${v.id}">${ic.share}Share perk and earn</button></div>`;
  if(step==='claim'){const c=S.claim;return head+`<div class="pb"><div class="prog"><i class="on"></i><i></i><i></i></div>
      <div class="eyebrow">Claim ${v.perk}</div><h3 style="font-size:24px;margin:4px 0 6px">Who's claiming?</h3><p style="margin:0 0 18px;color:var(--muted)">We use this to book your call and apply the perk. No password, no account setup.</p>
      <form class="form" data-claimform>
       <div class="row2"><div class="field"><label>First name</label><input name="first" required value="${esc(c.first||'')}" placeholder="Jamie"></div><div class="field"><label>Last name</label><input name="last" required value="${esc(c.last||'')}" placeholder="Rivera"></div></div>
       <div class="field"><label>Work email</label><input name="email" type="email" required value="${esc(c.email||'')}" placeholder="jamie@company.com"></div>
       <div class="field"><label>Company</label><input name="company" required value="${esc(c.company||'')}" placeholder="Company name"></div>
       <button class="pillbtn gold" style="justify-content:center;padding:13px;margin-top:6px">Continue to pick a time</button>
       <a href="${b}${v.id}" style="text-align:center;font-size:13px;color:var(--muted)">← Back to details</a>
      </form></div>`}
  if(step==='time'){const days=[['Thu','Oct 22'],['Fri','Oct 23'],['Mon','Oct 26']],times=['10:00 AM','2:00 PM'];
    return head+`<div class="pb"><div class="prog"><i class="on"></i><i class="on"></i><i></i></div>
      <div class="eyebrow">Almost done</div><h3 style="font-size:24px;margin:4px 0 6px">Pick a time with ${v.name}</h3><p style="margin:0 0 18px;color:var(--muted)">20-minute intro call. Times in ET.</p>
      <div class="slots">${days.flatMap(d=>times.map(t=>{const s=`${d[0]}, ${d[1]} · ${t}`;return `<button data-slot="${s}" class="${S.slot===s?'on':''}">${d[0]}, ${d[1]}<small>${t}</small></button>`})).join('')}</div>
      <button class="pillbtn gold" data-confirm style="width:100%;justify-content:center;padding:13px;margin-top:18px;${S.slot?'':'opacity:.5'}">Book my call</button>
      <a href="${b}${v.id}/claim" style="display:block;text-align:center;font-size:13px;color:var(--muted);margin-top:12px">← Back</a></div>`}
  if(step==='done'){const c=S.claim;return head+`<div class="pb"><div class="prog"><i class="on"></i><i class="on"></i><i class="on"></i></div><div class="done">
      <div class="ck">${ic.check}</div><h3>You're booked${c.first?', '+esc(c.first):''}</h3>
      <p style="margin:0">${esc(S.slot||'Thu, Oct 22 · 2:00 PM')} ET with the ${v.name} team.<br>Invite sent to ${esc(c.email||'your email')}. Your ${v.perk} is locked in.</p>
      <div class="sharecta"><h4>Know someone who'd want this too?</h4><p>Send them the ${v.name} perk. We wrote the text, you can edit it.</p><button class="pillbtn gold" data-share="${v.id}">${ic.share}Share perk and earn</button></div>
      <a class="pillbtn" href="${S.back}" style="margin-top:16px">Keep exploring perks</a></div></div>`}
}
function openPanel(id,step){const v=BY[id];if(!v)return;const p=$('#panel');p.innerHTML=panelHTML(v,step);p.classList.add('on');$('#scrim').classList.add('on');p.setAttribute('aria-hidden','false')}
function closePanel(){$('#panel').classList.remove('on');if(!$('#modal').classList.contains('on'))$('#scrim').classList.remove('on');$('#panel').setAttribute('aria-hidden','true')}

function openShare(id,fn){
  const v=id?BY[id]:null;
  const txt=v?`Hey! I've been looking at ${v.name} for ${v.sub.toLowerCase()}. Through Atrios you get ${v.perk} when you sign up. Thought of you, here's the link: atrios.com/p/${v.id}?ref=taylor`
    :`Hey! I've been using Atrios to get perks on startup tools (banking, hiring, payroll). Thought you'd find a few useful: atrios.com/c/taylor`;
  $('#modal').innerHTML=`<div class="mh"><h3>${v?'Share '+v.name+' with a friend':'Share your perks'}</h3><button class="x" data-closemodal aria-label="Close">✕</button></div>
   <div class="mb"><div class="field" style="margin-bottom:12px"><label>Friend's first name (optional)</label><input id="fname" placeholder="Maya"></div>
   <label style="display:block;font-size:12px;color:var(--muted);margin-bottom:5px">Your message</label>
   <textarea id="stext">${esc(txt)}</textarea><div class="hint">Pre-written so it sounds like you. Edit anything before you send.</div>
   <div class="ccace">${ic.check}<span><b>Ace is cc'd</b> on your text or email to answer their questions and book the call.</span></div><div class="via"><a class="pillbtn gold" id="viasms" href="#">Send as text</a><button class="pillbtn" data-copy>Copy</button><a class="pillbtn" id="viamail" href="#">Email</a></div>
   <div class="rw">${ic.gift}<span>${v?`You earn <b>${EARN[v.id]||"2,500 pts"}</b> when a friend books a call with ${v.name} through your link.`:"You earn <b>2,000 to 6,000 points</b> for every friend who books a call through your page."}</span></div></div>`;
  const upd=()=>{const t=$('#stext').value;$('#viasms').href='sms:/open?addresses=+15303064813&body='+encodeURIComponent(t);$('#viamail').href='mailto:?cc=ace@atrios.com&subject='+encodeURIComponent(v?v.name+' perk for you':'Perks for your startup')+'&body='+encodeURIComponent(t)};
  $('#fname').oninput=e=>{const n=e.target.value.trim();const t=$('#stext');t.value=t.value.replace(/^Hey[^!]*!/,n?`Hey ${n}!`:'Hey!');upd()};
  $('#stext').oninput=upd;upd();
  if(fn){$('#fname').value=fn;$('#fname').oninput({target:$('#fname')})}
  $('#modal').classList.add('on');$('#scrim').classList.add('on');
}
function closeShare(){$('#modal').classList.remove('on');if(!$('#panel').classList.contains('on'))$('#scrim').classList.remove('on')}

function aceReply(q,v){
  q=q.toLowerCase();if(!v)v=BY.rho;
  if(/who is/.test(q))return `The ${v.name} perk is for ${v.who.join(' + ')}. Even if you're not there yet, you can still meet their team, and you may qualify anyway.`;
  if(/help my company|help my business/.test(q))return `${v.long.split('. ')[0]}. For a team like yours that means less time on ${v.cat.toLowerCase()} and ${v.perk} back. Tell me your stage and I'll get specific.`;
  if(/fit/.test(q))return `Quick check: it's built for: ${v.who.join(' + ')}. Tell me your stage and team size and I'll confirm before you book.`;
  if(/compare|current|use now/.test(q))return `The main reason founders switch: ${v.why.charAt(0).toLowerCase()+v.why.slice(1)} What are you using today?`;
  if(/say|review/.test(q))return `${v.reviews} Atrios members have reviewed ${v.name}. One said: ${v.quote[0]}`;
  return `Happy to help. In the live product I answer using your company details and real member reviews. You can claim the perk anytime, no chat needed.`;
}
function askAce(q){const m=document.getElementById('msgs');if(!m)return;const v=BY[curId()];
  m.insertAdjacentHTML('beforeend',`<div class="msg me">${esc(q)}</div>`);
  setTimeout(()=>{m.insertAdjacentHTML('beforeend',`<div class="msg ace">${esc(aceReply(q,v))}</div>`);m.lastElementChild.scrollIntoView({block:'nearest'})},550)}

function route(){
  $('#modal').classList.remove('on');
  const parts=(location.hash||'#/discover').slice(2).split('/');const r=parts[0]||'discover';
  document.querySelectorAll('.demobar a[data-r]').forEach(a=>a.classList.remove('on'));
  const standalone=r==='c';
  $('#shell').style.display=standalone?'none':'';
  $('#standalone').hidden=!standalone;
  document.querySelectorAll('.rail a').forEach(a=>a.classList.toggle('on',a.dataset.nav===r));
  let id,step;
  if(r==='discover'){
    if($('#view').dataset.r!=='discover'){$('#view').innerHTML=vDiscover();$('#view').dataset.r='discover'}
    S.back='#/discover';id=parts[1];step=parts[2];
    document.querySelector(`.demobar a[data-r="${step==='claim'?'book':id?'perk':'discover'}"]`)?.classList.add('on');
  }else if(r==='c'){
    if(!$('#standalone').innerHTML)$('#standalone').innerHTML=vCollection();
    S.back='#/c/taylor';id=parts[2];step=parts[3];
    document.querySelector('.demobar a[data-r="c"]').classList.add('on');
  }else{
    $('#view').dataset.r=r;
    $('#view').innerHTML=r==='profile'?vProfile():r==='inbox'?vInbox():r==='variants'?vVariants():r==='mine'?vMine():r==='rewards'?vMine():vDiscover();
    document.querySelector(`.demobar a[data-r="${r}"]`)?.classList.add('on');
  }
  if(id)openPanel(id,step==='claim'?'claim':step==='time'?'time':step==='done'?'done':'detail');else{closePanel();window.scrollTo(0,0)}
  syncPhone();
}
window.addEventListener('hashchange',route);

document.addEventListener('click',e=>{
  const t=e.target;
  const sh=t.closest('[data-share]');if(sh){e.preventDefault();e.stopPropagation();openShare(sh.dataset.share);return}
  if(t.closest('[data-sharegen]')){e.preventDefault();openShare(null);return}
  if(t.closest('[data-closemodal]')){closeShare();return}
  if(t.closest('[data-copy]')){navigator.clipboard?.writeText($('#stext').value);toast('Copied. Paste it anywhere.');return}
  if(t.closest('#viasms')||t.closest('#viamail')){setTimeout(()=>{closeShare();toast("Sent! You'll see it in your Inbox when they claim.")},300);return}
  const ap=t.closest('[data-addpage]');if(ap){e.stopPropagation();const id=ap.dataset.addpage;let a=pageIds();a=a.includes(id)?a.filter(x=>x!==id):[...a,id];setPage(a);$('#standalone').innerHTML='';const y=window.scrollY;$('#view').innerHTML=vMine();window.scrollTo(0,y);toast(a.includes(id)?BY[id].name+' added to your page':BY[id].name+' removed');return}
  const smd=t.closest('[data-smode]');if(smd){S.smode=smd.dataset.smode;$('#view').innerHTML=vMine();return}
  const sf=t.closest('[data-sharef]');if(sf){e.preventDefault();e.stopPropagation();const [id,fn]=sf.dataset.sharef.split('|');openShare(id,fn);return}
  const cl=t.closest('[data-copylink]');if(cl){navigator.clipboard&&navigator.clipboard.writeText('atrios.com/p/'+cl.dataset.copylink+'?ref=taylor');toast('Link copied');return}
  if(t.closest('[data-liconnect]')){e.preventDefault();const u=($('#liurl').value||'').trim()||'linkedin.com/in/taylor-offer';localStorage.setItem('x7li',u);toast('LinkedIn connected. Ranking your network…');$('#view').innerHTML=vMine();return}
  const ifl=t.closest('[data-ifilter]');if(ifl){S.ifilter=ifl.dataset.ifilter;$('#view').innerHTML=vInbox();return}
  const isl=t.closest('[data-isel]');if(isl){S.isel=isl.dataset.isel;const mm=MAIL.find(x=>x.id===S.isel);if(mm)mm.u=0;$('#view').innerHTML=vInbox();return}
  if(t.closest('[data-ireply]')){toast('Reply sent');return}
  if(t.closest('[data-psave]')){const o={};document.querySelectorAll('[data-pf]').forEach(i=>o[i.dataset.pf]=i.value);localStorage.setItem('x7prof',JSON.stringify(o));$('#view').innerHTML=vProfile();toast('Profile saved');return}
  if(t.closest('[data-preset]')){localStorage.removeItem('x7prof');$('#view').innerHTML=vProfile();return}
  const tg=t.closest('[data-tgl]');if(tg){tg.classList.toggle('on');return}
  if(t.closest('[data-pphoto]')){toast('Photo upload comes with the real app');return}
  if(t.closest('[data-redeem]')){e.preventDefault();openRedeem();return}
  if(t.closest('[data-liclear]')){localStorage.removeItem('x7li');$('#view').innerHTML=vMine();return}
  const cr=t.closest('[data-claimr]');if(cr){claimReward(cr.dataset.claimr);return}
  if(t.closest('[data-claimdone]')){closeShare();toast('Reward claimed! Check your email.');return}
  const pr=t.closest('[data-prompt]');if(pr){bigAsk(pr.dataset.prompt);return}
  const tab=t.closest('[data-tab]');if(tab&&$('#view').dataset.r==='discover'){S.tab=tab.dataset.tab;$('#view').innerHTML=vDiscover();return}
  const q=t.closest('[data-q]');if(q){askAce(q.dataset.q);return}
  const sl=t.closest('[data-slot]');if(sl){S.slot=sl.dataset.slot;openPanel(curId(),'time');return}
  if(t.closest('[data-confirm]')){if(S.slot)location.hash=base()+curId()+'/done';else toast('Pick a time first');return}
  const vb=t.closest('[data-v]');if(vb){S.variant=vb.dataset.v;localStorage.setItem('x7v',S.variant);setSeg();if($('#view').dataset.r==='discover')$('#view').innerHTML=vDiscover();$('#standalone').innerHTML='';route();return}
  const vw=t.closest('[data-view]');if(vw){document.body.classList.toggle('mobileview',vw.dataset.view==='mob');setSeg();syncPhone();return}
  if(t.id==='scrim'){if($('#modal').classList.contains('on'))closeShare();else location.hash=S.back;return}
  const lm=t.closest('button[data-open]');if(lm){e.preventDefault();e.stopPropagation();location.hash=base()+lm.dataset.open;return}
  const op=t.closest('[data-open]');if(op&&!t.closest('a,button')&&!t.closest('.vcol'))location.hash=base()+op.dataset.open;
});
document.addEventListener('submit',e=>{
  e.preventDefault();const f=e.target;
  if(f.matches('[data-claimform]')){S.claim=Object.fromEntries(new FormData(f));location.hash=base()+curId()+'/time';return}
  if(f.matches('[data-aceform]')){const i=f.querySelector('input');if(i.value.trim()){askAce(i.value.trim());i.value=''}return}
  if(f.matches('[data-askform]')){const q=f.querySelector('input').value||'What tools can help my business?';bigAsk(q)}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#modal').classList.contains('on'))closeShare();else if($('#panel').classList.contains('on'))location.hash=S.back}});
function setSeg(){
  document.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===S.variant));
  const mob=document.body.classList.contains('mobileview');
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('on',(b.dataset.view==='mob')===mob));
}
function syncPhone(){if(!document.body.classList.contains('mobileview'))return;const f=$('#phoneframe');const want='app.html?embed=1'+(location.hash||'#/discover');if(f.dataset.src!==want){f.dataset.src=want;f.src=want}}
const QS=new URLSearchParams(location.search);
if(QS.get('embed'))document.body.classList.add('embed');
if(QS.get('m'))document.body.classList.add('mobileview');
setSeg();route();
document.addEventListener('submit',e=>{if(e.target.matches('[data-liform]')){e.preventDefault();const u=($('#liurl').value||'').trim()||'linkedin.com/in/taylor-offer';localStorage.setItem('x7li',u);toast('LinkedIn connected. Ranking your network…');$('#view').innerHTML=vMine()}});
document.addEventListener('input',e=>{if(e.target.matches('[data-sq]')){S.sq=e.target.value;const pos=e.target.selectionStart;$('#view').innerHTML=vMine();const i=$('[data-sq]');i.focus();i.setSelectionRange(pos,pos)}});
(function(){let n=48213;setInterval(()=>{n+=Math.floor(Math.random()*9)+1;document.querySelectorAll('.sigctr').forEach(c=>c.textContent=n.toLocaleString())},140)})();
