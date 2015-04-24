/*
var videos = [
  'Qed9pplueYc',
  'Spaho7iBVeQ',
  'dBqMxvqLQuw',
  'ezLLH5764NY',
  'jSUktpwNpsQ',
  'wXzg0D-cKds',
  'wHwyca7gu7E',
  'U0A23e2rHWM',
  'fJp7faTtJ_w',
  'MRXk_zK-Ccw',
  'kHXaMJ-ED6g',
  'l1TV0phSP-c',
  '_FluQ7Gl_Ns',
  'L-sJSg35Yvo',
  'jVOZeT2W6Bo',
  'KCnwz5yhsok',
  'RoJju00K6SI',
  'LjL2tMGmMdA',
  'uP_SQqWTFb4',
  'r8heVXGjVlY',
  'eExCYM9jEPI',
  'LNXOAO7cAUM',
  'L2h2lemgT3Q',
  'ArAnPKXVGRM',
  'MXy6dWy3Xic',
  'onG6mfnM9BM',
  '5TqzGlSyToA',
  'krlC_2TgO-0',
  'Azdr2fxHpl4',
  'v0J2WZXh0Ks'
];
*/
var videos = ['Azdr2fxHpl4'];

var video = videos[Math.floor(Math.random()*videos.length)];
var frame = '<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/'+video+'?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1" frameborder="0" allowfullscreen></iframe>';

document.body.innerHTML += frame;
