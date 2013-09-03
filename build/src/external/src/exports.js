goog.require('ol');
goog.require('ol.Attribution');
goog.require('ol.Collection');
goog.require('ol.DeviceOrientation');
goog.require('ol.DeviceOrientation.SUPPORTED');
goog.require('ol.Feature');
goog.require('ol.Geolocation');
goog.require('ol.Geolocation.SUPPORTED');
goog.require('ol.Map');
goog.require('ol.MapBrowserEvent');
goog.require('ol.Object');
goog.require('ol.Overlay');
goog.require('ol.OverlayPositioning');
goog.require('ol.Projection');
goog.require('ol.ProjectionUnits');
goog.require('ol.RendererHint');
goog.require('ol.RendererHints');
goog.require('ol.View2D');
goog.require('ol.animation');
goog.require('ol.control.Attribution');
goog.require('ol.control.Control');
goog.require('ol.control.FullScreen');
goog.require('ol.control.Logo');
goog.require('ol.control.MousePosition');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.control.Zoom');
goog.require('ol.control.ZoomSlider');
goog.require('ol.control.ZoomToExtent');
goog.require('ol.coordinate');
goog.require('ol.dom.Input');
goog.require('ol.easing');
goog.require('ol.expr');
goog.require('ol.extent');
goog.require('ol.geom.GeometryType');
goog.require('ol.geom.LineString');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');
goog.require('ol.geom2.LineStringCollection');
goog.require('ol.geom2.PointCollection');
goog.require('ol.interaction.DragRotateAndZoom');
goog.require('ol.interaction.condition');
goog.require('ol.layer.ImageLayer');
goog.require('ol.layer.Layer');
goog.require('ol.layer.LayerGroup');
goog.require('ol.layer.TileLayer');
goog.require('ol.layer.Vector');
goog.require('ol.layer.VectorLayer2');
goog.require('ol.layer.VideoTileLayer');
goog.require('ol.parser.GPX');
goog.require('ol.parser.GeoJSON');
goog.require('ol.parser.KML');
goog.require('ol.parser.TopoJSON');
goog.require('ol.parser.WKT');
goog.require('ol.parser.ogc.GML_v2');
goog.require('ol.parser.ogc.GML_v3');
goog.require('ol.parser.ogc.WMSCapabilities');
goog.require('ol.parser.ogc.WMTSCapabilities');
goog.require('ol.proj');
goog.require('ol.renderer.canvas.Map');
goog.require('ol.source.BingMaps');
goog.require('ol.source.DebugTileSource');
goog.require('ol.source.MapQuestOSM');
goog.require('ol.source.MapQuestOpenAerial');
goog.require('ol.source.OSM');
goog.require('ol.source.SingleImageWMS');
goog.require('ol.source.Stamen');
goog.require('ol.source.StaticImage');
goog.require('ol.source.TileJSON');
goog.require('ol.source.TileSource');
goog.require('ol.source.TiledVideoWMS');
goog.require('ol.source.TiledWMS');
goog.require('ol.source.Vector');
goog.require('ol.source.VectorSource2');
goog.require('ol.source.VideoTileSource');
goog.require('ol.source.WMSGetFeatureInfoMethod');
goog.require('ol.source.WMTS');
goog.require('ol.style.Icon');
goog.require('ol.style.IconType');
goog.require('ol.style.Line');
goog.require('ol.style.Polygon');
goog.require('ol.style.Rule');
goog.require('ol.style.Shape');
goog.require('ol.style.ShapeType');
goog.require('ol.style.Style');
goog.require('ol.style.Text');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.tilegrid.XYZ');


goog.exportSymbol(
    'ol.Attribution',
    ol.Attribution);


goog.exportSymbol(
    'ol.Collection',
    ol.Collection);
goog.exportProperty(
    ol.Collection.prototype,
    'clear',
    ol.Collection.prototype.clear);
goog.exportProperty(
    ol.Collection.prototype,
    'forEach',
    ol.Collection.prototype.forEach);
goog.exportProperty(
    ol.Collection.prototype,
    'getAt',
    ol.Collection.prototype.getAt);
goog.exportProperty(
    ol.Collection.prototype,
    'getLength',
    ol.Collection.prototype.getLength);
goog.exportProperty(
    ol.Collection.prototype,
    'insertAt',
    ol.Collection.prototype.insertAt);
goog.exportProperty(
    ol.Collection.prototype,
    'pop',
    ol.Collection.prototype.pop);
goog.exportProperty(
    ol.Collection.prototype,
    'push',
    ol.Collection.prototype.push);
goog.exportProperty(
    ol.Collection.prototype,
    'remove',
    ol.Collection.prototype.remove);
goog.exportProperty(
    ol.Collection.prototype,
    'removeAt',
    ol.Collection.prototype.removeAt);
goog.exportProperty(
    ol.Collection.prototype,
    'setAt',
    ol.Collection.prototype.setAt);



/**
 * @constructor
 * @extends {ol.DeviceOrientation}
 * @param {olx.DeviceOrientationOptionsExtern} options Options.
 */
