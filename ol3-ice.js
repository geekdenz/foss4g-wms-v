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
    var url = 'http://projects.local/cache/antarctic_ice_overlay/ice_videos_o/antarctic/';
    var s = '0'+ z +'/'+ 
            pad(Math.floor(x/1000000),3) +'/'+ 
            pad(Math.floor(x/1000) % 1000,3) +'/'+ 
            pad(x % 1000,3) +'/'+
            pad(Math.floor(y/1000000),3) +'/'+ 
            pad(Math.floor(y/1000) % 1000,3) +'/'+ 
            pad(y % 1000,3) +'.webm';
    //var s = '0'+ z +'/'+ slashify(pad(x, 9)) +'/'+ slashify(pad(y, 9)) +'.png';
    return url + s;
}
function getVideos() {
  var map = document.getElementById('map');
  var videos = map.getElementsByTagName('video');
  return videos;
}
var playing = false;
function play() {
  var videos = getVideos();
  var ii = videos.length;
  while (ii--) {
    videos[ii].play();
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
var view = new ol.View2D({
    center: [60000000,70001000],
    zoom: 0,    
    maxZoom: 2
  });
var extent = [1000000, 4700000.0000001, 2200000, 6300000];
var source = new ol.source.ImageTileSource({
      tileGrid: new ol.tilegrid.XYZ({
        //origin: [1000000, 4700000.0000001],
        //origin: [-ol.proj.EPSG3857.HALF_SIZE, ol.proj.EPSG3857.HALF_SIZE],
        //origin: [0, 0],
        maxZoom: 9,
        resolutions: resolutions
      }),
      tileUrlFunction: function(opt) {
        return createUrl(opt.x, opt.y, opt.z);
      }
    });
var videoSource = new ol.source.VideoTileSource({
      tileGrid: new ol.tilegrid.XYZ({
        maxZoom: 6,
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

playButton.onclick = play;
pauseButton.onclick = pause;

var el = document.getElementById('s1');
var s = new goog.ui.Slider;
s.decorate(el);
s.setMinimum(0);
s.setMaximum(413);
s.addEventListener(goog.ui.Component.EventType.CHANGE, function() {
  var value = s.getValue();
  var videos = getVideos();
  var ii = videos.length;
  var time = value/12;
  while (ii--) {
    videos[ii].currentTime = time;
  }
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var myv = value / 12;
  var year = Math.floor(myv);
  var m = Math.round(12 * (myv - year));
  var month = months[m];
  document.querySelectorAll('.year')[0].innerHTML = year + 1979;
  document.querySelectorAll('.month')[0].innerHTML = month;
  //console.log(time);
});

function updateTime(time) {
  var value = time * 12;
  s.setValue(value);
}
function resize() {
  var viewportheight = window.innerHeight;
  document.getElementsByClassName('map')[0].style.height = viewportheight +'px';
}

function inbetween(value, check, tolerance) {
  return check - tolerance <= value <= check + tolerance;
}
var currentTime = 0;
function syncVideos() {
  var vids = getVideos();
  var ii = vids.length;
  var len = ii;
  var maxTime = currentTime;
  while (ii--) {
    var v = vids[ii],
        time = v.currentTime;
    if (maxTime < time) {
      maxTime = time;
    }
  }
  while (len--) {
    var v = vids[len];
    if (!inbetween(v.currentTime, maxTime, 0.05) && maxTime != 0) {
      v.currentTime = maxTime;
      console.log('corrected', maxTime);
    }
    if (playing && v.paused) {
      v.play();
    }
  }
  updateTime(maxTime);
  currentTime = currentTime > maxTime ? currentTime : maxTime;
  //console.log(currentTime, maxTime);
}

setInterval(syncVideos, 500);

/*
function timeupdate(target) {
}

function onmove() {
}
goog.events.listen(this.viewportSizeMonitor_, goog.events.EventType.RESIZE,                                                                         
              this.updateSize, false, this);
*/
window.resize = resize;
resize();
