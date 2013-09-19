function reverse(ar) {
  var reversed = [];
  for (var i = ar.length; --i >= 0;) {
    reversed.push(ar[i]);
  }
  return reversed;
}
var resolutions = reverse([
        3.527775872778806, 8.819439681947015,
        17.63887936389403, 35.27775872778806,
        88.19439681947017, 176.38879363894034,
        352.7775872778807, 705.5551745557614,
        1411.1103491115227, 2822.2206982230455
    ]);
function slashify(s) {
    var paddedThree = pad(s, 3);
    return s.match(/.{3}/g).join('/');
}
function pad(n, num) {
    var len = (""+n).length;
    var s="";
    for (var i = num-len; i > 0; i--) {
      s+="0";
    }
    return (s+n);
}
function createVideoUrl(x, y, z) {
    if (x < 0 || y < 0) {
        return null;
    }
    var url = 'webm/';
    var myz = z == 0 ? '00_256_' : '01_256_';
    var invY = z == 0 ? 8 - y : 17 - y;
    var s = myz + x +'_'+ invY +'.webm';
    return url + s;
}
function getVideos() {
  var videos = document.getElementsByTagName('video');
  return videos;
}
var playing = false;
function play() {
  var videos = getVideos();
  var ii = videos.length;
  var len = ii;
  while (ii--) {
    var v = videos[ii];
    v.play();
    v.loop = 'loop';
    if (ii < len - 1) {
      v.muted = 'muted';
    }
  }
  playing = true;
}
function pause() {
  var videos = getVideos();
  var ii = videos.length;
  while (ii--) {
    videos[ii].pause();
  }
  playing = false;
}
function reset() {
  var videos = getVideos();
  var ii = videos.length;
  while (ii--) {
    videos[ii].pause();
    videos[ii].currentTime = 0;
  }
  playing = false;
}
var view = new ol.View2D({
    center: [53894572.30887301, 333013989.9089727],
    zoom: 0,    
    maxZoom: 1
  });
var extent = [1000000, 4700000.0000001, 2200000, 6300000];
var videoSource = new ol.source.VideoTileSource({
      tileGrid: new ol.tilegrid.XYZ({
        maxZoom: 1,
        origin: [1000000, 4700000.0000001],
        resolutions: resolutions
      }),
      tileUrlFunction: function(opt) {
        return createVideoUrl(opt.x, opt.y, opt.z);
      },
      extent: extent
    });
//source.tileGrid.resolutions_ = resolutions; // HACK
var layer = new ol.layer.VideoTileLayer({
      source: videoSource
    });
var map = new ol.Map({
  controls: ol.control.defaults({}, [
    new ol.control.FullScreen()
  ]),
  layers: [
    layer
  ],
  renderer: ol.RendererHint.DOM,
  //renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: view
});

//window.map = map;
//window.view = view;
var playButton = document.querySelectorAll('a.play')[0];
var pauseButton = document.querySelectorAll('a.pause')[0];
var resetButton = document.querySelectorAll('a.reset')[0];

playButton.onclick = play;
pauseButton.onclick = pause;
resetButton.onclick = reset;

var el = document.getElementById('s1');
function resize() {
  var viewportheight = window.innerHeight;
  document.getElementsByClassName('map')[0].style.height = viewportheight +'px';
}

function inbetween(value, check, tolerance) {
  return ((check - tolerance) <= value) && (value <= (check + tolerance));
}
var currentTime = 0;
function timeupdate(event) {
  var target = event.target,
      time = target.currentTime;
  //console.log('time',time);
  if (time > currentTime) {
    currentTime = time;
    var vids = getVideos();
    if (target == vids[0]) {
      var ii = vids.length;
      while (ii--) {
        var v = vids[ii];
        var vtime = v.currentTime;
        if (vtime < currentTime) {
          v.currentTime = currentTime;
        }
      }
    }
  }
}
function syncVideos() {
  var vids = getVideos();
  var ii = vids.length;
  //var len = ii;
  //var maxTime = currentTime;
  while (ii--) {
    var v = vids[ii];
    v.removeEventListener('timeupdate', timeupdate, true, true);
    v.addEventListener('timeupdate', timeupdate, true, true);
    if (v.paused && playing) {
      //v.currentTime = currentTime;
      //v.play();
    }
  }
  return;
  if (!len) return;
  var duration = vids[0].duration - 1/5;


  /*
  if (false && playing) {
    currentTime += 1/50;
    if (currentTime > duration) {
      currentTime = 0;
    }
    while (ii--) {
      var v = vids[ii];
      if (!inbetween(v.currentTime, currentTime, 1/25)) {
        v.currentTime = currentTime;
      }
    }
  }
  */

  while (ii--) {
    var v = vids[ii],
        time = v.currentTime;
    if (v.paused) {
      maxTime = currentTime;
      continue;
    }
    if (maxTime < time) {
      maxTime = time;
      currentTime = maxTime;
    }
    if (ii < len - 1) {
      v.muted = 'muted';
    }
  }
  console.log('max', maxTime);
  return;
  while (len--) {
    var v = vids[len];
    if (v.paused) {
      v.currentTime = maxTime;
      v.play();
    }
  }
  return;
  while (len--) {
    var v = vids[len];
    if (!inbetween(v.currentTime, maxTime, 1/25) && maxTime != 0) {
      console.log('correcting', v.currentTime, maxTime);
      v.currentTime = maxTime;
    }
    if (playing && v.paused) {
      v.play();
      console.log('play', maxTime, v);
    }
  }
  currentTime = currentTime > maxTime ? currentTime : maxTime;
  //console.log(currentTime, maxTime);
}

//setInterval(syncVideos, 1000/50);
function syncVideos2() {
  var vs = getVideos();
  var time = currentTime;
  var i = vs.length;
  while (i--) {
    vs[i].currentTime = time;
  }
}
//setInterval(syncVideos2, 500);

window.resize = resize;
resize();
map.on('moveend', function() {
  console.log('moveend', arguments);
});