ol.DeviceOrientationExport = function(options) {
  /** @type {ol.DeviceOrientationOptions} */
  var arg = /** @type {ol.DeviceOrientationOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.tracking = options.tracking;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.DeviceOrientationExport,
    ol.DeviceOrientation);
goog.exportSymbol(
    'ol.DeviceOrientation',
    ol.DeviceOrientationExport);


goog.exportSymbol(
    'ol.DeviceOrientation.SUPPORTED',
    ol.DeviceOrientation.SUPPORTED);


goog.exportSymbol(
    'ol.Feature',
    ol.Feature);
goog.exportProperty(
    ol.Feature.prototype,
    'get',
    ol.Feature.prototype.get);
goog.exportProperty(
    ol.Feature.prototype,
    'getAttributes',
    ol.Feature.prototype.getAttributes);
goog.exportProperty(
    ol.Feature.prototype,
    'getFeatureId',
    ol.Feature.prototype.getFeatureId);
goog.exportProperty(
    ol.Feature.prototype,
    'getGeometry',
    ol.Feature.prototype.getGeometry);
goog.exportProperty(
    ol.Feature.prototype,
    'set',
    ol.Feature.prototype.set);
goog.exportProperty(
    ol.Feature.prototype,
    'setFeatureId',
    ol.Feature.prototype.setFeatureId);
goog.exportProperty(
    ol.Feature.prototype,
    'setGeometry',
    ol.Feature.prototype.setGeometry);
goog.exportProperty(
    ol.Feature.prototype,
    'setSymbolizers',
    ol.Feature.prototype.setSymbolizers);



/**
 * @constructor
 * @extends {ol.Geolocation}
 * @param {olx.GeolocationOptionsExtern} options Options.
 */
ol.GeolocationExport = function(options) {
  /** @type {ol.GeolocationOptions} */
  var arg = /** @type {ol.GeolocationOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.projection = options.projection;
    arg.tracking = options.tracking;
    arg.trackingOptions = options.trackingOptions;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.GeolocationExport,
    ol.Geolocation);
goog.exportSymbol(
    'ol.Geolocation',
    ol.GeolocationExport);


goog.exportSymbol(
    'ol.Geolocation.SUPPORTED',
    ol.Geolocation.SUPPORTED);



/**
 * @constructor
 * @extends {ol.Map}
 * @param {olx.MapOptionsExtern} options Options.
 */
ol.MapExport = function(options) {
  /** @type {ol.MapOptions} */
  var arg = /** @type {ol.MapOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.controls = options.controls;
    arg.interactions = options.interactions;
    arg.layers = options.layers;
    arg.renderer = options.renderer;
    arg.renderers = options.renderers;
    arg.target = options.target;
    arg.view = options.view;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.MapExport,
    ol.Map);
goog.exportSymbol(
    'ol.Map',
    ol.MapExport);
goog.exportProperty(
    ol.Map.prototype,
    'addControl',
    ol.Map.prototype.addControl);
goog.exportProperty(
    ol.Map.prototype,
    'addLayer',
    ol.Map.prototype.addLayer);
goog.exportProperty(
    ol.Map.prototype,
    'addPreRenderFunction',
    ol.Map.prototype.addPreRenderFunction);
goog.exportProperty(
    ol.Map.prototype,
    'addPreRenderFunctions',
    ol.Map.prototype.addPreRenderFunctions);
goog.exportProperty(
    ol.Map.prototype,
    'getFeatureInfo',
    ol.Map.prototype.getFeatureInfo);
goog.exportProperty(
    ol.Map.prototype,
    'getFeatures',
    ol.Map.prototype.getFeatures);
goog.exportProperty(
    ol.Map.prototype,
    'getInteractions',
    ol.Map.prototype.getInteractions);
goog.exportProperty(
    ol.Map.prototype,
    'getLayers',
    ol.Map.prototype.getLayers);
goog.exportProperty(
    ol.Map.prototype,
    'getRenderer',
    ol.Map.prototype.getRenderer);
goog.exportProperty(
    ol.Map.prototype,
    'removeControl',
    ol.Map.prototype.removeControl);
goog.exportProperty(
    ol.Map.prototype,
    'removeLayer',
    ol.Map.prototype.removeLayer);
goog.exportProperty(
    ol.Map.prototype,
    'updateSize',
    ol.Map.prototype.updateSize);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'getCoordinate',
    ol.MapBrowserEvent.prototype.getCoordinate);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'getPixel',
    ol.MapBrowserEvent.prototype.getPixel);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'preventDefault',
    ol.MapBrowserEvent.prototype.preventDefault);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'stopPropagation',
    ol.MapBrowserEvent.prototype.stopPropagation);


goog.exportSymbol(
    'ol.Object',
    ol.Object);
goog.exportProperty(
    ol.Object.prototype,
    'bindTo',
    ol.Object.prototype.bindTo);
goog.exportProperty(
    ol.Object.prototype,
    'get',
    ol.Object.prototype.get);
goog.exportProperty(
    ol.Object.prototype,
    'notify',
    ol.Object.prototype.notify);
goog.exportProperty(
    ol.Object.prototype,
    'on',
    ol.Object.prototype.on);
goog.exportProperty(
    ol.Object.prototype,
    'once',
    ol.Object.prototype.once);
goog.exportProperty(
    ol.Object.prototype,
    'set',
    ol.Object.prototype.set);
goog.exportProperty(
    ol.Object.prototype,
    'setValues',
    ol.Object.prototype.setValues);
goog.exportProperty(
    ol.Object.prototype,
    'un',
    ol.Object.prototype.un);
goog.exportProperty(
    ol.Object.prototype,
    'unByKey',
    ol.Object.prototype.unByKey);
goog.exportProperty(
    ol.Object.prototype,
    'unbind',
    ol.Object.prototype.unbind);
goog.exportProperty(
    ol.Object.prototype,
    'unbindAll',
    ol.Object.prototype.unbindAll);



/**
 * @constructor
 * @extends {ol.Overlay}
 * @param {olx.OverlayOptionsExtern} options Options.
 */
ol.OverlayExport = function(options) {
  /** @type {ol.OverlayOptions} */
  var arg = /** @type {ol.OverlayOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.element = options.element;
    arg.map = options.map;
    arg.position = options.position;
    arg.positioning = options.positioning;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.OverlayExport,
    ol.Overlay);
goog.exportSymbol(
    'ol.Overlay',
    ol.OverlayExport);


goog.exportSymbol(
    'ol.OverlayPositioning',
    ol.OverlayPositioning);
goog.exportProperty(
    ol.OverlayPositioning,
    'BOTTOM_LEFT',
    ol.OverlayPositioning.BOTTOM_LEFT);
goog.exportProperty(
    ol.OverlayPositioning,
    'BOTTOM_RIGHT',
    ol.OverlayPositioning.BOTTOM_RIGHT);
goog.exportProperty(
    ol.OverlayPositioning,
    'TOP_LEFT',
    ol.OverlayPositioning.TOP_LEFT);
goog.exportProperty(
    ol.OverlayPositioning,
    'TOP_RIGHT',
    ol.OverlayPositioning.TOP_RIGHT);



/**
 * @constructor
 * @extends {ol.Projection}
 * @param {olx.ProjectionOptionsExtern} options Options.
 */
ol.ProjectionExport = function(options) {
  /** @type {ol.ProjectionOptions} */
  var arg = /** @type {ol.ProjectionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.axisOrientation = options.axisOrientation;
    arg.code = options.code;
    arg.extent = options.extent;
    arg.global = options.global;
    arg.units = options.units;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.ProjectionExport,
    ol.Projection);
goog.exportSymbol(
    'ol.Projection',
    ol.ProjectionExport);
goog.exportProperty(
    ol.Projection.prototype,
    'getAxisOrientation',
    ol.Projection.prototype.getAxisOrientation);
goog.exportProperty(
    ol.Projection.prototype,
    'getCode',
    ol.Projection.prototype.getCode);
goog.exportProperty(
    ol.Projection.prototype,
    'getExtent',
    ol.Projection.prototype.getExtent);
goog.exportProperty(
    ol.Projection.prototype,
    'getMetersPerUnit',
    ol.Projection.prototype.getMetersPerUnit);
goog.exportProperty(
    ol.Projection.prototype,
    'getPointResolution',
    ol.Projection.prototype.getPointResolution);
goog.exportProperty(
    ol.Projection.prototype,
    'getUnits',
    ol.Projection.prototype.getUnits);
goog.exportProperty(
    ol.Projection.prototype,
    'isGlobal',
    ol.Projection.prototype.isGlobal);


goog.exportSymbol(
    'ol.ProjectionUnits',
    ol.ProjectionUnits);
goog.exportProperty(
    ol.ProjectionUnits,
    'DEGREES',
    ol.ProjectionUnits.DEGREES);
goog.exportProperty(
    ol.ProjectionUnits,
    'FEET',
    ol.ProjectionUnits.FEET);
goog.exportProperty(
    ol.ProjectionUnits,
    'METERS',
    ol.ProjectionUnits.METERS);


goog.exportSymbol(
    'ol.RendererHint',
    ol.RendererHint);
goog.exportProperty(
    ol.RendererHint,
    'CANVAS',
    ol.RendererHint.CANVAS);
goog.exportProperty(
    ol.RendererHint,
    'DOM',
    ol.RendererHint.DOM);
goog.exportProperty(
    ol.RendererHint,
    'WEBGL',
    ol.RendererHint.WEBGL);


goog.exportSymbol(
    'ol.RendererHints',
    ol.RendererHints);
goog.exportProperty(
    ol.RendererHints,
    'createFromQueryData',
    ol.RendererHints.createFromQueryData);



/**
 * @constructor
 * @extends {ol.View2D}
 * @param {olx.View2DOptionsExtern} options Options.
 */
ol.View2DExport = function(options) {
  /** @type {ol.View2DOptions} */
  var arg = /** @type {ol.View2DOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.center = options.center;
    arg.maxResolution = options.maxResolution;
    arg.maxZoom = options.maxZoom;
    arg.projection = options.projection;
    arg.resolution = options.resolution;
    arg.resolutions = options.resolutions;
    arg.rotation = options.rotation;
    arg.zoom = options.zoom;
    arg.zoomFactor = options.zoomFactor;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.View2DExport,
    ol.View2D);
goog.exportSymbol(
    'ol.View2D',
    ol.View2DExport);
goog.exportProperty(
    ol.View2D.prototype,
    'calculateExtent',
    ol.View2D.prototype.calculateExtent);
goog.exportProperty(
    ol.View2D.prototype,
    'constrainResolution',
    ol.View2D.prototype.constrainResolution);
goog.exportProperty(
    ol.View2D.prototype,
    'constrainRotation',
    ol.View2D.prototype.constrainRotation);
goog.exportProperty(
    ol.View2D.prototype,
    'fitExtent',
    ol.View2D.prototype.fitExtent);
goog.exportProperty(
    ol.View2D.prototype,
    'getView2D',
    ol.View2D.prototype.getView2D);
goog.exportProperty(
    ol.View2D.prototype,
    'getZoom',
    ol.View2D.prototype.getZoom);
goog.exportProperty(
    ol.View2D.prototype,
    'setZoom',
    ol.View2D.prototype.setZoom);


goog.exportSymbol(
    'ol.animation.bounce',
    ol.animation.bounce);


goog.exportSymbol(
    'ol.animation.pan',
    ol.animation.pan);


goog.exportSymbol(
    'ol.animation.rotate',
    ol.animation.rotate);


goog.exportSymbol(
    'ol.animation.zoom',
    ol.animation.zoom);



/**
 * @constructor
 * @extends {ol.control.Attribution}
 * @param {olx.control.AttributionOptionsExtern} options Options.
 */
ol.control.AttributionExport = function(options) {
  /** @type {ol.control.AttributionOptions} */
  var arg = /** @type {ol.control.AttributionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.AttributionExport,
    ol.control.Attribution);
goog.exportSymbol(
    'ol.control.Attribution',
    ol.control.AttributionExport);
goog.exportProperty(
    ol.control.Attribution.prototype,
    'setMap',
    ol.control.Attribution.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ControlOptionsExtern} options Options.
 */
ol.control.ControlExport = function(options) {
  /** @type {ol.control.ControlOptions} */
  var arg = /** @type {ol.control.ControlOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.element = options.element;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ControlExport,
    ol.control.Control);
goog.exportSymbol(
    'ol.control.Control',
    ol.control.ControlExport);
goog.exportProperty(
    ol.control.Control.prototype,
    'getMap',
    ol.control.Control.prototype.getMap);
goog.exportProperty(
    ol.control.Control.prototype,
    'handleMapPostrender',
    ol.control.Control.prototype.handleMapPostrender);
goog.exportProperty(
    ol.control.Control.prototype,
    'setMap',
    ol.control.Control.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.FullScreen}
 * @param {olx.control.FullScreenOptionsExtern} options Options.
 */
ol.control.FullScreenExport = function(options) {
  /** @type {ol.control.FullScreenOptions} */
  var arg = /** @type {ol.control.FullScreenOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.keys = options.keys;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.FullScreenExport,
    ol.control.FullScreen);
goog.exportSymbol(
    'ol.control.FullScreen',
    ol.control.FullScreenExport);



/**
 * @constructor
 * @extends {ol.control.Logo}
 * @param {olx.control.LogoOptionsExtern} options Options.
 */
ol.control.LogoExport = function(options) {
  /** @type {ol.control.LogoOptions} */
  var arg = /** @type {ol.control.LogoOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.LogoExport,
    ol.control.Logo);
goog.exportSymbol(
    'ol.control.Logo',
    ol.control.LogoExport);
goog.exportProperty(
    ol.control.Logo.prototype,
    'setMap',
    ol.control.Logo.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.MousePosition}
 * @param {olx.control.MousePositionOptionsExtern} options Options.
 */
ol.control.MousePositionExport = function(options) {
  /** @type {ol.control.MousePositionOptions} */
  var arg = /** @type {ol.control.MousePositionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.coordinateFormat = options.coordinateFormat;
    arg.map = options.map;
    arg.projection = options.projection;
    arg.target = options.target;
    arg.undefinedHTML = options.undefinedHTML;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.MousePositionExport,
    ol.control.MousePosition);
goog.exportSymbol(
    'ol.control.MousePosition',
    ol.control.MousePositionExport);
goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setMap',
    ol.control.MousePosition.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.ScaleLine}
 * @param {olx.control.ScaleLineOptionsExtern} options Options.
 */
ol.control.ScaleLineExport = function(options) {
  /** @type {ol.control.ScaleLineOptions} */
  var arg = /** @type {ol.control.ScaleLineOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.map = options.map;
    arg.minWidth = options.minWidth;
    arg.target = options.target;
    arg.units = options.units;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ScaleLineExport,
    ol.control.ScaleLine);
goog.exportSymbol(
    'ol.control.ScaleLine',
    ol.control.ScaleLineExport);
goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'setMap',
    ol.control.ScaleLine.prototype.setMap);


goog.exportSymbol(
    'ol.control.ScaleLineUnits',
    ol.control.ScaleLineUnits);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'DEGREES',
    ol.control.ScaleLineUnits.DEGREES);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'IMPERIAL',
    ol.control.ScaleLineUnits.IMPERIAL);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'METRIC',
    ol.control.ScaleLineUnits.METRIC);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'NAUTICAL',
    ol.control.ScaleLineUnits.NAUTICAL);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'US',
    ol.control.ScaleLineUnits.US);



/**
 * @constructor
 * @extends {ol.control.Zoom}
 * @param {olx.control.ZoomOptionsExtern} options Options.
 */
ol.control.ZoomExport = function(options) {
  /** @type {ol.control.ZoomOptions} */
  var arg = /** @type {ol.control.ZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.delta = options.delta;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomExport,
    ol.control.Zoom);
goog.exportSymbol(
    'ol.control.Zoom',
    ol.control.ZoomExport);
goog.exportProperty(
    ol.control.Zoom.prototype,
    'setMap',
    ol.control.Zoom.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.ZoomSlider}
 * @param {olx.control.ZoomSliderOptionsExtern} options Options.
 */
ol.control.ZoomSliderExport = function(options) {
  /** @type {ol.control.ZoomSliderOptions} */
  var arg = /** @type {ol.control.ZoomSliderOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.map = options.map;
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomSliderExport,
    ol.control.ZoomSlider);
goog.exportSymbol(
    'ol.control.ZoomSlider',
    ol.control.ZoomSliderExport);



/**
 * @constructor
 * @extends {ol.control.ZoomToExtent}
 * @param {olx.control.ZoomToExtentOptionsExtern} options Options.
 */
ol.control.ZoomToExtentExport = function(options) {
  /** @type {ol.control.ZoomToExtentOptions} */
  var arg = /** @type {ol.control.ZoomToExtentOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.extent = options.extent;
    arg.map = options.map;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomToExtentExport,
    ol.control.ZoomToExtent);
goog.exportSymbol(
    'ol.control.ZoomToExtent',
    ol.control.ZoomToExtentExport);


goog.exportSymbol(
    'ol.control.defaults',
    ol.control.defaults);


goog.exportSymbol(
    'ol.coordinate.createStringXY',
    ol.coordinate.createStringXY);


goog.exportSymbol(
    'ol.coordinate.fromProjectedArray',
    ol.coordinate.fromProjectedArray);


goog.exportSymbol(
    'ol.coordinate.toStringHDMS',
    ol.coordinate.toStringHDMS);


goog.exportSymbol(
    'ol.coordinate.toStringXY',
    ol.coordinate.toStringXY);


goog.exportSymbol(
    'ol.dom.Input',
    ol.dom.Input);


goog.exportSymbol(
    'ol.easing.bounce',
    ol.easing.bounce);


goog.exportSymbol(
    'ol.easing.easeIn',
    ol.easing.easeIn);


goog.exportSymbol(
    'ol.easing.easeOut',
    ol.easing.easeOut);


goog.exportSymbol(
    'ol.easing.elastic',
    ol.easing.elastic);


goog.exportSymbol(
    'ol.easing.inAndOut',
    ol.easing.inAndOut);


goog.exportSymbol(
    'ol.easing.linear',
    ol.easing.linear);


goog.exportSymbol(
    'ol.easing.upAndDown',
    ol.easing.upAndDown);


goog.exportSymbol(
    'ol.expr.parse',
    ol.expr.parse);


goog.exportSymbol(
    'ol.expr.register',
    ol.expr.register);


goog.exportSymbol(
    'ol.extent.boundingExtent',
    ol.extent.boundingExtent);


goog.exportSymbol(
    'ol.extent.containsCoordinate',
    ol.extent.containsCoordinate);


goog.exportSymbol(
    'ol.extent.containsExtent',
    ol.extent.containsExtent);


goog.exportSymbol(
    'ol.extent.equals',
    ol.extent.equals);


goog.exportSymbol(
    'ol.extent.extend',
    ol.extent.extend);


goog.exportSymbol(
    'ol.extent.getBottomLeft',
    ol.extent.getBottomLeft);


goog.exportSymbol(
    'ol.extent.getBottomRight',
    ol.extent.getBottomRight);


goog.exportSymbol(
    'ol.extent.getCenter',
    ol.extent.getCenter);


goog.exportSymbol(
    'ol.extent.getHeight',
    ol.extent.getHeight);


goog.exportSymbol(
    'ol.extent.getSize',
    ol.extent.getSize);


goog.exportSymbol(
    'ol.extent.getTopLeft',
    ol.extent.getTopLeft);


goog.exportSymbol(
    'ol.extent.getTopRight',
    ol.extent.getTopRight);


goog.exportSymbol(
    'ol.extent.getWidth',
    ol.extent.getWidth);


goog.exportSymbol(
    'ol.extent.intersects',
    ol.extent.intersects);


goog.exportSymbol(
    'ol.extent.isEmpty',
    ol.extent.isEmpty);


goog.exportSymbol(
    'ol.extent.transform',
    ol.extent.transform);


goog.exportSymbol(
    'ol.geom.GeometryType',
    ol.geom.GeometryType);
goog.exportProperty(
    ol.geom.GeometryType,
    'GEOMETRYCOLLECTION',
    ol.geom.GeometryType.GEOMETRYCOLLECTION);
goog.exportProperty(
    ol.geom.GeometryType,
    'LINEARRING',
    ol.geom.GeometryType.LINEARRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'LINESTRING',
    ol.geom.GeometryType.LINESTRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTILINESTRING',
    ol.geom.GeometryType.MULTILINESTRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTIPOINT',
    ol.geom.GeometryType.MULTIPOINT);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTIPOLYGON',
    ol.geom.GeometryType.MULTIPOLYGON);
goog.exportProperty(
    ol.geom.GeometryType,
    'POINT',
    ol.geom.GeometryType.POINT);
goog.exportProperty(
    ol.geom.GeometryType,
    'POLYGON',
    ol.geom.GeometryType.POLYGON);


goog.exportSymbol(
    'ol.geom.LineString',
    ol.geom.LineString);


goog.exportSymbol(
    'ol.geom.MultiLineString',
    ol.geom.MultiLineString);


goog.exportSymbol(
    'ol.geom.MultiPoint',
    ol.geom.MultiPoint);


goog.exportSymbol(
    'ol.geom.MultiPolygon',
    ol.geom.MultiPolygon);


goog.exportSymbol(
    'ol.geom.Point',
    ol.geom.Point);


goog.exportSymbol(
    'ol.geom.Polygon',
    ol.geom.Polygon);


goog.exportSymbol(
    'ol.geom2.LineStringCollection',
    ol.geom2.LineStringCollection);


goog.exportSymbol(
    'ol.geom2.LineStringCollection.pack',
    ol.geom2.LineStringCollection.pack);


goog.exportSymbol(
    'ol.geom2.PointCollection',
    ol.geom2.PointCollection);


goog.exportSymbol(
    'ol.geom2.PointCollection.createEmpty',
    ol.geom2.PointCollection.createEmpty);


goog.exportSymbol(
    'ol.geom2.PointCollection.pack',
    ol.geom2.PointCollection.pack);
goog.exportProperty(
    ol.geom2.PointCollection.prototype,
    'add',
    ol.geom2.PointCollection.prototype.add);


goog.exportSymbol(
    'ol.inherits',
    ol.inherits);



/**
 * @constructor
 * @extends {ol.interaction.DragRotateAndZoom}
 * @param {olx.interaction.DragRotateAndZoomOptionsExtern} options Options.
 */
ol.interaction.DragRotateAndZoomExport = function(options) {
  /** @type {ol.interaction.DragRotateAndZoomOptions} */
  var arg = /** @type {ol.interaction.DragRotateAndZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DragRotateAndZoomExport,
    ol.interaction.DragRotateAndZoom);
goog.exportSymbol(
    'ol.interaction.DragRotateAndZoom',
    ol.interaction.DragRotateAndZoomExport);


goog.exportSymbol(
    'ol.interaction.condition.altKeyOnly',
    ol.interaction.condition.altKeyOnly);


goog.exportSymbol(
    'ol.interaction.condition.altShiftKeysOnly',
    ol.interaction.condition.altShiftKeysOnly);


goog.exportSymbol(
    'ol.interaction.condition.always',
    ol.interaction.condition.always);


goog.exportSymbol(
    'ol.interaction.condition.noModifierKeys',
    ol.interaction.condition.noModifierKeys);


goog.exportSymbol(
    'ol.interaction.condition.platformModifierKeyOnly',
    ol.interaction.condition.platformModifierKeyOnly);


goog.exportSymbol(
    'ol.interaction.condition.shiftKeyOnly',
    ol.interaction.condition.shiftKeyOnly);


goog.exportSymbol(
    'ol.interaction.defaults',
    ol.interaction.defaults);



/**
 * @constructor
 * @extends {ol.layer.ImageLayer}
 * @param {olx.layer.LayerOptionsExtern} options Options.
 */
ol.layer.ImageLayerExport = function(options) {
  /** @type {ol.layer.LayerOptions} */
  var arg = /** @type {ol.layer.LayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.opacity = options.opacity;
    arg.saturation = options.saturation;
    arg.source = options.source;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.ImageLayerExport,
    ol.layer.ImageLayer);
goog.exportSymbol(
    'ol.layer.ImageLayer',
    ol.layer.ImageLayerExport);


goog.exportSymbol(
    'ol.layer.Layer',
    ol.layer.Layer);
goog.exportProperty(
    ol.layer.Layer.prototype,
    'getSource',
    ol.layer.Layer.prototype.getSource);



/**
 * @constructor
 * @extends {ol.layer.LayerGroup}
 * @param {olx.layer.LayerGroupOptionsExtern} options Options.
 */
ol.layer.LayerGroupExport = function(options) {
  /** @type {ol.layer.LayerGroupOptions} */
  var arg = /** @type {ol.layer.LayerGroupOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.layers = options.layers;
    arg.opacity = options.opacity;
    arg.saturation = options.saturation;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.LayerGroupExport,
    ol.layer.LayerGroup);
goog.exportSymbol(
    'ol.layer.LayerGroup',
    ol.layer.LayerGroupExport);



/**
 * @constructor
 * @extends {ol.layer.TileLayer}
 * @param {olx.layer.TileLayerOptionsExtern} options Options.
 */
ol.layer.TileLayerExport = function(options) {
  /** @type {ol.layer.TileLayerOptions} */
  var arg = /** @type {ol.layer.TileLayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.opacity = options.opacity;
    arg.preload = options.preload;
    arg.saturation = options.saturation;
    arg.source = options.source;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.TileLayerExport,
    ol.layer.TileLayer);
goog.exportSymbol(
    'ol.layer.TileLayer',
    ol.layer.TileLayerExport);



/**
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.VectorLayerOptionsExtern} options Options.
 */
ol.layer.VectorExport = function(options) {
  /** @type {ol.layer.VectorLayerOptions} */
  var arg = /** @type {ol.layer.VectorLayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.opacity = options.opacity;
    arg.source = options.source;
    arg.style = options.style;
    arg.transformFeatureInfo = options.transformFeatureInfo;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.VectorExport,
    ol.layer.Vector);
goog.exportSymbol(
    'ol.layer.Vector',
    ol.layer.VectorExport);


goog.exportSymbol(
    'ol.layer.VectorLayer2',
    ol.layer.VectorLayer2);



/**
 * @constructor
 * @extends {ol.layer.VideoTileLayer}
 * @param {olx.layer.VideoTileLayerOptionsExtern} options Options.
 */
ol.layer.VideoTileLayerExport = function(options) {
  /** @type {ol.layer.VideoTileLayerOptions} */
  var arg = /** @type {ol.layer.VideoTileLayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.opacity = options.opacity;
    arg.preload = options.preload;
    arg.saturation = options.saturation;
    arg.source = options.source;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.VideoTileLayerExport,
    ol.layer.VideoTileLayer);
goog.exportSymbol(
    'ol.layer.VideoTileLayer',
    ol.layer.VideoTileLayerExport);


goog.exportSymbol(
    'ol.parser.GPX',
    ol.parser.GPX);
goog.exportProperty(
    ol.parser.GPX.prototype,
    'read',
    ol.parser.GPX.prototype.read);
goog.exportProperty(
    ol.parser.GPX.prototype,
    'write',
    ol.parser.GPX.prototype.write);


goog.exportSymbol(
    'ol.parser.GeoJSON',
    ol.parser.GeoJSON);
goog.exportProperty(
    ol.parser.GeoJSON,
    'read',
    ol.parser.GeoJSON.read);
goog.exportProperty(
    ol.parser.GeoJSON,
    'write',
    ol.parser.GeoJSON.write);
goog.exportProperty(
    ol.parser.GeoJSON.prototype,
    'read',
    ol.parser.GeoJSON.prototype.read);
goog.exportProperty(
    ol.parser.GeoJSON.prototype,
    'write',
    ol.parser.GeoJSON.prototype.write);


goog.exportSymbol(
    'ol.parser.KML',
    ol.parser.KML);
goog.exportProperty(
    ol.parser.KML.prototype,
    'read',
    ol.parser.KML.prototype.read);
goog.exportProperty(
    ol.parser.KML.prototype,
    'write',
    ol.parser.KML.prototype.write);


goog.exportSymbol(
    'ol.parser.TopoJSON',
    ol.parser.TopoJSON);
goog.exportProperty(
    ol.parser.TopoJSON,
    'read',
    ol.parser.TopoJSON.read);
goog.exportProperty(
    ol.parser.TopoJSON.prototype,
    'read',
    ol.parser.TopoJSON.prototype.read);


goog.exportSymbol(
    'ol.parser.WKT',
    ol.parser.WKT);
goog.exportProperty(
    ol.parser.WKT,
    'read',
    ol.parser.WKT.read);
goog.exportProperty(
    ol.parser.WKT,
    'write',
    ol.parser.WKT.write);
goog.exportProperty(
    ol.parser.WKT.prototype,
    'read',
    ol.parser.WKT.prototype.read);
goog.exportProperty(
    ol.parser.WKT.prototype,
    'write',
    ol.parser.WKT.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.GML_v2',
    ol.parser.ogc.GML_v2);
goog.exportProperty(
    ol.parser.ogc.GML_v2.prototype,
    'read',
    ol.parser.ogc.GML_v2.prototype.read);
goog.exportProperty(
    ol.parser.ogc.GML_v2.prototype,
    'write',
    ol.parser.ogc.GML_v2.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.GML_v3',
    ol.parser.ogc.GML_v3);
goog.exportProperty(
    ol.parser.ogc.GML_v3.prototype,
    'read',
    ol.parser.ogc.GML_v3.prototype.read);
goog.exportProperty(
    ol.parser.ogc.GML_v3.prototype,
    'write',
    ol.parser.ogc.GML_v3.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.WMSCapabilities',
    ol.parser.ogc.WMSCapabilities);
goog.exportProperty(
    ol.parser.ogc.WMSCapabilities.prototype,
    'read',
    ol.parser.ogc.WMSCapabilities.prototype.read);


goog.exportSymbol(
    'ol.parser.ogc.WMTSCapabilities',
    ol.parser.ogc.WMTSCapabilities);
goog.exportProperty(
    ol.parser.ogc.WMTSCapabilities.prototype,
    'read',
    ol.parser.ogc.WMTSCapabilities.prototype.read);


goog.exportSymbol(
    'ol.proj.addCommonProjections',
    ol.proj.addCommonProjections);


goog.exportSymbol(
    'ol.proj.addProjection',
    ol.proj.addProjection);


goog.exportSymbol(
    'ol.proj.configureProj4jsProjection',
    ol.proj.configureProj4jsProjection);


goog.exportSymbol(
    'ol.proj.get',
    ol.proj.get);


goog.exportSymbol(
    'ol.proj.getTransform',
    ol.proj.getTransform);


goog.exportSymbol(
    'ol.proj.getTransformFromProjections',
    ol.proj.getTransformFromProjections);


goog.exportSymbol(
    'ol.proj.transform',
    ol.proj.transform);


goog.exportSymbol(
    'ol.proj.transformWithProjections',
    ol.proj.transformWithProjections);
goog.exportProperty(
    ol.renderer.canvas.Map.prototype,
    'getCanvas',
    ol.renderer.canvas.Map.prototype.getCanvas);



/**
 * @constructor
 * @extends {ol.source.BingMaps}
 * @param {olx.source.BingMapsOptionsExtern} options Options.
 */
ol.source.BingMapsExport = function(options) {
  /** @type {ol.source.BingMapsOptions} */
  var arg = /** @type {ol.source.BingMapsOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.culture = options.culture;
    arg.key = options.key;
    arg.style = options.style;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.BingMapsExport,
    ol.source.BingMaps);
goog.exportSymbol(
    'ol.source.BingMaps',
    ol.source.BingMapsExport);



/**
 * @constructor
 * @extends {ol.source.DebugTileSource}
 * @param {olx.source.DebugTileSourceOptionsExtern} options Options.
 */
ol.source.DebugTileSourceExport = function(options) {
  /** @type {ol.source.DebugTileSourceOptions} */
  var arg = /** @type {ol.source.DebugTileSourceOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.extent = options.extent;
    arg.projection = options.projection;
    arg.tileGrid = options.tileGrid;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.DebugTileSourceExport,
    ol.source.DebugTileSource);
goog.exportSymbol(
    'ol.source.DebugTileSource',
    ol.source.DebugTileSourceExport);


goog.exportSymbol(
    'ol.source.MapQuestOSM',
    ol.source.MapQuestOSM);


goog.exportSymbol(
    'ol.source.MapQuestOpenAerial',
    ol.source.MapQuestOpenAerial);


goog.exportSymbol(
    'ol.source.OSM',
    ol.source.OSM);
goog.exportProperty(
    ol.source.OSM,
    'DATA_ATTRIBUTION',
    ol.source.OSM.DATA_ATTRIBUTION);
goog.exportProperty(
    ol.source.OSM,
    'TILE_ATTRIBUTION',
    ol.source.OSM.TILE_ATTRIBUTION);



/**
 * @constructor
 * @extends {ol.source.SingleImageWMS}
 * @param {olx.source.SingleImageWMSOptionsExtern} options Options.
 */
ol.source.SingleImageWMSExport = function(options) {
  /** @type {ol.source.SingleImageWMSOptions} */
  var arg = /** @type {ol.source.SingleImageWMSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.params = options.params;
    arg.projection = options.projection;
    arg.ratio = options.ratio;
    arg.resolutions = options.resolutions;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.SingleImageWMSExport,
    ol.source.SingleImageWMS);
goog.exportSymbol(
    'ol.source.SingleImageWMS',
    ol.source.SingleImageWMSExport);



/**
 * @constructor
 * @extends {ol.source.Stamen}
 * @param {olx.source.StamenOptionsExtern} options Options.
 */
ol.source.StamenExport = function(options) {
  /** @type {ol.source.StamenOptions} */
  var arg = /** @type {ol.source.StamenOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.layer = options.layer;
    arg.maxZoom = options.maxZoom;
    arg.minZoom = options.minZoom;
    arg.opaque = options.opaque;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.StamenExport,
    ol.source.Stamen);
goog.exportSymbol(
    'ol.source.Stamen',
    ol.source.StamenExport);



/**
 * @constructor
 * @extends {ol.source.StaticImage}
 * @param {olx.source.StaticImageOptionsExtern} options Options.
 */
ol.source.StaticImageExport = function(options) {
  /** @type {ol.source.StaticImageOptions} */
  var arg = /** @type {ol.source.StaticImageOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.imageExtent = options.imageExtent;
    arg.imageSize = options.imageSize;
    arg.projection = options.projection;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.StaticImageExport,
    ol.source.StaticImage);
goog.exportSymbol(
    'ol.source.StaticImage',
    ol.source.StaticImageExport);



/**
 * @constructor
 * @extends {ol.source.TileJSON}
 * @param {olx.source.TileJSONOptionsExtern} options Options.
 */
ol.source.TileJSONExport = function(options) {
  /** @type {ol.source.TileJSONOptions} */
  var arg = /** @type {ol.source.TileJSONOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.crossOrigin = options.crossOrigin;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TileJSONExport,
    ol.source.TileJSON);
goog.exportSymbol(
    'ol.source.TileJSON',
    ol.source.TileJSONExport);


goog.exportSymbol(
    'ol.source.TileSource',
    ol.source.TileSource);
goog.exportProperty(
    ol.source.TileSource.prototype,
    'getTileGrid',
    ol.source.TileSource.prototype.getTileGrid);



/**
 * @constructor
 * @extends {ol.source.TiledVideoWMS}
 * @param {olx.source.TiledVideoWMSOptionsExtern} options Options.
 */
ol.source.TiledVideoWMSExport = function(options) {
  /** @type {ol.source.TiledVideoWMSOptions} */
  var arg = /** @type {ol.source.TiledVideoWMSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.maxZoom = options.maxZoom;
    arg.params = options.params;
    arg.projection = options.projection;
    arg.tileGrid = options.tileGrid;
    arg.url = options.url;
    arg.urls = options.urls;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TiledVideoWMSExport,
    ol.source.TiledVideoWMS);
goog.exportSymbol(
    'ol.source.TiledVideoWMS',
    ol.source.TiledVideoWMSExport);



/**
 * @constructor
 * @extends {ol.source.TiledWMS}
 * @param {olx.source.TiledWMSOptionsExtern} options Options.
 */
ol.source.TiledWMSExport = function(options) {
  /** @type {ol.source.TiledWMSOptions} */
  var arg = /** @type {ol.source.TiledWMSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.maxZoom = options.maxZoom;
    arg.params = options.params;
    arg.projection = options.projection;
    arg.tileGrid = options.tileGrid;
    arg.url = options.url;
    arg.urls = options.urls;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TiledWMSExport,
    ol.source.TiledWMS);
goog.exportSymbol(
    'ol.source.TiledWMS',
    ol.source.TiledWMSExport);



/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.VectorOptionsExtern} options Options.
 */
ol.source.VectorExport = function(options) {
  /** @type {ol.source.VectorOptions} */
  var arg = /** @type {ol.source.VectorOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.data = options.data;
    arg.extent = options.extent;
    arg.logo = options.logo;
    arg.parser = options.parser;
    arg.projection = options.projection;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.VectorExport,
    ol.source.Vector);
goog.exportSymbol(
    'ol.source.Vector',
    ol.source.VectorExport);


goog.exportSymbol(
    'ol.source.VectorSource2',
    ol.source.VectorSource2);


goog.exportSymbol(
    'ol.source.VideoTileSource',
    ol.source.VideoTileSource);


goog.exportSymbol(
    'ol.source.WMSGetFeatureInfoMethod',
    ol.source.WMSGetFeatureInfoMethod);



/**
 * @constructor
 * @extends {ol.source.WMTS}
 * @param {olx.source.WMTSOptionsExtern} options Options.
 */
ol.source.WMTSExport = function(options) {
  /** @type {ol.source.WMTSOptions} */
  var arg = /** @type {ol.source.WMTSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.dimensions = options.dimensions;
    arg.extent = options.extent;
    arg.format = options.format;
    arg.layer = options.layer;
    arg.matrixSet = options.matrixSet;
    arg.maxZoom = options.maxZoom;
    arg.projection = options.projection;
    arg.requestEncoding = options.requestEncoding;
    arg.style = options.style;
    arg.tileGrid = options.tileGrid;
    arg.url = options.url;
    arg.urls = options.urls;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.WMTSExport,
    ol.source.WMTS);
goog.exportSymbol(
    'ol.source.WMTS',
    ol.source.WMTSExport);


goog.exportSymbol(
    'ol.source.WMTS.optionsFromCapabilities',
    ol.source.WMTS.optionsFromCapabilities);



/**
 * @constructor
 * @extends {ol.style.Icon}
 * @param {olx.style.IconOptionsExtern} options Options.
 */
ol.style.IconExport = function(options) {
  /** @type {ol.style.IconOptions} */
  var arg = /** @type {ol.style.IconOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.height = options.height;
    arg.opacity = options.opacity;
    arg.rotation = options.rotation;
    arg.url = options.url;
    arg.width = options.width;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.IconExport,
    ol.style.Icon);
goog.exportSymbol(
    'ol.style.Icon',
    ol.style.IconExport);


goog.exportSymbol(
    'ol.style.IconType',
    ol.style.IconType);



/**
 * @constructor
 * @extends {ol.style.Line}
 * @param {olx.style.LineOptionsExtern} options Options.
 */
ol.style.LineExport = function(options) {
  /** @type {ol.style.LineOptions} */
  var arg = /** @type {ol.style.LineOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.strokeColor = options.strokeColor;
    arg.strokeOpacity = options.strokeOpacity;
    arg.strokeWidth = options.strokeWidth;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.LineExport,
    ol.style.Line);
goog.exportSymbol(
    'ol.style.Line',
    ol.style.LineExport);



/**
 * @constructor
 * @extends {ol.style.Polygon}
 * @param {olx.style.PolygonOptionsExtern} options Options.
 */
ol.style.PolygonExport = function(options) {
  /** @type {ol.style.PolygonOptions} */
  var arg = /** @type {ol.style.PolygonOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.fillColor = options.fillColor;
    arg.opacity = options.opacity;
    arg.strokeColor = options.strokeColor;
    arg.strokeWidth = options.strokeWidth;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.PolygonExport,
    ol.style.Polygon);
goog.exportSymbol(
    'ol.style.Polygon',
    ol.style.PolygonExport);



/**
 * @constructor
 * @extends {ol.style.Rule}
 * @param {olx.style.RuleOptionsExtern} options Options.
 */
ol.style.RuleExport = function(options) {
  /** @type {ol.style.RuleOptions} */
  var arg = /** @type {ol.style.RuleOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.filter = options.filter;
    arg.symbolizers = options.symbolizers;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.RuleExport,
    ol.style.Rule);
goog.exportSymbol(
    'ol.style.Rule',
    ol.style.RuleExport);



/**
 * @constructor
 * @extends {ol.style.Shape}
 * @param {olx.style.ShapeOptionsExtern} options Options.
 */
ol.style.ShapeExport = function(options) {
  /** @type {ol.style.ShapeOptions} */
  var arg = /** @type {ol.style.ShapeOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.fillColor = options.fillColor;
    arg.fillOpacity = options.fillOpacity;
    arg.size = options.size;
    arg.strokeColor = options.strokeColor;
    arg.strokeOpacity = options.strokeOpacity;
    arg.strokeWidth = options.strokeWidth;
    arg.type = options.type;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.ShapeExport,
    ol.style.Shape);
goog.exportSymbol(
    'ol.style.Shape',
    ol.style.ShapeExport);


goog.exportSymbol(
    'ol.style.ShapeType',
    ol.style.ShapeType);
goog.exportProperty(
    ol.style.ShapeType,
    'CIRCLE',
    ol.style.ShapeType.CIRCLE);



/**
 * @constructor
 * @extends {ol.style.Style}
 * @param {olx.style.StyleOptionsExtern} options Options.
 */
ol.style.StyleExport = function(options) {
  /** @type {ol.style.StyleOptions} */
  var arg = /** @type {ol.style.StyleOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.rules = options.rules;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.StyleExport,
    ol.style.Style);
goog.exportSymbol(
    'ol.style.Style',
    ol.style.StyleExport);



/**
 * @constructor
 * @extends {ol.style.Text}
 * @param {olx.style.TextOptionsExtern} options Options.
 */
ol.style.TextExport = function(options) {
  /** @type {ol.style.TextOptions} */
  var arg = /** @type {ol.style.TextOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.color = options.color;
    arg.fontFamily = options.fontFamily;
    arg.fontSize = options.fontSize;
    arg.opacity = options.opacity;
    arg.text = options.text;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.TextExport,
    ol.style.Text);
goog.exportSymbol(
    'ol.style.Text',
    ol.style.TextExport);



/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.TileGridOptionsExtern} options Options.
 */
ol.tilegrid.TileGridExport = function(options) {
  /** @type {ol.tilegrid.TileGridOptions} */
  var arg = /** @type {ol.tilegrid.TileGridOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.minZoom = options.minZoom;
    arg.origin = options.origin;
    arg.origins = options.origins;
    arg.resolutions = options.resolutions;
    arg.tileSize = options.tileSize;
    arg.tileSizes = options.tileSizes;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.TileGridExport,
    ol.tilegrid.TileGrid);
goog.exportSymbol(
    'ol.tilegrid.TileGrid',
    ol.tilegrid.TileGridExport);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getMinZoom',
    ol.tilegrid.TileGrid.prototype.getMinZoom);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getOrigin',
    ol.tilegrid.TileGrid.prototype.getOrigin);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getResolutions',
    ol.tilegrid.TileGrid.prototype.getResolutions);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getTileSize',
    ol.tilegrid.TileGrid.prototype.getTileSize);



/**
 * @constructor
 * @extends {ol.tilegrid.WMTS}
 * @param {olx.tilegrid.WMTSOptionsExtern} options Options.
 */
ol.tilegrid.WMTSExport = function(options) {
  /** @type {ol.tilegrid.WMTSOptions} */
  var arg = /** @type {ol.tilegrid.WMTSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.matrixIds = options.matrixIds;
    arg.origin = options.origin;
    arg.origins = options.origins;
    arg.resolutions = options.resolutions;
    arg.tileSize = options.tileSize;
    arg.tileSizes = options.tileSizes;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.WMTSExport,
    ol.tilegrid.WMTS);
goog.exportSymbol(
    'ol.tilegrid.WMTS',
    ol.tilegrid.WMTSExport);
goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getMatrixIds',
    ol.tilegrid.WMTS.prototype.getMatrixIds);



/**
 * @constructor
 * @extends {ol.tilegrid.XYZ}
 * @param {olx.tilegrid.XYZOptionsExtern} options Options.
 */
ol.tilegrid.XYZExport = function(options) {
  /** @type {ol.tilegrid.XYZOptions} */
  var arg = /** @type {ol.tilegrid.XYZOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.maxZoom = options.maxZoom;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.XYZExport,
    ol.tilegrid.XYZ);
goog.exportSymbol(
    'ol.tilegrid.XYZ',
    ol.tilegrid.XYZExport);
