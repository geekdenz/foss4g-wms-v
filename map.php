<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <!--<link rel="stylesheet" href="resources/layout.css" type="text/css">-->
    <title>Single image WMS with custom projection example</title>
    <style>
        body,h4 {
            margin: 0;
            padding: 0;
        }
        .map {
            width: 100%;
            background-color: hsl(213, 69.2%, 43.3%);
        }
        .above {
            background-color: #000;
            color: #ccc;
            padding: 2%;
            height: 800px;
            z-index: 9999;
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 200px;
        }
        .above a {
            color: #999;
        }
    </style>
  </head>
  <body>
      <div id="map" class="map"></div>
      <div class="above">
        <h4 id="title">Tiled WMS-V or VideoWMS with custom projection example</h4>
        <p id="shortdesc">Example of WMS-V using the projection EPSG:2193 (NZTM).<br/>
          Press <a onclick="playAll()" href="#">PLAY</a> to play all videos on the page.<br/>
          Press <a onclick="pauseAll()" href="#">PAUSE</a> to pause all videos on the page.<br/>
          Press <a onclick="rewindAll()" href="#">REWIND</a> to rewind all videos on the page.<br/>
        </p>
      </div>
      <script type="text/javascript">
          window.CLOSURE_NO_DEPS = true;
      </script>
      <script src="build/ol-whitespace.js" type="text/javascript"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/proj4js/1.1.0/proj4js-compressed.js" type="text/javascript"></script>
      <script src="http://ourenvironment.scinfo.org.nz/js/OpenLayers/defs/EPSG2193.js" type="text/javascript"></script>
      <script type="text/javascript">
          var map = document.getElementById('map'),
              body = document.getElementsByTagName('body');
          window.onresize = function() {
              map.style.height = document.documentElement.clientHeight +'px';
          };
          onresize();
      </script>
      <script src="wms-v.js" type="text/javascript"></script>
  </body>
</html>
