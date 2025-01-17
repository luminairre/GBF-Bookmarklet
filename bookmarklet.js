javascript:(function(){
  if ( ! window.location.hash.startsWith("#party/index/")) {
    alert('Please go to a GBF Party screen');
    return
  }
  let obj = {
    p: document.querySelector('.img-job-icon').src.match(/\/([0-9]{6})\.png/)[1],
    c: [],
    cl: [],
    s: [],
    w: [],
    wl: []
  };

  document.querySelectorAll('.img-npc').forEach(e => {
    obj.c.push(e.src ? e.src.match(/\/([0-9]{7})0{3}_/)[1] : null);
    obj.cl.push(e.src ? e.parentNode.parentNode.querySelector('.level').innerText.match(/[0-9]+/)[0] : null)
  });
 
  document.querySelectorAll('.img-summon-main').forEach(e => {
    obj.s.push(e.src ? e.src.match(/\/([0-9]{7})0{3}/)[1] : null)
  });
  document.querySelectorAll('.img-summon-sub').forEach(e => {
    obj.s.push(e.src ? e.src.match(/\/([0-9]{7})0{3}/)[1] : null)
  });
 
  document.querySelectorAll('.img-weapon-main').forEach(e => {
    obj.w.push(e.src ? e.src.match(/\/([0-9]{8})0{2}\.jpg/)[1] : null);
    obj.wl.push(e.src ? e.parentNode.parentNode.parentNode.querySelector('.txt-slv-value').title : null)
  });
  document.querySelectorAll('.img-weapon-sub').forEach(e => {
    obj.w.push(e.src ? e.src.match(/\/([0-9]{8})0{2}\.jpg/)[1] : null);
    obj.wl.push(e.src ? e.parentNode.parentNode.querySelector('.txt-slv-value').title : null)
  });

  window.open('https://www.granblue.party/builder?l=' + encodeURIComponent(JSON.stringify(obj)), '_newtab');
}())