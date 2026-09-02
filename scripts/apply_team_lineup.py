from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

old = '''<div class="core-team-group"><img src="assets/images/coaches/jnbc-core-team-group.webp" alt="JNBC Shuttlerz Academy core coaching team" loading="lazy" decoding="async"><div class="core-team-group-copy"><div><small>JNBC Core Team</small><h3>One team. One standard.</h3></div></div></div><div class="coach-grid">'''

new = '''<div class="core-team-group core-team-lineup">
  <div class="lineup-people" aria-label="JNBC core team lineup">
    <figure class="lineup-person"><img src="assets/images/coaches/praveen-profile.webp" alt="Praveenthen" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person"><img src="assets/images/coaches/kavisha.png" alt="Kavisha" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person"><img src="assets/images/coaches/r-muniandy.png" alt="R. Muniandy" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person lineup-founder"><img src="assets/images/coaches/justin-nathan.png" alt="Justin Nathan" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person"><img src="assets/images/coaches/puvendran.png" alt="Puvendran" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person"><img src="assets/images/coaches/nantha-kumar.png" alt="Nantha Kumar" loading="lazy" decoding="async"></figure>
    <figure class="lineup-person"><img src="assets/images/coaches/denesh.png" alt="Denesh" loading="lazy" decoding="async"></figure>
  </div>
  <div class="core-team-group-copy"><div><small>JNBC Core Team</small><h3>One team. One standard.</h3></div></div>
</div><div class="coach-grid">'''

if old not in s:
    raise SystemExit('Current core-team group markup was not found')
s = s.replace(old, new, 1)

css = '''
<style id="core-team-seven-person-lineup">
.core-team-lineup{position:relative!important;overflow:hidden!important;height:auto!important;min-height:0!important;aspect-ratio:auto!important;border-radius:24px;background:#b8bbc0}
.core-team-lineup>.lineup-people{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) 1.18fr repeat(3,minmax(0,1fr));width:100%;height:520px;background:linear-gradient(180deg,#c8c9cc 0%,#a8acb1 100%)}
.core-team-lineup .lineup-person{position:relative;min-width:0;height:100%;margin:0;overflow:hidden;background:#b9bcc1}
.core-team-lineup .lineup-person img{position:relative!important;inset:auto!important;display:block!important;width:100%!important;height:100%!important;max-height:none!important;aspect-ratio:auto!important;object-fit:cover!important;object-position:center 12%!important;filter:saturate(.94) contrast(1.02)}
.core-team-lineup .lineup-person:after{content:"";position:absolute;inset:0;border-right:1px solid rgba(255,255,255,.16);pointer-events:none}
.core-team-lineup .lineup-founder{z-index:2;box-shadow:0 0 34px rgba(0,0,0,.2)}
.core-team-lineup .lineup-founder img{object-position:center 8%!important}
.core-team-lineup>.core-team-group-copy{position:absolute!important;z-index:5;left:0!important;right:0!important;bottom:0!important;padding:92px 28px 24px!important;background:linear-gradient(to top,rgba(3,8,19,.94) 0%,rgba(3,8,19,.62) 43%,transparent 100%);color:#fff}
.core-team-lineup>.core-team-group-copy small{color:#9fb1ff}
@media(max-width:760px){.core-team-lineup>.lineup-people{grid-template-columns:repeat(4,1fr);height:auto}.core-team-lineup .lineup-person{height:250px}.core-team-lineup .lineup-person:nth-child(n+5){height:235px}.core-team-lineup>.core-team-group-copy{padding:70px 18px 18px!important}}
@media(max-width:480px){.core-team-lineup>.lineup-people{grid-template-columns:repeat(2,1fr)}.core-team-lineup .lineup-person{height:245px!important}.core-team-lineup .lineup-founder{grid-column:1/-1;height:310px!important;order:-1}}
</style>
'''
if 'id="core-team-seven-person-lineup"' not in s:
    s = s.replace('</head>', css + '</head>', 1)

p.write_text(s, encoding='utf-8')
print('Applied seven-person core team lineup')
