// ============================================================
//  EDIT YOUR DETAILS HERE
// ============================================================
const WEDDING = {
  hashtag: '#VinAlkaline',
  whatsapp: '917348903189',          // country code + number, no "+" or spaces
  music: 'assets/audio/song.m4a',    // Vaaroon (Mirzapur). Leave empty to hide the music button
  weddingTime: '2027-02-03T21:00:00+05:30',
  coupleNote:
    'Two different stories, one beautiful beginning. From little moments to a lifetime together, ' +
    'we are ready to start our forever, and it would mean the world to have you there with us.',

  venues: {
    shubham: { name: 'Shubham Inn', area: 'Allenganj, Prayagraj', map: 'https://maps.app.goo.gl/Eizd6LaibGVnLBGv9' },
    ram:     { name: 'Ram Bhawan', area: 'Allenganj, Prayagraj', map: 'https://goo.gl/maps/5gGQYkw1QcvjdCCH6' },
    ambe:    { name: 'Ambe Palace', area: 'Gorakhpur', map: 'https://maps.app.goo.gl/Tv4eu626aaveQh5x8' },
    rajshri: { name: 'Rajshri Tondon', area: 'Bank Road, Allenganj, Prayagraj', map: 'https://maps.app.goo.gl/y54taTv9XzzuErVJ6' },
  },

  // city: shown as a heading whenever it changes. art: image in the arch.
  events: [
    { name: 'Sangeet',     start: '2027-02-01T19:00', venue: 'shubham', city: 'Prayagraj', art: 'ev-sangeet.jpg' },
    { name: 'Haldi',       start: '2027-02-02T11:00', venue: 'shubham', city: 'Prayagraj', art: 'ev-haldi.jpg' },
    { name: 'Mehndi',      start: '2027-02-02T16:00', venue: 'shubham', city: 'Prayagraj', art: 'ev-mehndi.jpg' },
    { name: 'Baraat Vidai', start: '2027-02-03T08:00', venue: 'ram',    city: 'Prayagraj', art: 'car.png', artClass: 'art-car' },
    { name: 'Wedding',     start: '2027-02-03T21:00', venue: 'ambe',    city: 'Gorakhpur', art: 'ev-wedding.jpg' },
    { name: 'Vidai',       start: '2027-02-04T10:00', venue: 'ambe',    city: 'Gorakhpur', art: 'courtyard.jpg' },
    { name: 'Reception',   start: '2027-02-05T19:00', venue: 'rajshri', city: 'Prayagraj', art: 'ev-reception.jpg' },
  ],

  // Baraat Journey section (route figures from Google Maps: 288 km, 5 hr 19 min)
  journey: {
    stats: [
      { value: '288 km', label: 'Distance' },
      { value: '5 hr 20 min', label: 'Drive' },
      { value: 'Purvanchal', label: 'Expressway' },
      { value: '8:00 AM', label: 'Departure' },
    ],
    // towns marked along the road on the route map; at = how far along the trip (0 to 1)
    towns: [
      { name: 'Pratapgarh', at: 0.2 },
      { name: 'Sultanpur', at: 0.38, stop: true },
      { name: 'Purvanchal Expy', at: 0.68 },
    ],
    via: 'Prayagraj · Pratapgarh · Sultanpur · Gorakhpur, via the Purvanchal Expressway',
    steps: [
      { time: '8:00 AM', title: 'Baraat Vidai', place: 'Ram Bhawan, Prayagraj', text: 'Blessings, tilak and a grand send-off as the convoy sets out via Pratapgarh.' },
      { time: 'On the way', title: 'Pit Stop', place: 'Seeta Rasoi Dhaba, Guptarganj (Sultanpur)', text: 'A break for chai and a hearty meal before the expressway.' },
      { time: 'Onwards', title: 'Purvanchal Expressway', place: 'Sultanpur to Gorakhpur', text: 'Music, laughter and family, all the way to Gorakhpur.' },
      { time: 'Arrival', title: 'Gorakhpur', place: 'Ambe Palace, Indira Nagar', text: 'Time to rest, freshen up and get ready for the big night.' },
      { time: '9:00 PM', title: 'Baraat & Wedding', place: 'Ambe Palace, Gorakhpur', text: 'The baraat arrives in style for the jaimala and pheras.' },
      { time: 'Next day · 10 AM', title: 'Vidai', place: 'Ambe Palace, Gorakhpur', text: 'Farewells and blessings as the newlyweds head home.' },
    ],
    directions: 'https://www.google.com/maps/dir/Prayagraj,+Uttar+Pradesh/Seeta+rasoi+dhaba+and+restaurant,+near,+Ayodhya+-+Prayagraj+Rd,+Guptarganj,+Sultanpur,+Uttar+Pradesh+228151/Ambey+Palace,+Indira+Nagar,+Gorakhpur,+Uttar+Pradesh+273017/data=!4m20!4m19!1m5!1m1!1s0x398534c9b20bd49f:0xa2237856ad4041a!2m2!1d81.8546019!2d25.468338!1m5!1m1!1s0x399a717d395160df:0x9e1ccd2681c9aa0e!2m2!1d82.1204348!2d26.3712057!1m5!1m1!1s0x3991437f658afc6f:0x331367468b5a08ad!2m2!1d83.379794!2d26.7326716!3e0',
  },
};
// ============================================================

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const IST = '+05:30';

