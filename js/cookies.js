/* Aviso informativo de cookies para las páginas legales. La web no usa cookies:
   al pulsar «Entendido» se guarda esa elección en el navegador (jpm.cookies) para no volver a mostrarlo. */
(function () {
'use strict';
const KEY = 'jpm.cookies';
const me = document.currentScript;
const policy = (me && me.dataset.policy) || 'privacidad/index.html#cookies';
const T = {
  es:{title:'Esta web no usa cookies',text:'Solo recordamos tu idioma en tu dispositivo y contamos las visitas sin cookies ni datos personales. Google Maps solo se carga si tú lo pides.',ok:'Entendido',more:'Política de cookies'},
  en:{title:'This website does not use cookies',text:'We only remember your language on your device and count visits without cookies or personal data. Google Maps only loads if you ask for it.',ok:'Got it',more:'Cookie policy'},
  ne:{title:'यो वेबसाइटले कुकीज प्रयोग गर्दैन',text:'हामी तपाईंको यन्त्रमा भाषा मात्र सम्झन्छौं र कुकीज वा व्यक्तिगत डाटा बिना भ्रमण गन्छौं। Google Maps तपाईंले मागेमा मात्र खुल्छ।',ok:'बुझें',more:'कुकी नीति'}
};
let seen = false, lang = 'es';
try { seen = localStorage.getItem(KEY) === '1'; lang = localStorage.getItem('ncb-lang') || 'es'; } catch (e) {}
if (seen) return;
const t = T[lang] || T.es;
const box = document.createElement('div');
box.className = 'ckn'; box.setAttribute('role', 'region'); box.setAttribute('aria-label', t.more);
box.innerHTML = '<div class="ckn-tx"><b class="ckn-t"></b><p class="ckn-p"></p></div><div class="ckn-bt"><a class="ckn-more" href=""></a><button type="button" class="ckn-ok"></button></div>';
box.querySelector('.ckn-t').textContent = t.title;
box.querySelector('.ckn-p').textContent = t.text;
const a = box.querySelector('.ckn-more'); a.textContent = t.more; a.href = policy;
box.querySelector('.ckn-ok').textContent = t.ok;
box.querySelector('.ckn-ok').addEventListener('click', () => {
  try { localStorage.setItem(KEY, '1'); } catch (e) {}
  box.classList.add('out'); setTimeout(() => box.remove(), 350);
});
const show = () => { document.body.appendChild(box); requestAnimationFrame(() => box.classList.add('in')); };
if (document.readyState === 'complete') setTimeout(show, 600); else window.addEventListener('load', () => setTimeout(show, 600));
})();
