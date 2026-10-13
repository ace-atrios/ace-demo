/* Atrios AI chat panel: messages go to Ace (a real teammate) via Supabase; Ace's replies come back by polling. */
(function () {
  var SB = 'https://pxvzxachxtbgckluilzd.supabase.co/rest/v1/web_chat';
  var KEY = 'sb_publishable_Mg-H89tDDnZrT6LgZiepjA_z5YwefdV';
  var sid = localStorage.getItem('atrios_chat_sid');
  if (!sid) {
    var a = new Uint8Array(16); crypto.getRandomValues(a);
    sid = 'w' + Array.from(a, function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    localStorage.setItem('atrios_chat_sid', sid);
  }
  var H = { apikey: KEY, Authorization: 'Bearer ' + KEY, 'x-chat-session': sid, 'Content-Type': 'application/json' };
  var css = '' +
    '.acp-scrim{position:fixed;inset:0;background:rgba(2,23,20,.55);backdrop-filter:blur(2px);opacity:0;pointer-events:none;transition:opacity .3s;z-index:50}' +
    '.acp-scrim.on{opacity:1;pointer-events:auto}' +
    '.acp{position:fixed;top:16px;right:16px;bottom:16px;width:min(420px,calc(100vw - 32px));z-index:51;display:flex;flex-direction:column;' +
    'background:linear-gradient(180deg,#102c27,#0e2723 40%);border:1px solid rgba(201,169,110,.35);border-radius:16px;box-shadow:0 25px 50px -12px rgba(0,0,0,.6);' +
    'transform:translateX(calc(100% + 24px));transition:transform .35s cubic-bezier(.2,.7,.2,1);font-family:Aspekta,"Helvetica Neue",Arial,sans-serif;color:#fff4de}' +
    '.acp.on{transform:none}' +
    '.acp-h{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.06)}' +
    '.acp-av{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(201,169,110,.12);border:1px solid rgba(201,169,110,.45);color:#c9a96e;font:600 17px/1 "Nanum Myeongjo",Georgia,serif}' +
    '.acp-h b{display:block;font:600 16px/1.2 "Nanum Myeongjo",Georgia,serif}.acp-h small{font-size:12px;color:rgba(255,244,222,.55);display:flex;align-items:center;gap:6px}' +
    '.acp-h small i{width:7px;height:7px;border-radius:50%;background:#609d77;display:inline-block}' +
    '.acp-x{margin-left:auto;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:transparent;color:#fff4de;cursor:pointer;font-size:18px;line-height:1}' +
    '.acp-m{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:8px}' +
    '.acp-b{max-width:84%;padding:10px 14px;border-radius:18px;font:250 14.5px/1.45 Aspekta,"Helvetica Neue",Arial,sans-serif;white-space:pre-wrap;word-wrap:break-word;animation:acpIn .25s ease-out}' +
    '.acp-b.u{align-self:flex-end;background:#c9a96e;color:#0e2723;border-bottom-right-radius:6px;font-weight:400}' +
    '.acp-b.a{align-self:flex-start;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.06);border-bottom-left-radius:6px}' +
    '.acp-b a{color:#c9a96e}' +
    '.acp-t{align-self:flex-start;display:flex;gap:4px;padding:12px 14px;border-radius:18px;background:rgba(255,255,255,.07)}' +
    '.acp-t i{width:6px;height:6px;border-radius:50%;background:rgba(255,244,222,.6);animation:acpT 1s infinite}.acp-t i:nth-child(2){animation-delay:.15s}.acp-t i:nth-child(3){animation-delay:.3s}' +
    '.acp-f{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.06)}' +
    '.acp-f textarea{flex:1;resize:none;height:44px;max-height:120px;padding:11px 14px;border-radius:22px;border:1px solid rgba(255,244,222,.16);background:rgba(255,255,255,.05);color:#fff4de;font:250 15px/1.4 Aspekta,"Helvetica Neue",Arial,sans-serif;outline:0}' +
    '.acp-f textarea:focus{border-color:#c9a96e}' +
    '.acp-f button{width:44px;height:44px;border-radius:50%;border:0;background:#c9a96e;color:#0e2723;cursor:pointer;display:grid;place-items:center;flex:none}' +
    '.acp-f button svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
    '@keyframes acpIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}' +
    '@keyframes acpT{0%,60%,100%{opacity:.3}30%{opacity:1}}' +
    '@media(max-width:640px){.acp{top:0;right:0;bottom:0;width:100vw;border-radius:0;border:0}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var scrim = document.createElement('div'); scrim.className = 'acp-scrim';
  var el = document.createElement('aside'); el.className = 'acp'; el.setAttribute('aria-label', 'Chat with Atrios AI');
  el.innerHTML = '<div class="acp-h"><div class="acp-av">A</div><div><b>Ace</b><small><i></i>Atrios AI</small></div><button class="acp-x" aria-label="Close chat">×</button></div>' +
    '<div class="acp-m" aria-live="polite"></div>' +
    '<form class="acp-f"><textarea rows="1" placeholder="Message Ace…" aria-label="Message Ace"></textarea><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"></path></svg></button></form>';
  document.body.appendChild(scrim); document.body.appendChild(el);
  var M = el.querySelector('.acp-m'), F = el.querySelector('form'), T = el.querySelector('textarea');
  var seen = {}, last = 0, timer = null, typing = null, greeted = false;
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function link(s) { return esc(s).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'); }
  function add(who, text) {
    var b = document.createElement('div'); b.className = 'acp-b ' + who; b.innerHTML = link(text);
    if (typing) M.insertBefore(b, typing); else M.appendChild(b);
    M.scrollTop = M.scrollHeight;
  }
  function showTyping(on) {
    if (on && !typing) { typing = document.createElement('div'); typing.className = 'acp-t'; typing.innerHTML = '<i></i><i></i><i></i>'; M.appendChild(typing); M.scrollTop = M.scrollHeight; }
    if (!on && typing) { typing.remove(); typing = null; }
  }
  function greet() {
    if (greeted) return; greeted = true;
    add('a', "Hi, I'm Ace from Atrios. Tell me what you're working on and I'll find the tools and perks that fit, and book any call for you.");
  }
  function poll() {
    fetch(SB + '?select=id,sender,body&order=id.asc&id=gt.' + last, { headers: H }).then(function (r) { return r.json(); }).then(function (rows) {
      if (!Array.isArray(rows)) return;
      rows.forEach(function (r) {
        last = Math.max(last, r.id);
        if (seen[r.id]) return; seen[r.id] = 1;
        if (r.sender === 'ace') { showTyping(false); add('a', r.body); } else add('u', r.body);
      });
    }).catch(function () {});
  }
  function send(text) {
    text = (text || '').trim(); if (!text) return;
    fetch(SB, { method: 'POST', headers: Object.assign({ Prefer: 'return=representation' }, H), body: JSON.stringify({ session: sid, sender: 'user', body: text.slice(0, 2000), page: (location.pathname.split('/').filter(Boolean).slice(-2).join('/') || 'stack').slice(0, 60) }) })
      .then(function (r) { return r.json(); }).then(function (rows) { if (Array.isArray(rows) && rows[0]) { seen[rows[0].id] = 1; last = Math.max(last, rows[0].id); } })
      .catch(function () {});
    add('u', text); showTyping(true);
  }
  function open(prefill) {
    scrim.classList.add('on'); el.classList.add('on');
    if (!timer) { poll(); timer = setInterval(poll, 2500); }
    setTimeout(function () {
      if (!M.querySelector('.acp-b')) greet();
      if (prefill) send(prefill);
      if (matchMedia('(min-width:641px)').matches) T.focus();
    }, 350);
  }
  function close() { scrim.classList.remove('on'); el.classList.remove('on'); }
  el.querySelector('.acp-x').onclick = close; scrim.onclick = close;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  F.addEventListener('submit', function (e) { e.preventDefault(); send(T.value); T.value = ''; });
  T.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); F.requestSubmit(); } });
  fetch(SB + '?select=id,sender,body&order=id.asc', { headers: H }).then(function (r) { return r.json(); }).then(function (rows) {
    if (!Array.isArray(rows) || !rows.length) return;
    greet(); rows.forEach(function (r) { seen[r.id] = 1; last = Math.max(last, r.id); add(r.sender === 'ace' ? 'a' : 'u', r.body); });
  }).catch(function () {});
  window.AtriosChat = { open: open };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-chat]'); if (!t) return;
    e.preventDefault(); open(t.getAttribute('data-chat'));
  });
})();
