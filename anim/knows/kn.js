document.querySelectorAll('.atr-kn').forEach(el=>{
 const ms=[...el.querySelectorAll('.kn-m')],vs={},lt={},rt={},coin=el.querySelector('.kn-coin'),msg=el.querySelector('.kn-msg'),down=el.querySelector('.kn-down');
 el.querySelectorAll('.kn-v').forEach(v=>vs[v.dataset.k]=v);
 el.querySelectorAll('.kn-t[data-i]').forEach(p=>lt[p.dataset.i]=p);el.querySelectorAll('.kn-t[data-k]').forEach(p=>rt[p.dataset.k]=p);
 let i=-1;const off=()=>{el.querySelectorAll('.on').forEach(x=>x.classList.remove('on'));coin.classList.remove('flash')};
 function step(){off();i=(i+1)%ms.length;const k=MAP[i];
  ms[i].classList.add('on');setTimeout(()=>lt[i].classList.add('on'),150);
  setTimeout(()=>{coin.classList.add('flash');down.classList.add('on');msg.classList.add('out')},850);
  setTimeout(()=>{rt[k].classList.add('on');msg.textContent=MSG[k];msg.classList.remove('out')},1250);
  setTimeout(()=>{vs[k].classList.add('on');coin.classList.remove('flash')},1700)}
 msg.textContent=MSG[MAP[0]];step();setInterval(step,4200)});