const waLink = (text) => `https://wa.me/${WEDDING.whatsapp}?text=${encodeURIComponent(text)}`;

function fmtDay(iso) {
  return new Date(iso + IST).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
}
function fmtTime(iso) {
  return new Date(iso + IST).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).toUpperCase();
}
function calLink(ev) {
  const v = WEDDING.venues[ev.venue];
  const start = new Date(ev.start + IST);
  const end = new Date(start.getTime() + 3 * 3600e3);
  const z = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${ev.name} · Vineet & Alka`,
    dates: `${z(start)}/${z(end)}`,
    location: `${v.name}, ${v.area}`,
    details: `Wedding celebrations of Vineet & Alka. Directions: ${v.map}`,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

// ---------- Content from config ----------
function renderContent() {
  $('#couple-note').textContent = WEDDING.coupleNote;
  $('#hashtag').textContent = WEDDING.hashtag;
  $('#footer-tag').textContent = WEDDING.hashtag;
  $('#wa-help').href = waLink('Hi Vineet! I had a question about the wedding: ');

  const tl = $('#timeline');
  let city = null;
  WEDDING.events.forEach((ev) => {
    const v = WEDDING.venues[ev.venue];
    if (ev.city !== city) {
      city = ev.city;
      const h = document.createElement('p');
      h.className = 'city-head reveal';
      h.textContent = city;
      tl.append(h);
    }
    const el = document.createElement('article');
    el.className = 'event reveal';
    el.innerHTML = `
      <div class="arch ${ev.artClass || ''}"><img src="assets/img/${ev.art}" alt="${ev.name} illustration" loading="lazy"></div>
      <div class="event-body">
        <p class="event-day">${fmtDay(ev.start)}</p>
        <h3>${ev.name}</h3>
        <p class="event-time">${fmtTime(ev.start)} onwards</p>
        <p class="event-venue">${v.name}<span>${v.area}</span></p>
        <div class="event-actions">
          <a class="btn" href="${v.map}" target="_blank" rel="noopener">Directions</a>
          <a class="btn" href="${calLink(ev)}" target="_blank" rel="noopener">Add to calendar</a>
        </div>
      </div>`;
    tl.append(el);
  });

  const j = WEDDING.journey;
  $('#trip-stats').innerHTML = j.stats.map((s) =>
    `<div class="stat reveal"><b>${s.value}</b><span>${s.label}</span></div>`).join('');
  $('#trip-via').textContent = `Route: ${j.via}`;

  // place each town on the curve of the route map
  const line = $('#route-line');
  const len = line.getTotalLength();
  $('.route-map').insertAdjacentHTML('beforeend', j.towns.map((t, i) => {
    const p = line.getPointAtLength(len * t.at);
    const pos = `left:${(p.x / 600) * 100}%;top:${(p.y / 240) * 100}%`;
    return `<span class="town${t.stop ? ' stop' : ''}" style="${pos}" data-at="${t.at}"></span>` +
      `<span class="town-label ${i % 2 ? 'below' : 'above'}" style="${pos}">${t.name}${t.stop ? '<small>pit stop</small>' : ''}</span>`;
  }).join(''));
  $('#itinerary').innerHTML = j.steps.map((s) => `
    <li class="step reveal">
      <span class="step-time">${s.time}</span>
      <h3>${s.title}</h3>
      <p class="step-place">${s.place}</p>
      <p>${s.text}</p>
    </li>`).join('');
  $('#journey-actions').innerHTML =
    `<a class="btn btn-solid" href="${j.directions}" target="_blank" rel="noopener">Full route on Google Maps</a>` +
    ['ram', 'ambe'].map((k) =>
      `<a class="btn" href="${WEDDING.venues[k].map}" target="_blank" rel="noopener">${WEDDING.venues[k].name}</a>`).join('');
}

// ---------- Lanterns ----------
function makeLanterns() {
  const small = innerWidth < 700;
  $$('[data-lanterns]').forEach((box) => {
    const n = Math.round(+box.dataset.lanterns * (small ? 0.6 : 1));
    for (let i = 0; i < n; i++) {
      const depth = Math.random();                 // 0 = far, 1 = near
      const s = (small ? 0.3 : 0.4) + depth * (small ? 0.8 : 1.05);
      const d = 22 + (1 - depth) * 26;             // far ones drift slower
      const l = document.createElement('span');
      l.className = 'lantern';
      l.style.cssText = [
        `--x:${(Math.random() * 100).toFixed(1)}%`,
        `--s:${s.toFixed(2)}`,
        `--d:${d.toFixed(1)}s`,
        `--delay:${(-Math.random() * d).toFixed(1)}s`,
        `--sway:${((Math.random() - 0.5) * 140).toFixed(0)}px`,
        `--o:${(0.55 + depth * 0.45).toFixed(2)}`,
        `--b:${depth < 0.25 ? 1.5 : depth > 0.9 ? 1 : 0}px`,
        `--still-y:${(Math.random() * 80 + 10).toFixed(0)}%`,
      ].join(';');
      box.append(l);
    }
  });
}

// ---------- Gate & music ----------
function setupGate() {
  const gate = $('#gate');
  const music = $('#music');
  const btn = $('#music-btn');

  if (WEDDING.music) {
    music.src = WEDDING.music;
    btn.hidden = false;
    btn.addEventListener('click', () => (music.paused ? music.play() : music.pause()));
    music.addEventListener('play', () => btn.classList.add('playing'));
    music.addEventListener('pause', () => btn.classList.remove('playing'));

    // pause when the guest switches tab, app or locks the phone; resume on return
    // only if it was playing (so a guest who muted it stays muted)
    let resumeOnReturn = false;
    const pauseAway = () => {
      if (!music.paused) { resumeOnReturn = true; music.pause(); }
    };
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pauseAway();
      else if (resumeOnReturn) { resumeOnReturn = false; music.play().catch(() => {}); }
    });
    addEventListener('pagehide', pauseAway);
  }

  // seal glows and breaks, then the flaps fold open and light floods out
  $('#open-btn').addEventListener('click', () => {
    if (gate.classList.contains('opening')) return;
    if (WEDDING.music) music.play().catch(() => {});
    gate.classList.add('opening');
    setTimeout(() => {
      gate.classList.add('open');
      document.body.classList.remove('locked');
    }, reduceMotion ? 0 : 600);
    setTimeout(() => document.body.classList.add('opened'), reduceMotion ? 0 : 1500);
    setTimeout(() => gate.classList.add('gone'), reduceMotion ? 0 : 2800);
  }, { passive: true });
}

// ---------- Scroll effects ----------
function setupScroll() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  if (reduceMotion) {
    $$('[data-scene]').forEach((s) => s.style.setProperty('--text', 1));
    $('[data-journey]').style.setProperty('--trip', 1);
    $('.route-map').classList.add('arrived');
    return;
  }

  const heroText = $('.hero-text');
  const dome = $('.hero-dome');
  const scenes = $$('[data-scene]');
  const journey = $('[data-journey]');
  const routeMap = $('.route-map');
  const routeLine = $('#route-line');
  const routeCar = $('#route-car');
  const routeLen = routeLine.getTotalLength();
  routeLine.style.strokeDasharray = routeLen;
  const towns = $$('.route-map .town');
  let ticking = false;

  const clamp = (v) => Math.max(0, Math.min(1, v));
  function update() {
    ticking = false;
    const vh = innerHeight;
    const y = scrollY;

    // hero: names drift up and fade, dome sinks a little slower than the page
    const hp = clamp(y / vh);
    heroText.style.transform = `translateY(${-hp * 90}px)`;
    heroText.style.opacity = 1 - hp * 1.3;
    if (document.body.classList.contains('opened') && dome.getAnimations().every((a) => a.playState === 'finished')) {
      dome.style.animation = 'none';
      dome.style.opacity = 1;
      dome.style.transform = `translate(-50%, ${hp * 25}%)`;
    }

    // scenes: zoom into the painting while it is pinned, fade the caption in and out
    scenes.forEach((s) => {
      const r = s.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - vh));
      s.style.setProperty('--zoom', (1 + p * 0.28).toFixed(4));
      s.style.setProperty('--text', clamp(p < 0.5 ? (p - 0.1) / 0.25 : (0.95 - p) / 0.25).toFixed(3));
    });

    // journey: the car drives towards you as the section scrolls into view
    const jr = journey.getBoundingClientRect();
    journey.style.setProperty('--trip', clamp((vh - jr.top) / (jr.height + vh * 0.1)).toFixed(4));

    // route map: the road draws itself from Prayagraj to Gorakhpur and the marker follows it
    const mr = routeMap.getBoundingClientRect();
    const rp = clamp((vh * 0.85 - mr.top) / (vh * 0.55));
    routeLine.style.strokeDashoffset = routeLen * (1 - rp);
    const pt = routeLine.getPointAtLength(routeLen * rp);
    routeCar.style.left = `${(pt.x / 600) * 100}%`;
    routeCar.style.top = `${(pt.y / 240) * 100}%`;
    routeMap.classList.toggle('arrived', rp >= 1);
    towns.forEach((t) => t.classList.toggle('passed', rp >= +t.dataset.at));
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

// ---------- Photo slideshow ----------
function setupSlides() {
  const imgs = $$('#slides img');
  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 4000);
}

// ---------- Countdown ----------
function setupCountdown() {
  const target = new Date(WEDDING.weddingTime).getTime();
  const units = Object.fromEntries($$('#countdown b').map((b) => [b.dataset.unit, b]));
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    let t = Math.max(0, Math.floor((target - Date.now()) / 1000));
    units.d.textContent = pad(Math.floor(t / 86400)); t %= 86400;
    units.h.textContent = pad(Math.floor(t / 3600)); t %= 3600;
    units.m.textContent = pad(Math.floor(t / 60));
    units.s.textContent = pad(t % 60);
  }
  tick();
  setInterval(tick, 1000);
}

// ---------- Hashtag copy ----------
function setupHashtag() {
  const btn = $('#hashtag-btn');
  btn.addEventListener('click', async () => {
    const hint = btn.querySelector('small');
    try {
      await navigator.clipboard.writeText(WEDDING.hashtag);
      hint.textContent = 'Copied!';
    } catch {
      hint.textContent = 'Press and hold to copy';
    }
    setTimeout(() => (hint.textContent = 'Tap to copy'), 2000);
  });
}

renderContent();
makeLanterns();
setupGate();
setupScroll();
setupSlides();
setupCountdown();
setupHashtag();
