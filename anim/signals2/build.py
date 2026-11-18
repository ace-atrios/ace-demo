B="https://ace-atrios.github.io/ace-demo/img/ren4/"
W,H=1536,1152
N={'ph':(272,282,86),'li':(190,458,82),'rd':(180,635,82),'x':(245,810,82),'wa':(1308,378,88),'sl':(1362,573,86),'fo':(518,150,92),'vc':(770,105,88),'op':(1022,155,92)}
CX,CY=768,560
def pct(x,y):return f"left:{x/W*100:.3f}%;top:{y/H*100:.3f}%"
glows=''.join(f'<i class="sp-glow" data-k="{k}" style="{pct(x,y)};width:{2*r/W*100*1.5:.3f}%"></i>' for k,(x,y,r) in N.items())
paths=''
for k,(x,y,r) in N.items():
  mx=(x+CX)/2; my=(y+CY)/2
  # gentle S-curve toward center
  c1=(x+(CX-x)*0.35, y+(CY-y)*0.05); c2=(CX-(CX-x)*0.25, CY-(CY-y)*0.35)
  paths+=f'<path data-k="{k}" class="sp-thread" d="M{x},{y} C{c1[0]:.0f},{c1[1]:.0f} {c2[0]:.0f},{c2[1]:.0f} {CX},{CY}" pathLength="1"/>'
comp=f'''<!-- Atrios "signals" piece: same design as the original GIF, rebuilt as a smooth 60fps animation (no deps). Scales to its container. -->
<div class="atr-sp">
 <div class="sp-stage">
  <img class="sp-plate" src="{B}sig_plate.jpg" alt="A cherub circles the signal astrolabe, gathering signals from founders, VCs, operators, Product Hunt, LinkedIn, Reddit, X, WhatsApp and Slack">
  <svg class="sp-svg" viewBox="0 0 {W} {H}" preserveAspectRatio="none"><defs><filter id="spG" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><radialGradient id="spC"><stop offset="0" stop-color="#fff3c8" stop-opacity=".95"/><stop offset=".25" stop-color="#ffc35a" stop-opacity=".55"/><stop offset="1" stop-color="#ff9a1f" stop-opacity="0"/></radialGradient></defs>
   <g filter="url(#spG)">{paths}</g><circle class="sp-core" cx="{CX}" cy="{CY}" r="190" fill="url(#spC)"/></svg>
  {glows}
  <div class="sp-count" style="{pct(CX,CY-20)}"><b class="sp-num">52,262</b><i>signals today</i></div>
  <img class="sp-cherub" src="{B}cherub.webp" alt="">
  <div class="sp-cap" style="{pct(768,1022)}"><span></span></div>
 </div>
 <img class="sp-frame" src="{B}frame43.webp" alt="">
</div>
<style>{open('sp.css').read()}</style>
<script>{open('sp.js').read().replace('%N%',str({k:[x/W,y/H] for k,(x,y,r) in N.items()}).replace("'",'"'))}</script>'''
open('component.html','w').write(comp)
open('index.html','w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Atrios signals</title><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#16261a url(https://ace-atrios.github.io/ace-demo/img/ren/bg_plaster.jpg) center/cover;padding:3vw;box-sizing:border-box}</style></head><body>'+comp+'</body></html>')
print(len(comp))
