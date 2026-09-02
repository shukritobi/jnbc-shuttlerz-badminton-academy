(() => {
  const archiveItems = [{"id":"praveen-tamil-vizha-2026","year":2026,"person":"Praveenthen","category":"achievement","title":"Tamil Vizha Social Men Double 2026","subtitle":"Champion","image":"assets/images/archive/praveen-achievement-02.webp","note":"Coach Praveenthen — Tamil Vizha Social Men Double 2026 Champion."},{"id":"praveen-segi-team-2025","year":2025,"person":"Praveenthen","category":"achievement","title":"SEGi Open Team Event 2025","subtitle":"1st Runner-Up","image":"assets/images/archive/praveen-achievement-01.webp","note":"Coach Praveenthen — SEGi Open Team Event 2025, 1st Runner-Up."},{"id":"kavisha-msu-2026","year":2026,"person":"Kavisha","category":"achievement","title":"MSU University Badminton Championships 2026","subtitle":"Women’s Singles Champion","image":"assets/images/archive/2026-kavisha-msu-womens-singles-champion.webp","note":"Coach Kavisha — MSU University Badminton Championships 2026, Women’s Singles Champion."},{"id":"nantha-singles-2026","year":2026,"person":"Nantha Kumar","category":"achievement","title":"Men’s Singles Champion","subtitle":"Badminton Tournament 2026","image":"assets/images/archive/2026-nantha-mens-singles-champion.webp","note":"Coach Nantha — Men’s Singles Champion, badminton tournament in 2026."},{"id":"nantha-doubles-2026","year":2026,"person":"Nantha Kumar","category":"achievement","title":"Men’s Doubles — 3rd Place","subtitle":"Badminton Tournament 2026","image":"assets/images/archive/2026-nantha-mens-doubles-third-place.webp","note":"Coach Nantha — Men’s Doubles, third place at a badminton tournament in 2026."},{"id":"justin-perak-singles-2025","year":2025,"person":"Justin Nathan","category":"achievement","title":"Perak Badminton Tournament Championships","subtitle":"Men’s Veteran Singles Champion","image":"assets/images/archive/2025-justin-perak-veteran-singles-champion.webp","note":"Coach Justin — 2025 Men’s Veteran Singles Champion at the Perak Badminton Tournament Championships."},{"id":"justin-veteran-doubles-2025","year":2025,"person":"Justin Nathan","category":"achievement","title":"Veteran Doubles Champion","subtitle":"Coach Justin & Coach Muniandy — 2025","image":"assets/images/archive/2025-justin-veteran-doubles-champion.webp","note":"2025 Men’s Veteran Doubles Champions — Coach Justin and Coach Muniandy."},{"id":"justin-muniandy-perak-2025","year":2025,"person":"Justin Nathan","category":"achievement","title":"Perak Badminton Tournament","subtitle":"Veteran Champions — Coach Muniandy & Coach Justin","image":"assets/images/archive/2025-justin-muniandy-perak-veteran-champions.webp","note":"2025 Perak Badminton Tournament veteran champions — Coach Muniandy and Coach Justin."},{"id":"justin-kbs-mixed-2025","year":2025,"person":"Justin Nathan","category":"achievement","title":"KBS Masters Games — Putrajaya","subtitle":"Mixed Doubles Runners-Up","image":"assets/images/archive/2025-justin-kbs-masters-mixed-doubles-runner-up.webp","note":"2025 Kementerian Belia & Sukan Badminton Championships at Putrajaya — Coach Justin, Mixed Doubles Runners-Up."},{"id":"justin-kbs-mixed-2025-02","year":2025,"person":"Justin Nathan","category":"achievement","title":"KBS Masters Games — Putrajaya","subtitle":"Mixed Doubles Runners-Up — Presentation","image":"assets/images/archive/2025-justin-kbs-masters-mixed-doubles-runner-up-02.webp","note":"Additional event photograph from the 2025 KBS Masters Games mixed doubles runners-up achievement."},{"id":"puven-mssd-2018","year":2018,"person":"Puvendran","category":"achievement","title":"MSSD Klang 2018","subtitle":"BD U17 Runner-Up","image":"assets/images/archive/2018-puvendran-mssd-klang-u17-doubles-runner-up.webp","note":"Coach Puvendran — MSSD Klang 2018 BD U17 Runner-Up."},{"id":"puven-selangor-mixed-2018","year":2018,"person":"Puvendran","category":"achievement","title":"Selangor Indian 2018 Open","subtitle":"Mixed Doubles Semi Final","image":"assets/images/archive/2018-puvendran-selangor-indian-mixed-doubles-semifinal.webp","note":"Coach Puvendran — Selangor Indian 2018 Open Mixed Doubles Semi Final."},{"id":"puven-kajang-2017","year":2017,"person":"Puvendran","category":"achievement","title":"Kajang Indian 2017","subtitle":"U18 Singles Semi Final","image":"assets/images/archive/2017-puvendran-kajang-u18-singles-semifinal.webp","note":"Coach Puvendran — Kajang Indian 2017 U18 Singles Semi Final."},{"id":"media-2016","year":2016,"person":"Justin Nathan","category":"media","title":"Coach Justin Media Archive — 2016","subtitle":"Tournament and badminton coverage","image":"assets/images/archive/2016-media-archive.webp","note":"2016 media cut-out supplied by the academy as part of Coach Justin’s archive, documenting his badminton journey and podium achievements across various tournaments."},{"id":"media-2015-01","year":2015,"person":"Justin Nathan","category":"media","title":"Coach Justin Media Archive — 2015","subtitle":"Tournament and community coverage","image":"assets/images/archive/2015-media-archive-01.webp","note":"2015 media cut-out supplied by the academy as part of Coach Justin’s archive, alongside his podium achievements across various tournaments."},{"id":"media-2015-02","year":2015,"person":"Justin Nathan","category":"media","title":"Coach Justin Media Archive — 2015","subtitle":"Additional newspaper feature","image":"assets/images/archive/2015-media-archive-02.webp","note":"Additional 2015 media cut-out retained as part of Coach Justin’s competitive badminton and podium-achievement archive."},{"id":"media-2007","year":2007,"person":"Justin Nathan","category":"media","title":"Coach Justin Media Archive — 2007","subtitle":"Historical newspaper coverage","image":"assets/images/archive/2007-media-archive.webp","note":"2007 historical newspaper cut-out retained as part of Coach Justin’s badminton journey and tournament-achievement archive."},{"id":"justin-team-dsc-1999","year":1999,"person":"Justin Nathan","category":"archive","title":"Team DSC — 1999","subtitle":"Selangor Indian badminton era","image":"assets/images/archive/1999-justin-team-dsc-archive.webp","note":"Archive: one of Selangor’s prominent Indian badminton groups in 1999. Team DSC, led by Coach Arikrishnan. Justin is sixth from the left in the supplied archive image."},{"id":"justin-age-18","year":1990,"person":"Justin Nathan","category":"archive","title":"Early Badminton Journey","subtitle":"Coach Justin trained by legendary Datuk Sidek","image":"assets/images/archive/justin-age-18-datuk-sidek-training.webp","note":"Archive: Coach Justin at age 18 during his early badminton development, trained by legendary Datuk Sidek."}];

  const grid = document.getElementById('archiveGrid');
  const count = document.getElementById('archiveCount');
  const search = document.getElementById('archiveSearch');
  const filters = [...document.querySelectorAll('[data-archive-filter]')];
  if (!grid) return;

  const card = item => `
    <article class="archive-card" data-category="${item.category}" data-person="${item.person.toLowerCase()}" data-year="${item.year}" tabindex="0" role="button" aria-label="Open ${item.title}">
      <div class="archive-image">
        <img loading="lazy" decoding="async" src="${item.image}" alt="${item.title}" onerror="this.style.display='none';this.parentElement.classList.add('missing')">
        <div class="image-missing"><span>JNBC</span><small>Image pending upload</small></div>
        <div class="archive-year">${item.year}</div>
      </div>
      <div class="archive-copy">
        <div class="archive-meta"><span>${item.category === 'achievement' ? 'Achievement' : item.category === 'media' ? 'Media Archive' : 'From the Archive'}</span><b>${item.person}</b></div>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <span class="view-link">View story →</span>
      </div>
    </article>`;

  const filteredItems = () => {
    const active = document.querySelector('[data-archive-filter].active')?.dataset.archiveFilter || 'all';
    const q = (search?.value || '').trim().toLowerCase();
    return archiveItems.filter(item => {
      const filterMatch = active === 'all' || item.category === active || item.person.toLowerCase().includes(active);
      const haystack = `${item.title} ${item.subtitle} ${item.person} ${item.year} ${item.note}`.toLowerCase();
      return filterMatch && (!q || haystack.includes(q));
    });
  };

  const render = () => {
    const items = filteredItems();
    grid.innerHTML = items.map(card).join('');
    if (count) count.textContent = `${items.length} ${items.length === 1 ? 'story' : 'stories'}`;
    bindCards(items);
  };

  const modal = document.getElementById('archiveModal');
  const modalImg = document.getElementById('archiveModalImg');
  const modalTitle = document.getElementById('archiveModalTitle');
  const modalText = document.getElementById('archiveModalText');
  const modalMeta = document.getElementById('archiveModalMeta');

  const close = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    if (modalImg) modalImg.src='';
  };

  const open = item => {
    if (!modal) return;
    modalTitle.textContent = item.title;
    modalText.textContent = item.note;
    modalMeta.textContent = `${item.year} • ${item.person}`;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalImg.onerror = () => { modalImg.style.display='none'; };
    modalImg.style.display='block';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  };

  function bindCards(items){
    [...grid.querySelectorAll('.archive-card')].forEach((el, i) => {
      const item = items[i];
      if (!item) return;
      el.onclick = () => open(item);
      el.onkeydown = e => {
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          open(item);
        }
      };
    });
  }

  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  }));

  search?.addEventListener('input', render);
  document.getElementById('archiveClose')?.addEventListener('click', close);
  modal?.addEventListener('click', e => { if(e.target===modal) close(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && modal?.classList.contains('open')) close(); });

  render();
})();