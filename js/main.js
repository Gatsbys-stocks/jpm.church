/* Nepali Church Barcelona · idioma, cuenta atrás, versículos, oración, mapa y aviso de cookies */
(function(){
/* ---------- i18n ---------- */
const T = {
 en:{
  "tb.verse":"“The church of the living God”","nav.home":"Home","nav.about":"About","nav.services":"Services","nav.prayer":"Prayer","nav.visit":"Visit","nav.contact":"Contact","hdr.cta":"This week",
  "hero.eyebrow":"The Church of the Living God","hero.title":"Jesus Christ is <i>Lord and Saviour</i>",
  "hero.lede":"A Nepali family in Barcelona worshipping the living God. Come as you are: every Sunday at 15:00 we welcome you in L'Hospitalet.",
  "hero.cta1":"Come this Sunday","hero.cta2":"Services on Facebook","hero.badge":"people follow us","st2.t":"Explore",
  "ev.next":"Next service","ev.live":"LIVE NOW","ev.now":"Service in progress","ev.dir":"Get directions",
  "cd.d":"days","cd.h":"hours","cd.m":"min","cd.s":"sec",
  "about.eyebrow":"JPM Barcelona · since 2023","about.title":"We are a church that believes in Jesus and loves God and people",
  "about.p1":"Nepali Church Barcelona is part of JPM Spain, The Church of the Living God, present in Spain since 2016. Since 2023 we gather in Barcelona as a Nepali Christian community to worship, pray and study God's Word together.",
  "about.p2":"We believe God changes lives through his Word and his Spirit. If you are far from home, here you will find a family that speaks your language and shares your faith.",
  "stat.fb":"followers on Facebook","stat.spain":"JPM Spain","stat.bcn":"JPM Barcelona",
  "ro.eyebrow":"Nepal · Spain","ro.title":"Two countries, one family in Christ","ro.p":"We bring our faith, our language and our culture from Nepal to Barcelona, and we open our doors to everyone who lives in this city.","ro.np":"Nepal","ro.es":"Spain",
  "ga.eyebrow":"Gallery","ga.title":"Moments from our church","ga.p":"More photos and videos from every Sunday on our Instagram and Facebook.","ga.ig":"Follow us on Instagram","nav.videos":"Videos","re.eyebrow":"Videos","re.title":"Worship on video","re.p":"Watch our worship videos on Facebook and Instagram.","re.5":"Worship before the cross","swipe":"Swipe","map.live":"View interactive map","map.note":"The interactive map is from Google Maps and only loads if you tap it.","ft.sunday":"Service every Sunday at 15:00","l.aviso":"Legal notice","l.priv":"Privacy and cookies","ck.title":"This website does not use cookies","ck.text":"We only remember your language on your device and count visits without cookies or personal data. Google Maps only loads if you ask for it.","ck.ok":"Got it","ck.more":"Cookie policy","tab.home":"Home","tab.contact":"Contact","re.1":"Come, let's worship Him together","re.d1":"September 2026","re.d2":"August 2026","re.3":"Sunday worship","re.d3":"March 2024","re.4":"Outdoor prayer","re.d4":"March 2024","so.eyebrow":"Social media","so.title":"Follow us and get in touch","so.follow":"Follow","so.write":"Message","wk.every":"Every Sunday","about.tag":"Part of the JPM Spain family",
  "wk.eyebrow":"Every week","wk.title":"This week at church","wk.lede":"Worship, prayer and God's Word. In person in L'Hospitalet or from home on Facebook.",
  "day.sat":"Saturday","day.sun":"Sunday",
  "wk.c1.t":"Sunday service","wk.c1.p":"We meet every Sunday at 15:00 at Carrer de Pau Sans, 22. Arrive a few minutes early and we will welcome you at the door.","wk.c1.b":"Plan your visit",
  "wk.c2.t":"Live services","wk.c2.p":"Can't make it? Follow the live streams and watch past messages on our Facebook page.","wk.c2.b":"Watch the latest video",
  "wk.c3.t":"Worship and culture","wk.c3.p":"We celebrate our faith with music and traditional Nepali dance. Our culture is also a way of giving thanks to God.","wk.c3.b":"See photos",
  "st.eyebrow":"For you","st.title":"Take the next step",
  "st.1.t":"How can I know Jesus?","st.1.p":"“For God so loved the world…” (John 3:16). If you want to know more, let's talk, no strings attached.","st.1.b":"Talk to us",
  "st.2.t":"Ask for prayer","st.2.p":"Tell us what you would like us to pray for. We will walk with you through whatever you are facing.","st.2.b":"Send a request",
  "st.3.t":"Your first visit","st.3.p":"What to expect, when to arrive and how to find us in L'Hospitalet.","st.3.b":"See details",
  "v.eyebrow":"Word of God",
  "v.1":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.","v.1c":"John 3:16",
  "v.2":"Come unto me, all ye that labour and are heavy laden, and I will give you rest.","v.2c":"Matthew 11:28",
  "v.3":"The Lord is my shepherd; I shall not want.","v.3c":"Psalm 23:1",
  "v.4":"The house of God, which is the church of the living God, the pillar and ground of the truth.","v.4c":"1 Timothy 3:15",
  "pr.eyebrow":"Prayer request","pr.title":"How can we pray for you?","pr.lede":"Write your request and WhatsApp will open with the message ready to send to the church.",
  "pr.name":"Your name (optional)","pr.text":"Your request","pr.ph":"For example: for my family in Nepal, for work, for health…","pr.send":"Send via WhatsApp","pr.note":"Only the church team will see your message.",
  "vi.eyebrow":"Visit us","vi.title":"We look forward to seeing you this Sunday","vi.hours":"Sunday · 15:00","vi.hours2":"Services open to everyone","vi.map":"Open in Google Maps","copy":"Copy","copied":"Copied",
  "fq.1q":"Can I come if I'm not a member?","fq.1a":"Yes. Everyone is welcome, whether or not you know the Christian faith. No sign-up needed.",
  "fq.2q":"What happens during the service?","fq.2a":"It includes worship, prayer and Bible preaching. We suggest arriving 10 minutes early to say hello.",
  "fq.3q":"Can I follow the service from home?","fq.3a":"Yes. We post live streams and videos on our Facebook page, Nepali Church Barcelona.",
  "fq.4q":"How do I contact the church?","fq.4a":"Call or WhatsApp us on +34 624 492 174, email jpmspain.barcelona@gmail.com or message us on Instagram or Facebook.",
  "ft.about":"JPM Barcelona · The Church of the Living God. A Nepali family worshipping Jesus Christ in Barcelona.","ft.contact":"Contact","ft.services":"Services","ft.live":"Live streams and videos","ft.links":"Links","ft.pray":"Ask for prayer","ft.rights":"All rights reserved.",
  "wa.msg":"Prayer request"
 },
 ne:{
  "tb.verse":"«जीवित परमेश्वरको मण्डली»","nav.home":"गृहपृष्ठ","nav.about":"हाम्रो बारेमा","nav.services":"आराधना","nav.prayer":"प्रार्थना","nav.visit":"भेट्न आउनुहोस्","nav.contact":"सम्पर्क","hdr.cta":"यो हप्ता",
  "hero.eyebrow":"जीवित परमेश्वरको मण्डली","hero.title":"येशू ख्रीष्ट <i>प्रभु र मुक्तिदाता</i> हुनुहुन्छ",
  "hero.lede":"बार्सिलोनामा जीवित परमेश्वरको आराधना गर्ने एउटा नेपाली परिवार। जस्तो हुनुहुन्छ त्यस्तै आउनुहोस्, हरेक आइतबार दिउँसो ३ बजे L'Hospitalet मा हामी तपाईंलाई स्वागत गर्छौं।",
  "hero.cta1":"यो आइतबार आउनुहोस्","hero.cta2":"फेसबुकमा आराधना","hero.badge":"जनाले फलो गर्छन्","st2.t":"हेर्नुहोस्",
  "ev.next":"अर्को आराधना","ev.live":"प्रत्यक्ष","ev.now":"आराधना चलिरहेको छ","ev.dir":"बाटो हेर्नुहोस्",
  "cd.d":"दिन","cd.h":"घण्टा","cd.m":"मिनेट","cd.s":"सेकेन्ड",
  "about.eyebrow":"JPM बार्सिलोना · २०२३ देखि","about.title":"हामी येशूमा विश्वास गर्ने, परमेश्वर र मानिसहरूलाई प्रेम गर्ने मण्डली हौं",
  "about.p1":"नेपाली चर्च बार्सिलोना JPM Spain, The Church of the Living God को भाग हो, जुन २०१६ देखि स्पेनमा छ। २०२३ देखि हामी बार्सिलोनामा नेपाली ख्रीष्टियन समुदायको रूपमा आराधना, प्रार्थना र परमेश्वरको वचन अध्ययन गर्न भेला हुन्छौं।",
  "about.p2":"हामी विश्वास गर्छौं कि परमेश्वरले आफ्नो वचन र आत्माद्वारा जीवन बदल्नुहुन्छ। घरदेखि टाढा हुनुहुन्छ भने, यहाँ तपाईंको भाषा बोल्ने र तपाईंको विश्वास बाँड्ने परिवार पाउनुहुनेछ।",
  "stat.fb":"फेसबुक फलोअर्स","stat.spain":"JPM Spain","stat.bcn":"JPM बार्सिलोना",
  "ro.eyebrow":"नेपाल · स्पेन","ro.title":"दुई देश, ख्रीष्टमा एउटै परिवार","ro.p":"हामी नेपालबाट हाम्रो विश्वास, भाषा र संस्कृति बार्सिलोनामा ल्याउँछौं, र यस सहरमा बस्ने सबैका लागि ढोका खुला राख्छौं।","ro.np":"नेपाल","ro.es":"स्पेन",
  "ga.eyebrow":"ग्यालरी","ga.title":"हाम्रो मण्डलीका क्षणहरू","ga.p":"हरेक आइतबारका थप फोटो र भिडियो हाम्रो इन्स्टाग्राम र फेसबुकमा।","ga.ig":"इन्स्टाग्राममा फलो गर्नुहोस्","nav.videos":"भिडियो","re.eyebrow":"भिडियो","re.title":"भिडियोमा आराधना","re.p":"फेसबुक र इन्स्टाग्राममा हाम्रा आराधनाका भिडियो हेर्नुहोस्।","re.5":"क्रूसको अगाडि आराधना","swipe":"स्वाइप गर्नुहोस्","map.live":"अन्तरक्रियात्मक नक्सा हेर्नुहोस्","map.note":"अन्तरक्रियात्मक नक्सा Google Maps को हो र तपाईंले थिच्नुभयो भने मात्र खुल्छ।","ft.sunday":"हरेक आइतबार दिउँसो ३ बजे आराधना","l.aviso":"कानुनी सूचना","l.priv":"गोपनीयता र कुकीज","ck.title":"यो वेबसाइटले कुकीज प्रयोग गर्दैन","ck.text":"हामी तपाईंको यन्त्रमा भाषा मात्र सम्झन्छौं र कुकीज वा व्यक्तिगत डाटा बिना भ्रमण गन्छौं। Google Maps तपाईंले मागेमा मात्र खुल्छ।","ck.ok":"बुझें","ck.more":"कुकी नीति","tab.home":"गृह","tab.contact":"सम्पर्क","re.1":"आउनुहोस्, सँगै उहाँको आराधना गरौं","re.d1":"सेप्टेम्बर २०२६","re.d2":"अगस्ट २०२६","re.3":"आइतबारको आराधना","re.d3":"मार्च २०२४","re.4":"बाहिर प्रार्थना","re.d4":"मार्च २०२४","so.eyebrow":"सामाजिक सञ्जाल","so.title":"हामीलाई फलो गर्नुहोस् र सम्पर्क गर्नुहोस्","so.follow":"फलो","so.write":"सन्देश","wk.every":"हरेक आइतबार","about.tag":"JPM Spain परिवारको भाग",
  "wk.eyebrow":"हरेक हप्ता","wk.title":"यो हप्ता मण्डलीमा","wk.lede":"आराधना, प्रार्थना र परमेश्वरको वचन। L'Hospitalet मा प्रत्यक्ष वा घरबाट फेसबुकमा।",
  "day.sat":"शनिबार","day.sun":"आइतबार",
  "wk.c1.t":"आइतबारे आराधना","wk.c1.p":"हामी हरेक आइतबार दिउँसो ३ बजे Carrer de Pau Sans, 22 मा भेला हुन्छौं। केही मिनेट अघि आउनुहोस्, हामी ढोकामै स्वागत गर्छौं।","wk.c1.b":"भ्रमणको योजना",
  "wk.c2.t":"प्रत्यक्ष आराधना","wk.c2.p":"आउन सक्नुहुन्न? हाम्रो फेसबुक पेजमा प्रत्यक्ष प्रसारण र पुराना सन्देशहरू हेर्नुहोस्।","wk.c2.b":"पछिल्लो भिडियो हेर्नुहोस्",
  "wk.c3.t":"आराधना र संस्कृति","wk.c3.p":"हामी संगीत र परम्परागत नेपाली नृत्यद्वारा विश्वास मनाउँछौं। हाम्रो संस्कृति पनि परमेश्वरलाई धन्यवाद दिने एउटा तरिका हो।","wk.c3.b":"फोटो हेर्नुहोस्",
  "st.eyebrow":"तपाईंको लागि","st.title":"अर्को कदम चाल्नुहोस्",
  "st.1.t":"म येशूलाई कसरी चिन्न सक्छु?","st.1.p":"«परमेश्वरले संसारलाई यति साह्रो प्रेम गर्नुभयो…» (यूहन्ना ३:१६)। अझ जान्न चाहनुहुन्छ भने, हामीसँग कुरा गर्नुहोस्।","st.1.b":"हामीसँग कुरा गर्नुहोस्",
  "st.2.t":"प्रार्थना माग्नुहोस्","st.2.p":"हामीले केका लागि प्रार्थना गरौं भन्नुहोस्। तपाईं जे भोगिरहनुभएको छ, हामी साथमा छौं।","st.2.b":"अनुरोध पठाउनुहोस्",
  "st.3.t":"तपाईंको पहिलो भ्रमण","st.3.p":"के अपेक्षा गर्ने, कति बजे आउने र L'Hospitalet मा हामीलाई कसरी भेट्टाउने।","st.3.b":"विवरण हेर्नुहोस्",
  "v.eyebrow":"परमेश्वरको वचन",
  "v.1":"किनकि परमेश्वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्नो एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्वास गर्ने कोही पनि नाश नहोस्, तर अनन्त जीवन पाओस्।","v.1c":"यूहन्ना ३:१६",
  "v.2":"हे सबै थाकेका र भारी बोझले दबिएका हो, मकहाँ आओ, र म तिमीहरूलाई विश्राम दिनेछु।","v.2c":"मत्ती ११:२८",
  "v.3":"परमप्रभु मेरा गोठाला हुनुहुन्छ, मलाई कुनै कुराको खाँचो हुनेछैन।","v.3c":"भजनसंग्रह २३:१",
  "v.4":"परमेश्वरको घराना, जुन जीवित परमेश्वरको मण्डली हो, सत्यको खाँबो र जग।","v.4c":"१ तिमोथी ३:१५",
  "pr.eyebrow":"प्रार्थना अनुरोध","pr.title":"हामी तपाईंको लागि कसरी प्रार्थना गरौं?","pr.lede":"आफ्नो अनुरोध लेख्नुहोस्, र मण्डलीलाई पठाउन तयार सन्देशसहित WhatsApp खुल्नेछ।",
  "pr.name":"तपाईंको नाम (ऐच्छिक)","pr.text":"तपाईंको अनुरोध","pr.ph":"जस्तै: नेपालमा मेरो परिवारको लागि, कामको लागि, स्वास्थ्यको लागि…","pr.send":"WhatsApp बाट पठाउनुहोस्","pr.note":"तपाईंको सन्देश मण्डलीको टोलीले मात्र हेर्नेछ।",
  "vi.eyebrow":"भेट्न आउनुहोस्","vi.title":"यो आइतबार हामी तपाईंलाई पर्खिरहेका छौं","vi.hours":"आइतबार · १५:००","vi.hours2":"आराधना सबैको लागि खुला","vi.map":"Google Maps मा खोल्नुहोस्","copy":"कपी","copied":"कपी भयो",
  "fq.1q":"सदस्य नभए पनि आउन सक्छु?","fq.1a":"हो। ख्रीष्टियन विश्वास चिन्नुहोस् वा नचिन्नुहोस्, सबैलाई स्वागत छ। दर्ता गर्नु पर्दैन।",
  "fq.2q":"आराधनामा के हुन्छ?","fq.2a":"आराधना, प्रार्थना र बाइबलको प्रचार हुन्छ। भेटघाटका लागि १० मिनेट अघि आउन सुझाव दिन्छौं।",
  "fq.3q":"घरबाट आराधना हेर्न सकिन्छ?","fq.3a":"हो। हामी हाम्रो फेसबुक पेज Nepali Church Barcelona मा प्रत्यक्ष प्रसारण र भिडियो राख्छौं।",
  "fq.4q":"मण्डलीसँग कसरी सम्पर्क गर्ने?","fq.4a":"+34 624 492 174 मा फोन वा WhatsApp गर्नुहोस्, jpmspain.barcelona@gmail.com मा इमेल पठाउनुहोस्, वा इन्स्टाग्राम/फेसबुकमा सन्देश पठाउनुहोस्।",
  "ft.about":"JPM बार्सिलोना · जीवित परमेश्वरको मण्डली। बार्सिलोनामा येशू ख्रीष्टको आराधना गर्ने नेपाली परिवार।","ft.contact":"सम्पर्क","ft.services":"आराधना","ft.live":"प्रत्यक्ष र भिडियो","ft.links":"लिंकहरू","ft.pray":"प्रार्थना माग्नुहोस्","ft.rights":"सर्वाधिकार सुरक्षित।",
  "wa.msg":"प्रार्थना अनुरोध"
 }
};
const ES = {"ev.now":"Culto en curso","copied":"Copiado","wa.msg":"Petición de oración","ck.title":"Esta web no usa cookies","ck.text":"Solo recordamos tu idioma en tu dispositivo y contamos las visitas sin cookies ni datos personales. Google Maps solo se carga si tú lo pides.","ck.ok":"Entendido","ck.more":"Política de cookies"};
document.querySelectorAll("[data-i18n]").forEach(el=>{ES[el.dataset.i18n]=el.textContent});
document.querySelectorAll("[data-i18n-html]").forEach(el=>{ES[el.dataset.i18nHtml]=el.innerHTML});
document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ES[el.dataset.i18nPh]=el.placeholder});
T.es = ES;
let lang = "es";
const t = k => (T[lang] && T[lang][k]) || ES[k] || k;
function setLang(l){
  lang = T[l] ? l : "es";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n)});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{el.innerHTML=t(el.dataset.i18nHtml)});
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{el.placeholder=t(el.dataset.i18nPh)});
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.l===lang));
  try{localStorage.setItem("ncb-lang",lang)}catch(e){}
  tick(); buildWa(); if(window.__ckFill) window.__ckFill();
}
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.l)));

