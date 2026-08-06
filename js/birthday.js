if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var colors = ['#c08f4c', '#8b3a3a', '#3f7d8b', '#c9a13b', '#e0653f'];
  var count = 26;
  for (var i = 0; i < count; i++) {
    var el = document.createElement('div');
    el.className = 'confetti';
    var size = 6 + Math.random() * 7;
    el.style.width = size + 'px';
    el.style.height = (size * 0.4) + 'px';
    el.style.left = (Math.random() * 100) + 'vw';
    el.style.background = colors[i % colors.length];
    el.style.animationDuration = (7 + Math.random() * 6) + 's';
    el.style.animationDelay = (Math.random() * -12) + 's';
    document.body.appendChild(el);
  }
}
