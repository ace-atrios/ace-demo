import json
I=json.load(open('/tmp/icons.json'))
B="https://ace-atrios.github.io/ace-demo/img/ren4/"
src=[('producthunt','Product Hunt',150,140),('linkedin','LinkedIn',150,280),('reddit','Reddit',150,420),('x','X',150,560)]
dst=[('whatsapp','WhatsApp',1050,170),('slack','Slack',1050,350),('discord','Discord',1050,530)]
aud=[('Founders',430,70),('VCs',600,48),('Operators',770,70)]
CX,CY,R=600,300,118
def node(k,label,x,y):
  return f'<div class="sg-node" style="left:{x/12}%;top:{y/7}%"><img class="sg-bez" src="{B}bezel.png" alt=""><svg class="sg-ic" viewBox="0 0 24 24"><path d="{I[k]}"/></svg><span class="sg-lbl">{label}</span></div>'
nodes=''.join(node(*s) for s in src+dst)
auds=''.join(f'<div class="sg-aud" style="left:{x/12}%;top:{y/7}%">{t}</div>' for t,x,y in aud)
paths=[]
for k,l,x,y in src+dst:
  side=-1 if x<CX else 1
  ex=CX+side*R*0.98; ey=CY+(y-CY)*0.35
  sx=x-side*48
  c1x=sx+(ex-sx)*0.45; c2x=sx+(ex-sx)*0.6
  paths.append(f'M{sx},{y} C{c1x},{y} {c2x},{ey} {ex},{ey}')
for t,x,y in aud:
  paths.append(f'M{x},{y+22} C{x},{y+90} {CX+(x-CX)*0.4},{CY-R-40} {CX+(x-CX)*0.25},{CY-R*0.95}')
pd=''.join(f'<path class="sg-wire" d="{p}"/>' for p in paths)
pl=''.join(f'<path class="sg-pulse" style="--d:{i*0.37:.2f}s;--t:{2.6+(i%3)*0.35:.2f}s" d="{p}" pathLength="100"/>' for i,p in enumerate(paths))
css=open('sig.css').read().replace('%B%',B)
js=open('sig.js').read()
comp=f'''<!-- Atrios signals map: drop-in component (HTML+CSS+JS, no deps). Smooth 60fps, scales to its container. -->
<div class="atr-sig" data-start="110524" data-rate="3.2">
  <div class="sg-stage">
    <img class="sg-bg" src="{B}sig_bg.jpg" alt="">
    <svg class="sg-wires" viewBox="0 0 1200 700" preserveAspectRatio="none">
      <defs><filter id="sgGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="sgGold" x1="0" x2="1"><stop offset="0" stop-color="#8a6420"/><stop offset=".5" stop-color="#e8c26a"/><stop offset="1" stop-color="#8a6420"/></linearGradient></defs>
      {pd}<g filter="url(#sgGlow)">{pl}</g>
    </svg>
    {auds}
    {nodes}
    <div class="sg-coinwrap"><div class="sg-halo"></div><img class="sg-coin" src="{B}coin_A.png" alt="Atrios"><div class="sg-sheen"></div></div>
    <div class="sg-count"><b class="sg-num">110,524</b><i>signals read today</i></div>
    <div class="sg-banner"><img src="{B}banner.png" alt=""><span class="sg-cap"></span></div>
  </div>
  <img class="sg-frame" src="https://ace-atrios.github.io/ace-demo/img/ren3/frame_gold.png" alt="">
</div>
<style>{css}</style>
<script>{js}</script>'''
open('component.html','w').write(comp)
open('index.html','w').write(f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Atrios signals</title>
<style>body{{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#16261a url(https://ace-atrios.github.io/ace-demo/img/ren/bg_plaster.jpg) center/cover;padding:4vw;box-sizing:border-box}}</style></head><body>{comp}</body></html>''')
print(len(comp))
