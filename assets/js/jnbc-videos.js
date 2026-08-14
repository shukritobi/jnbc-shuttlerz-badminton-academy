(() => {
  if (document.getElementById('videos')) return;

  const css = `
  .video-showcase{background:#080c13}
  .video-filters{display:flex;gap:9px;flex-wrap:wrap;margin:-18px 0 28px}
  .video-filter{border:1px solid var(--line);background:#101621;color:#c7ced9;border-radius:999px;padding:9px 13px;font-weight:800;font-size:.7rem;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}
  .video-filter.active,.video-filter:hover{background:#294aff;border-color:#294aff;color:#fff}
  .video-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .training-video{position:relative;min-height:285px;border:1px solid var(--line);border-radius:19px;overflow:hidden;background:#111823;cursor:pointer;isolation:isolate}
  .training-video[hidden]{display:none}
  .training-video img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .35s ease;z-index:-2}
  .training-video:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(3,6,11,.96) 3%,rgba(4,8,14,.45) 55%,rgba(4,8,14,.12));z-index:-1}
  .training-video:hover img{transform:scale(1.035)}
  .video-play{position:absolute;top:18px;right:18px;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--red);color:#fff;font-size:1.15rem;box-shadow:0 10px 26px rgba(237,28,46,.28)}
  .video-copy{position:absolute;left:21px;right:21px;bottom:20px}
  .video-copy small{color:#8da1ff;font-weight:900;letter-spacing:.1em;text-transform:uppercase;font-size:.65rem}
  .video-copy h3{font-size:1.8rem;margin:8px 0 5px}
  .video-copy p{margin:0;color:#b7c0ce;font-size:.75rem;line-height:1.45}
  .video-note{margin-top:17px;color:#7f8998;font-size:.72rem;line-height:1.55}
  .video-modal{position:fixed;inset:0;z-index:1000;display:none;place-items:center;padding:24px;background:rgba(2,5,9,.88);backdrop-filter:blur(12px)}
  .video-modal.open{display:grid}
  .video-modal-box{width:min(1040px,100%);background:#080d15;border:1px solid rgba(255,255,255,.14);border-radius:22px;overflow:hidden;box-shadow:0 35px 100px rgba(0,0,0,.6)}
  .video-modal-head{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:17px 20px;border-bottom:1px solid var(--line)}
  .video-modal-head strong{font:800 1.25rem 'Barlow Condensed';text-transform:uppercase}
  .video-close{border:0;background:#161d29;color:#fff;width:38px;height:38px;border-radius:10px;cursor:pointer;font-size:1.1rem}
  .video-frame{aspect-ratio:16/9;background:#000}
  .video-frame iframe{width:100%;height:100%;border:0;display:block}
  @media(max-width:900px){.video-gallery{grid-template-columns:1fr 1fr}}
  @media(max-width:600px){.video-gallery{grid-template-columns:1fr}.training-video{min-height:250px}.video-modal{padding:10px}.video-modal-head{padding:13px 14px}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const videos = [
    {cat:'technique',id:'1xNjIescjNjdE1h7fCRRfwO2DPegkKm2m',title:'Junior Net Lift Technique',label:'Technique',desc:'Short, focused technical coaching for developing correct contact and control.',alt:'Junior net lift badminton coaching'},
    {cat:'footwork',id:'1ES9PkjMy_m9jHY4zekgvXa5xQZ4eYL2L',title:'Baseline Footwork',label:'Footwork',desc:'Movement training designed to build balance, recovery and efficient court coverage.',alt:'Badminton baseline footwork training'},
    {cat:'footwork',id:'1Q2RlF5H_U8HznDEecvNPuqT8MvfTCY5k',title:'Junior Agility Drill',label:'Footwork & Agility',desc:'Fast movement work that develops coordination and confident court movement.',alt:'Junior badminton agility drill'},
    {cat:'multishuttle',id:'1yMCXqPcveOBs_OAvUmspceZ46Dkekkdq',title:'Multi-Shuttle Defence',label:'Multi-Shuttle',desc:'Repeated defensive patterns for reactions, consistency and movement under pressure.',alt:'Multi-shuttle badminton defence drill'},
    {cat:'fitness',id:'1BRJbp1131_7COTFW91ggxmdseLutWcdv',title:'Junior Group Warm-Up',label:'Fitness & Conditioning',desc:'Fun physical preparation that develops energy, coordination and group engagement.',alt:'Junior badminton group warm up'},
    {cat:'match',id:'1D-XnEBucsV90Dmmf4t7zVwWTcFr9tKrN',title:'Doubles Match Play',label:'Match Play',desc:'Putting movement, shot selection and tactical awareness into a live rally environment.',alt:'Badminton doubles match play'}
  ];

  const cardHtml = v => `<article class="training-video" tabindex="0" role="button" data-category="${v.cat}" data-video-id="${v.id}" data-title="${v.title}"><img loading="lazy" decoding="async" src="https://drive.google.com/thumbnail?id=${v.id}&sz=w1000" alt="${v.alt}"><span class="video-play">▶</span><div class="video-copy"><small>${v.label}</small><h3>${v.title}</h3><p>${v.desc}</p></div></article>`;

  const section = document.createElement('section');
  section.className = 'section video-showcase';
  section.id = 'videos';
  section.innerHTML = `<div class="wrap"><div class="section-head"><div><span class="kicker">Training in action</span><h2>See how JNBC<br>builds players.</h2></div><p>Real academy training footage covering technique, footwork, multi-shuttle drills, conditioning and match play. Videos are hosted on Google Drive and only load after you choose to watch.</p></div><div class="video-filters" aria-label="Filter training videos"><button class="video-filter active" data-filter="all">All</button><button class="video-filter" data-filter="technique">Technique</button><button class="video-filter" data-filter="footwork">Footwork</button><button class="video-filter" data-filter="multishuttle">Multi-Shuttle</button><button class="video-filter" data-filter="fitness">Fitness</button><button class="video-filter" data-filter="match">Match Play</button></div><div class="video-gallery">${videos.map(cardHtml).join('')}</div><p class="video-note">Lightweight by design: only preview images load with the page. The Google Drive video player is created only when a visitor clicks a video.</p></div>`;

  const testimonials = document.getElementById('testimonials');
  if (testimonials) testimonials.parentNode.insertBefore(section, testimonials);
  else document.querySelector('main')?.appendChild(section);

  const navTraining = document.querySelector('.links a[href="#training"]');
  if (navTraining && !document.querySelector('.links a[href="#videos"]')) {
    const link = document.createElement('a');
    link.href = '#videos';
    link.textContent = 'Videos';
    navTraining.after(link);
  }

  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.id = 'videoModal';
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML = `<div class="video-modal-box"><div class="video-modal-head"><strong id="videoModalTitle">JNBC Training Video</strong><button class="video-close" id="videoClose" type="button" aria-label="Close video">✕</button></div><div class="video-frame" id="videoFrame"></div></div>`;
  document.body.appendChild(modal);

  const frame = document.getElementById('videoFrame');
  const title = document.getElementById('videoModalTitle');
  const openVideo = card => {
    const id = card.dataset.videoId;
    title.textContent = card.dataset.title || 'JNBC Training Video';
    frame.innerHTML = `<iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  };
  const closeVideo = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    frame.innerHTML = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.training-video').forEach(card => {
    card.addEventListener('click', () => openVideo(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(card); }
    });
  });
  document.getElementById('videoClose').onclick = closeVideo;
  modal.addEventListener('click', e => { if (e.target === modal) closeVideo(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeVideo(); });

  document.querySelectorAll('.video-filter').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.video-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.training-video').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));
})();
