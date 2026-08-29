/* Malades agentligi — portfolio sahifalaridagi reklama bloki.
   Bitta qator bilan ulanadi: <script src="agentlik/reklama.js" defer></script>
   Sahifa kodiga tegilmaydi, hamma narsa shu fayldan boshqariladi.       */
(function () {
  if (location.pathname.indexOf('/agentlik') === 0) return;   // o'z sahifasi
  var YOPILDI = 'agentlik_reklama_yopildi';
  try {
    var v = localStorage.getItem(YOPILDI);
    if (v && (Date.now() - +v) < 7 * 24 * 3600 * 1000) return;
  } catch (e) {}

  var uslub = document.createElement('style');
  uslub.textContent = [
    '.agr{position:fixed;right:18px;bottom:18px;z-index:9999;width:min(340px,',
    'calc(100vw - 36px));background:#12151B;border:1px solid #262C36;',
    'border-radius:18px;padding:18px 20px;color:#F2F5F9;',
    'font:15px/1.5 Manrope,-apple-system,Segoe UI,sans-serif;',
    'box-shadow:0 30px 60px -30px rgba(0,0,0,.85);transform:translateY(24px);',
    'opacity:0;transition:opacity .5s,transform .5s}',
    '.agr.kor{opacity:1;transform:none}',
    '.agr b{display:block;font-size:17px;letter-spacing:-.01em;margin-bottom:6px}',
    '.agr p{margin:0 0 14px;color:#8B95A7;font-size:14px}',
    '.agr a.t{display:inline-block;background:#FF5A1F;color:#0B0D11;',
    'font-weight:700;font-size:14px;padding:11px 18px;border-radius:999px;',
    'text-decoration:none}',
    '.agr a.t:hover{background:#E14A12;color:#fff}',
    '.agr .x{position:absolute;top:10px;right:12px;color:#8B95A7;',
    'cursor:pointer;font-size:18px;line-height:1;background:none;border:0}',
    '.agr .n{display:inline-block;font-size:11px;letter-spacing:.14em;',
    'text-transform:uppercase;color:#FF5A1F;font-weight:700;margin-bottom:8px}',
    '@media(max-width:600px){.agr{right:10px;left:10px;bottom:10px}}'
  ].join('');
  document.head.appendChild(uslub);

  var q = document.createElement('div');
  q.className = 'agr';
  q.innerHTML =
    '<button class="x" aria-label="Yopish">&times;</button>' +
    '<span class="n">Yangi xizmat</span>' +
    '<b>Ijtimoiy tarmoqlaringizni yuritib beramiz</b>' +
    '<p>Tahlil, 30 kunlik kontent rejasi, posterlar, sayt va bot. ' +
    'Faqat kerakli xizmatni tanlaysiz — narx darrov chiqadi.</p>' +
    '<a class="t" href="/agentlik/">Narxni ko\'rish</a>';
  document.body.appendChild(q);

  q.querySelector('.x').addEventListener('click', function () {
    q.classList.remove('kor');
    setTimeout(function () { q.remove(); }, 400);
    try { localStorage.setItem(YOPILDI, Date.now()); } catch (e) {}
  });

  function korsat() {
    if (scrollY > 400 || innerHeight > document.body.scrollHeight - 100) {
      q.classList.add('kor');
      removeEventListener('scroll', korsat);
    }
  }
  addEventListener('scroll', korsat, { passive: true });
  setTimeout(korsat, 6000);
})();
