(function(){
var N=[['index.html', 'Home'], ['about-studio.html', 'About NaRye Studios'], ['current-works.html', 'Current Works'], ['development-slate.html', 'Development Slate'], ['music-archive.html', 'Music Archive'], ['personal-notes.html', 'Personal Notes'], ['gemini.html', 'Gemini Sun Gemini Moon'], ['about-iyo-numa.html', 'About Iyo Numä'], ['contact-us.html', 'Contact Us']];
var here=location.pathname.split('/').pop()||'index.html';
var h=document.getElementById('site-header');
if(h){h.innerHTML='<div class="wrap"><div class="bar"><a class="logo" href="index.html" aria-label="NaRye Studios home">NaRye<small>STUDIOS</small></a><button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav">Menu</button></div><nav id="nav" aria-label="Main"><ul>'+N.map(function(n){return '<li><a href="'+n[0]+'"'+(n[0]===here?' aria-current="page"':'')+'>'+n[1]+'</a></li>'}).join('')+'</ul></nav></div>';
var b=document.getElementById('menuBtn'),nv=document.getElementById('nav');
b.addEventListener('click',function(){var o=nv.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
var f=document.getElementById('site-footer');
if(f){f.innerHTML='<div class="wrap"><div class="cols"><div class="brand"><a class="logo" href="index.html">NaRye<small>STUDIOS</small></a><p>Whispered stories. Finally spoken.</p></div><div><h4>Explore</h4><ul>'+N.slice(1).map(function(n){return '<li><a href="'+n[0]+'">'+n[1]+'</a></li>'}).join('')+'</ul></div><div><h4>Studio</h4><ul><li><a href="current-works.html">Books</a></li><li><a href="development-slate.html">Screenplays</a></li><li><a href="music-archive.html">Music</a></li></ul></div><div class="c3"><h4>Contact</h4><p style="margin:0">For creative collaborations, development, and studio inquiries, please reach out directly.</p><p style="margin:10px 0 0"><a href="mailto:iyoNumaaBooks@gmail.com">iyoNumaaBooks@gmail.com</a></p></div></div><div class="legal"><span>\u00a9 2026 NaRye Studios. All rights reserved.</span><span>Privacy Policy \u00b7 Terms of Use</span></div></div>';}
var j=document.getElementById('joinBtn'),e=document.getElementById('email'),m=document.getElementById('joinMsg');
if(j)j.addEventListener('click',function(){var ok=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.value.trim());m.textContent=ok?'Newsletter sign-up opens soon. Please check back.':'Enter a valid email address.'});
var chips=document.querySelectorAll('.chip[data-f]');
chips.forEach(function(c){c.addEventListener('click',function(){chips.forEach(function(x){x.setAttribute('aria-pressed',x===c)});
document.querySelectorAll('details.note').forEach(function(d){d.hidden=c.dataset.f!=='all'&&d.dataset.c!==c.dataset.f})})});
})();
