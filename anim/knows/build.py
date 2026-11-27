B="https://ace-atrios.github.io/ace-demo/img/ren4/"
M=[("You just closed your seed round","rho"),("Your first salesperson starts next week","monaco"),("You're hiring someone in another country","deel"),("You got accepted to an accelerator","brex"),("Your new head of finance just started","rillet"),("Your health plan renews in a few months","wc")]
V={"rho":("Rho","Banking","rho.co","$330 for a meeting · $875 when you sign up","Congrats on the raise! Founders who just closed are opening Rho accounts this week: $330 for a 30-min call, $875 when you move over."),
"monaco":("Monaco","AI sales","monaco.com","A Rolex as a welcome gift when you sign up","Your first rep needs a real pipeline on day one. Monaco sets that up, and there's a Rolex waiting when you sign."),
"deel":("Deel","Global payroll","deel.com","$100 for a meeting · $1,500 credits + $250 when you sign up","Hiring abroad? Deel handles the contract, payroll and compliance. $100 for the call, $1,500 in credits + $250 when you sign."),
"brex":("Brex","Cards","brex.com","Up to $15K in cash bonuses and founder perks","Welcome to the batch! A lot of your batchmates are setting up Brex this week, and founders get personal perks."),
"rillet":("Rillet","Accounting","rillet.com","$250 for a meeting · 10% off your first year","Your new finance lead will want a real close. Rillet pays $250 for a 30-min look, plus 10% off year one."),
"wc":("WithCoverage","Insurance","withcoverage.com","$500 for a meeting · 10% off your first year + $700 when you sign up","Renewal coming up? WithCoverage will benchmark your plan before it renews: $500 for the call.")}
order=["rho","monaco","deel","brex","rillet","wc"]
L=''.join(f'<div class="kn-m" data-i="{i}" style="--y:{i}"><img src="{B}strip.webp" alt=""><span>{t}</span></div>' for i,(t,_) in enumerate(M))
R=''.join(f'<div class="kn-v" data-k="{k}" style="--y:{i}"><img class="kn-pl" src="{B}plaque.webp" alt=""><div class="kn-vb"><span class="kn-logo"><img src="https://www.google.com/s2/favicons?domain={V[k][2]}&sz=128" alt=""></span><div><b>{V[k][0]}</b><em>{V[k][1]}</em><p>{V[k][3]}</p></div></div></div>' for i,k in enumerate(order))
lp=''.join(f'<path class="kn-t" data-i="{i}" d="M362,{100+i*96} C470,{100+i*96} 470,330 548,330" pathLength="1"/>' for i in range(6))
rp=''.join(f'<path class="kn-t" data-k="{k}" d="M652,330 C730,330 730,{100+i*96} 842,{100+i*96}" pathLength="1"/>' for i,k in enumerate(order))
import json
comp=f'''<!-- Atrios "knows which ones": photoreal, smooth 60fps component (no deps). Transparent background, scales to its container. -->
<div class="atr-kn">
 <svg class="kn-svg" viewBox="0 0 1200 900" preserveAspectRatio="none"><defs><filter id="knG" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <path d="M600,410 L600,735" class="kn-base"/>
  <g>{lp.replace('kn-t','kn-base')}{rp.replace('kn-t','kn-base')}</g>
  <g filter="url(#knG)">{lp}{rp}<path class="kn-t kn-down" d="M600,410 L600,735" pathLength="1"/></g></svg>
 <div class="kn-left">{L}</div>
 <div class="kn-coin"><div class="kn-halo"></div><img src="{B}coin_A.webp" alt="Atrios"><div class="kn-sheen"></div></div>
 <div class="kn-right">{R}</div>
 <div class="kn-scroll"><img src="{B}scroll.webp" alt=""><small>Ace</small><p class="kn-msg"></p></div>
</div>
<style>{open('kn.css').read().replace('%B%',B)}</style>
<script>(()=>{{const MSG={json.dumps({k:V[k][4] for k in V})};const MAP={json.dumps([k for _,k in M])};
{open('kn.js').read()}}})();</script>'''
open('component.html','w').write(comp)
open('index.html','w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Atrios knows which ones</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap"><style>body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#16261a url(https://ace-atrios.github.io/ace-demo/img/ren/bg_plaster.jpg) center/cover;padding:3vw;box-sizing:border-box}h2{color:#f3ead6;font:500 clamp(28px,4vw,52px)/1.1 "Cormorant Garamond",serif;text-align:center;margin:0 0 .4em}h2 i{display:block;color:#d9b468}</style></head><body><h2>Big moments call for new tools.<i>Atrios knows which ones.</i></h2>'+comp+'</body></html>')
print(len(comp))
