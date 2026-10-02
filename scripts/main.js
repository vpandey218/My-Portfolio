(function(){
  document.documentElement.classList.add('js');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Career timeline built from the data-* attributes on each job entry
  var g=document.getElementById('gantt'),jobs=document.querySelectorAll('.job');
  if(g&&jobs.length){
    var min=2014,max=2027,span=max-min,pct=function(y){return(y-min)/span*100};
    var rows=[0,30,60];
    var list=[].slice.call(jobs).sort(function(x,y){return x.dataset.start-y.dataset.start});
    list.forEach(function(j,i){
      var s=+j.dataset.start,e=+j.dataset.end,b=document.createElement('div');
      b.className='bar '+j.dataset.type;b.textContent=j.dataset.label;
      b.style.left=pct(s)+'%';b.style.width=(pct(e)-pct(s))+'%';b.style.top=rows[i%3]+'px';
      g.appendChild(b);
    });
    var ax=document.createElement('div');ax.className='axis';
    for(var y=2014;y<=2026;y+=2){var m=document.createElement('em');m.textContent=y;m.style.left=pct(y)+'%';ax.appendChild(m)}
    g.appendChild(ax);
    if(reduce||!('IntersectionObserver'in window)){g.classList.add('on')}
    else{new IntersectionObserver(function(en,o){en.forEach(function(x){if(x.isIntersecting){g.classList.add('on');o.disconnect()}})},{threshold:.4}).observe(g)}
  }
  // Count-up on hero tiles
  if(!reduce){document.querySelectorAll('[data-count]').forEach(function(el){
    var t=+el.dataset.count,s=null;
    function step(ts){s=s||ts;var p=Math.min((ts-s)/900,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)}
    el.textContent=0;requestAnimationFrame(step);
  })}
})();
