(function(){
  // Licht/donker
  var root=document.documentElement, btn=document.getElementById('themeToggle');
  btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');
    var next = cur ? (cur==='dark'?'light':'dark')
      : (window.matchMedia('(prefers-color-scheme: dark)').matches?'light':'dark');
    root.setAttribute('data-theme',next);
  });
  // Menu op mobiel
  var header=document.getElementById('header'), menu=document.getElementById('menuBtn');
  menu.addEventListener('click',function(){
    var open=header.classList.toggle('open');
    menu.setAttribute('aria-expanded', open?'true':'false');
  });
  document.querySelectorAll('#navLinks a').forEach(function(a){
    a.addEventListener('click',function(){header.classList.remove('open');menu.setAttribute('aria-expanded','false');});
  });
  // In beeld schuiven. Zonder IntersectionObserver alles meteen tonen,
  // anders blijft de hele pagina onzichtbaar.
  var blokken=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    blokken.forEach(function(el){io.observe(el);});
  }else{
    blokken.forEach(function(el){el.classList.add('in');});
  }
  // Jaartal
  document.getElementById('jaar').textContent = new Date().getFullYear();
})();