/* ---------- mobile menu ---------- */
const nav=document.getElementById("nav"), mb=document.getElementById("menuBtn");
mb.addEventListener("click",()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")}});

/* ---------- next service countdown (hora de Madrid) ---------- */
const SLOTS=[{dow:0,h:15,m:0,key:"day.sun"}];
const LIVE_MIN=120;
const fmt=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
function madridNow(){
  const p={}; fmt.formatToParts(new Date()).forEach(x=>p[x.type]=x.value);
  return Date.UTC(+p.year,+p.month-1,+p.day,+p.hour%24,+p.minute,+p.second);
}
const locales={es:"es-ES",en:"en-GB",ne:"ne-NP"};
const $=id=>document.getElementById(id);
const pad=n=>String(n).padStart(2,"0");
function tick(){
  const now=madridNow(), d0=new Date(now);
  let best=null, live=null;
  for(let k=-1;k<=7;k++){
    for(const s of SLOTS){
      const c=Date.UTC(d0.getUTCFullYear(),d0.getUTCMonth(),d0.getUTCDate()+k,s.h,s.m);
      if(new Date(c).getUTCDay()!==s.dow) continue;
      if(now>=c && now<c+LIVE_MIN*60000) live={c,s};
      if(c>now && (!best||c<best.c)) best={c,s};
    }
  }
  const show=live||best, dt=new Date(show.c);
  $("dDay").textContent=dt.getUTCDate();
  $("dMon").textContent=dt.toLocaleDateString(locales[lang],{month:"short",timeZone:"UTC"}).replace(".","");
  $("evWhen").textContent=t(show.s.key)+" · "+pad(show.s.h)+":"+pad(show.s.m);
  $("livePill").hidden=!live;
  $("evLabel").textContent=live?t("ev.now"):t("ev.next");
  $("countdown").hidden=!!live;
  if(!live){
    let s=Math.max(0,Math.floor((best.c-now)/1000));
    $("cD").textContent=Math.floor(s/86400); s%=86400;
    $("cH").textContent=pad(Math.floor(s/3600)); s%=3600;
    $("cM").textContent=pad(Math.floor(s/60));
    $("cS").textContent=pad(s%60);
  }
}
setInterval(tick,1000);

/* ---------- verses ---------- */
const vs=$("verses"), slides=[...vs.children], dots=$("vDots");
slides.forEach((_,i)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label",String(i+1));b.addEventListener("click",()=>go(i));dots.appendChild(b)});
let cur=0;
function go(i){cur=(i+slides.length)%slides.length;vs.scrollTo({left:slides[cur].offsetLeft-vs.offsetLeft,behavior:"smooth"});mark()}
function mark(){[...dots.children].forEach((d,i)=>d.setAttribute("aria-current",i===cur))}
vs.addEventListener("scroll",()=>{const i=Math.round(vs.scrollLeft/vs.clientWidth);if(i!==cur){cur=i;mark()}},{passive:true});
$("vPrev").addEventListener("click",()=>{go(cur-1);stopAuto()});
$("vNext").addEventListener("click",()=>{go(cur+1);stopAuto()});
mark();
let auto=null;
const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function stopAuto(){if(auto){clearInterval(auto);auto=null}}
if(!reduce){auto=setInterval(()=>go(cur+1),7000);vs.addEventListener("pointerdown",stopAuto);vs.addEventListener("focus",stopAuto)}

/* ---------- prayer -> WhatsApp ---------- */
const prName=$("prName"), prText=$("prText"), prSend=$("prSend");
function buildWa(){
  const txt=prText.value.trim(), name=prName.value.trim();
  const msg="🙏 "+t("wa.msg")+(name?" · "+name:"")+"\n\n"+txt;
  prSend.href="https://wa.me/34624492174?text="+encodeURIComponent(msg);
  prSend.setAttribute("aria-disabled", txt.length<3);
}
[prName,prText].forEach(el=>el.addEventListener("input",buildWa));
$("prayerForm").addEventListener("submit",e=>e.preventDefault());

/* ---------- copy phone ---------- */
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>{
  const done=()=>{b.textContent=t("copied");setTimeout(()=>b.textContent=t("copy"),1600)};
  try{navigator.clipboard.writeText(b.dataset.copy).then(done,()=>{})}catch(e){}
}));

/* ---------- map: Google Maps solo al pulsar ---------- */
const GMAPS_EMBED="https://www.google.com/maps?q=Carrer%20de%20Pau%20Sans%2C%2022%2C%2008901%20L'Hospitalet%20de%20Llobregat&z=17&output=embed";
const GMAPS_LINK="https://www.google.com/maps/search/?api=1&query=Carrer+de+Pau+Sans+22+08901+L%27Hospitalet+de+Llobregat";
$("mapLive").addEventListener("click",()=>{
  let framed=false; try{framed=window.self!==window.top}catch(e){framed=true}
  if(framed){ const a=document.createElement("a"); a.href=GMAPS_LINK; a.target="_blank"; a.rel="noopener"; document.body.appendChild(a); a.click(); a.remove(); return; }
  const f=document.createElement("iframe"); f.src=GMAPS_EMBED; f.title="Google Maps · Carrer de Pau Sans, 22"; f.loading="lazy"; f.referrerPolicy="no-referrer-when-downgrade"; f.allowFullscreen=true;
  const box=$("mapbox"); box.appendChild(f); box.classList.add("live");
});

/* ---------- aviso de cookies (informativo) ---------- */
(function(){
  const KEY="jpm.cookies"; let seen=false;
  try{seen=localStorage.getItem(KEY)==="1"}catch(e){}
  if(seen) return;
  const box=document.createElement("div"); box.className="ckn"; box.setAttribute("role","region");
  box.innerHTML='<div class="ckn-tx"><b class="ckn-t"></b><p class="ckn-p"></p></div><div class="ckn-bt"><a class="ckn-more" href="privacidad/index.html#cookies"></a><button type="button" class="ckn-ok"></button></div>';
  const fill=()=>{box.setAttribute("aria-label",t("ck.more"));box.querySelector(".ckn-t").textContent=t("ck.title");box.querySelector(".ckn-p").textContent=t("ck.text");box.querySelector(".ckn-more").textContent=t("ck.more");box.querySelector(".ckn-ok").textContent=t("ck.ok")};
  fill(); window.__ckFill=fill;
  box.querySelector(".ckn-ok").addEventListener("click",()=>{try{localStorage.setItem(KEY,"1")}catch(e){} box.classList.add("out"); setTimeout(()=>box.remove(),350)});
  const show=()=>{document.body.appendChild(box);requestAnimationFrame(()=>box.classList.add("in"))};
  if(document.readyState==="complete") setTimeout(show,700); else window.addEventListener("load",()=>setTimeout(show,700));
})();

/* ---------- tab bar active ---------- */
const tabs=[...document.querySelectorAll('.tabbar a[href^="#"]')];
const secs=tabs.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){tabs.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(s=>io.observe(s))}

/* ---------- init ---------- */
let saved=null; try{saved=localStorage.getItem("ncb-lang")}catch(e){}
setLang(saved||"es");
})();
