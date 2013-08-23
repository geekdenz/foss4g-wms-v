goog.require('ol.Attribution');
goog.require('ol.Collection');
goog.require('ol.Expression');
goog.require('ol.Feature');
goog.require('ol.Geolocation');
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
goog.require('ol.control.FullScreen');
goog.require('ol.control.Logo');
goog.require('ol.control.MousePosition');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.control.Zoom');
goog.require('ol.control.ZoomSlider');
goog.require('ol.coordinate');
goog.require('ol.dom.Input');
goog.require('ol.easing');
goog.require('ol.extent');
goog.require('ol.filter.Filter');
goog.require('ol.filter.Geometry');
goog.require('ol.filter.Logical');
goog.require('ol.filter.LogicalOperator');
goog.require('ol.geom.LineString');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');
goog.require('ol.interaction.DragRotateAndZoom');
goog.require('ol.interaction.condition');
goog.require('ol.layer.ImageLayer');
goog.require('ol.layer.TileLayer');
goog.require('ol.layer.Vector');
goog.require('ol.parser.GeoJSON');
goog.require('ol.parser.KML');
goog.require('ol.parser.ogc.WMSCapabilities');
goog.require('ol.parser.ogc.WMTSCapabilities');
goog.require('ol.projection');
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
goog.require('ol.source.TiledVideoWMS');
goog.require('ol.source.TiledWMS');
goog.require('ol.source.Vector');
goog.require('ol.source.WMTS');
goog.require('ol.style.Icon');
goog.require('ol.style.IconType');
goog.require('ol.style.Line');
goog.require('ol.style.Polygon');
goog.require('ol.style.Rule');
goog.require('ol.style.Shape');
goog.require('ol.style.ShapeType');
goog.require('ol.style.Style');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.tilegrid.XYZ');


goog.exportSymbol(
    'goog.require',
    goog.nullFunction);


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


goog.exportSymbol(
    'ol.Expression',
    ol.Expression);


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
    'getGeometry',
    ol.Feature.prototype.getGeometry);
goog.exportProperty(
    ol.Feature.prototype,
    'set',
    ol.Feature.prototype.set);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      projection: options.projection,
      tracking: options.tracking,
      trackingOptions: options.trackingOptions
    };
  } else {
    arg = /** @type {ol.GeolocationOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.GeolocationExport,
    ol.Geolocation);
goog.exportSymbol(
    'ol.Geolocation',
    ol.GeolocationExport);



/**
 * @constructor
 * @extends {ol.Map}
 * @param {olx.MapOptionsExtern} options Options.
 */
ol.MapExport = function(options) {
  /** @type {ol.MapOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      controls: options.controls,
      interactions: options.interactions,
      layers: options.layers,
      renderer: options.renderer,
      renderers: options.renderers,
      target: options.target,
      view: options.view
    };
  } else {
    arg = /** @type {ol.MapOptions} */ (options);
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
    'getFeatureInfoForPixel',
    ol.Map.prototype.getFeatureInfoForPixel);
goog.exportProperty(
    ol.Map.prototype,
    'getInteractions',
    ol.Map.prototype.getInteractions);
goog.exportProperty(
    ol.Map.prototype,
    'getRenderer',
    ol.Map.prototype.getRenderer);
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
    'setOptions',
    ol.Object.prototype.setOptions);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      element: options.element,
      map: options.map,
      position: options.position,
      positioning: options.positioning
    };
  } else {
    arg = /** @type {ol.OverlayOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      axisOrientation: options.axisOrientation,
      code: options.code,
      extent: options.extent,
      global: options.global,
      units: options.units
    };
  } else {
    arg = /** @type {ol.ProjectionOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      center: options.center,
      maxResolution: options.maxResolution,
      maxZoom: options.maxZoom,
      projection: options.projection,
      resolution: options.resolution,
      resolutions: options.resolutions,
      rotation: options.rotation,
      zoom: options.zoom,
      zoomFactor: options.zoomFactor
    };
  } else {
    arg = /** @type {ol.View2DOptions} */ (options);
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
    'fitExtent',
    ol.View2D.prototype.fitExtent);
goog.exportProperty(
    ol.View2D.prototype,
    'getView2D',
    ol.View2D.prototype.getView2D);


goog.exportSymbol(
    'ol.animation',
    ol.animation);
goog.exportProperty(
    ol.animation,
    'bounce',
    ol.animation.bounce);
goog.exportProperty(
    ol.animation,
    'pan',
    ol.animation.pan);
goog.exportProperty(
    ol.animation,
    'rotate',
    ol.animation.rotate);
goog.exportProperty(
    ol.animation,
    'zoom',
    ol.animation.zoom);



/**
 * @constructor
 * @extends {ol.control.Attribution}
 * @param {olx.control.AttributionOptionsExtern} options Options.
 */
ol.control.AttributionExport = function(options) {
  /** @type {ol.control.AttributionOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      map: options.map,
      target: options.target
    };
  } else {
    arg = /** @type {ol.control.AttributionOptions} */ (options);
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
 * @extends {ol.control.FullScreen}
 * @param {olx.control.FullScreenOptionsExtern} options Options.
 */
ol.control.FullScreenExport = function(options) {
  /** @type {ol.control.FullScreenOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      keys: options.keys,
      map: options.map,
      target: options.target
    };
  } else {
    arg = /** @type {ol.control.FullScreenOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      map: options.map,
      target: options.target
    };
  } else {
    arg = /** @type {ol.control.LogoOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      coordinateFormat: options.coordinateFormat,
      map: options.map,
      projection: options.projection,
      target: options.target,
      undefinedHTML: options.undefinedHTML
    };
  } else {
    arg = /** @type {ol.control.MousePositionOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      map: options.map,
      minWidth: options.minWidth,
      target: options.target,
      units: options.units
    };
  } else {
    arg = /** @type {ol.control.ScaleLineOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      delta: options.delta,
      map: options.map,
      target: options.target
    };
  } else {
    arg = /** @type {ol.control.ZoomOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      map: options.map,
      maxResolution: options.maxResolution,
      minResolution: options.minResolution
    };
  } else {
    arg = /** @type {ol.control.ZoomSliderOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomSliderExport,
    ol.control.ZoomSlider);
goog.exportSymbol(
    'ol.control.ZoomSlider',
    ol.control.ZoomSliderExport);


goog.exportSymbol(
    'ol.control.defaults',
    ol.control.defaults);


goog.exportSymbol(
    'ol.coordinate',
    ol.coordinate);


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
    'ol.easing',
    ol.easing);
goog.exportProperty(
    ol.easing,
    'bounce',
    ol.easing.bounce);
goog.exportProperty(
    ol.easing,
    'easeIn',
    ol.easing.easeIn);
goog.exportProperty(
    ol.easing,
    'easeOut',
    ol.easing.easeOut);
goog.exportProperty(
    ol.easing,
    'elastic',
    ol.easing.elastic);
goog.exportProperty(
    ol.easing,
    'inAndOut',
    ol.easing.inAndOut);
goog.exportProperty(
    ol.easing,
    'linear',
    ol.easing.linear);
goog.exportProperty(
    ol.easing,
    'upAndDown',
    ol.easing.upAndDown);


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
    'ol.filter.Filter',
    ol.filter.Filter);


goog.exportSymbol(
    'ol.filter.Geometry',
    ol.filter.Geometry);


goog.exportSymbol(
    'ol.filter.Logical',
    ol.filter.Logical);


goog.exportSymbol(
    'ol.filter.LogicalOperator',
    ol.filter.LogicalOperator);
goog.exportProperty(
    ol.filter.LogicalOperator,
    'AND',
    ol.filter.LogicalOperator.AND);
goog.exportProperty(
    ol.filter.LogicalOperator,
    'OR',
    ol.filter.LogicalOperator.OR);


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



/**
 * @constructor
 * @extends {ol.interaction.DragRotateAndZoom}
 * @param {olx.interaction.DragRotateAndZoomOptionsExtern} options Options.
 */
ol.interaction.DragRotateAndZoomExport = function(options) {
  /** @type {ol.interaction.DragRotateAndZoomOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      condition: options.condition
    };
  } else {
    arg = /** @type {ol.interaction.DragRotateAndZoomOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      brightness: options.brightness,
      contrast: options.contrast,
      hue: options.hue,
      opacity: options.opacity,
      saturation: options.saturation,
      source: options.source,
      visible: options.visible
    };
  } else {
    arg = /** @type {ol.layer.LayerOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.ImageLayerExport,
    ol.layer.ImageLayer);
goog.exportSymbol(
    'ol.layer.ImageLayer',
    ol.layer.ImageLayerExport);



/**
 * @constructor
 * @extends {ol.layer.TileLayer}
 * @param {olx.layer.TileLayerOptionsExtern} options Options.
 */
ol.layer.TileLayerExport = function(options) {
  /** @type {ol.layer.TileLayerOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      brightness: options.brightness,
      contrast: options.contrast,
      hue: options.hue,
      opacity: options.opacity,
      preload: options.preload,
      saturation: options.saturation,
      source: options.source,
      visible: options.visible
    };
  } else {
    arg = /** @type {ol.layer.TileLayerOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      opacity: options.opacity,
      source: options.source,
      style: options.style,
      visible: options.visible
    };
  } else {
    arg = /** @type {ol.layer.VectorLayerOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.VectorExport,
    ol.layer.Vector);
goog.exportSymbol(
    'ol.layer.Vector',
    ol.layer.VectorExport);
goog.exportProperty(
    ol.layer.Vector.prototype,
    'parseFeatures',
    ol.layer.Vector.prototype.parseFeatures);


goog.exportSymbol(
    'ol.parser.GeoJSON',
    ol.parser.GeoJSON);
goog.exportProperty(
    ol.parser.GeoJSON.prototype,
    'read',
    ol.parser.GeoJSON.prototype.read);


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
    'ol.projection.addCommonProjections',
    ol.projection.addCommonProjections);


goog.exportSymbol(
    'ol.projection.addProjection',
    ol.projection.addProjection);


goog.exportSymbol(
    'ol.projection.configureProj4jsProjection',
    ol.projection.configureProj4jsProjection);


goog.exportSymbol(
    'ol.projection.get',
    ol.projection.get);


goog.exportSymbol(
    'ol.projection.getTransform',
    ol.projection.getTransform);


goog.exportSymbol(
    'ol.projection.getTransformFromProjections',
    ol.projection.getTransformFromProjections);


goog.exportSymbol(
    'ol.projection.transform',
    ol.projection.transform);


goog.exportSymbol(
    'ol.projection.transformWithProjections',
    ol.projection.transformWithProjections);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      culture: options.culture,
      key: options.key,
      style: options.style
    };
  } else {
    arg = /** @type {ol.source.BingMapsOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      extent: options.extent,
      projection: options.projection,
      tileGrid: options.tileGrid
    };
  } else {
    arg = /** @type {ol.source.DebugTileSourceOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      crossOrigin: options.crossOrigin,
      extent: options.extent,
      params: options.params,
      projection: options.projection,
      ratio: options.ratio,
      resolutions: options.resolutions,
      url: options.url
    };
  } else {
    arg = /** @type {ol.source.SingleImageWMSOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      layer: options.layer,
      maxZoom: options.maxZoom,
      minZoom: options.minZoom,
      opaque: options.opaque,
      url: options.url
    };
  } else {
    arg = /** @type {ol.source.StamenOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      crossOrigin: options.crossOrigin,
      extent: options.extent,
      imageExtent: options.imageExtent,
      imageSize: options.imageSize,
      projection: options.projection,
      url: options.url
    };
  } else {
    arg = /** @type {ol.source.StaticImageOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      crossOrigin: options.crossOrigin,
      url: options.url
    };
  } else {
    arg = /** @type {ol.source.TileJSONOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TileJSONExport,
    ol.source.TileJSON);
goog.exportSymbol(
    'ol.source.TileJSON',
    ol.source.TileJSONExport);



/**
 * @constructor
 * @extends {ol.source.TiledVideoWMS}
 * @param {olx.source.TiledWMSOptionsExtern} options Options.
 */
ol.source.TiledVideoWMSExport = function(options) {
  /** @type {ol.source.TiledWMSOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      crossOrigin: options.crossOrigin,
      extent: options.extent,
      maxZoom: options.maxZoom,
      params: options.params,
      projection: options.projection,
      tileGrid: options.tileGrid,
      url: options.url,
      urls: options.urls
    };
  } else {
    arg = /** @type {ol.source.TiledWMSOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      crossOrigin: options.crossOrigin,
      extent: options.extent,
      maxZoom: options.maxZoom,
      params: options.params,
      projection: options.projection,
      tileGrid: options.tileGrid,
      url: options.url,
      urls: options.urls
    };
  } else {
    arg = /** @type {ol.source.TiledWMSOptions} */ (options);
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
 * @param {olx.source.SourceOptionsExtern} options Options.
 */
ol.source.VectorExport = function(options) {
  /** @type {ol.source.SourceOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      extent: options.extent,
      logo: options.logo,
      projection: options.projection
    };
  } else {
    arg = /** @type {ol.source.SourceOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.VectorExport,
    ol.source.Vector);
goog.exportSymbol(
    'ol.source.Vector',
    ol.source.VectorExport);



/**
 * @constructor
 * @extends {ol.source.WMTS}
 * @param {olx.source.WMTSOptionsExtern} options Options.
 */
ol.source.WMTSExport = function(options) {
  /** @type {ol.source.WMTSOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      attributions: options.attributions,
      crossOrigin: options.crossOrigin,
      dimensions: options.dimensions,
      extent: options.extent,
      format: options.format,
      layer: options.layer,
      matrixSet: options.matrixSet,
      maxZoom: options.maxZoom,
      projection: options.projection,
      requestEncoding: options.requestEncoding,
      style: options.style,
      tileGrid: options.tileGrid,
      url: options.url,
      urls: options.urls
    };
  } else {
    arg = /** @type {ol.source.WMTSOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      height: options.height,
      opacity: options.opacity,
      rotation: options.rotation,
      url: options.url,
      width: options.width
    };
  } else {
    arg = /** @type {ol.style.IconOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      opacity: options.opacity,
      strokeColor: options.strokeColor,
      strokeWidth: options.strokeWidth
    };
  } else {
    arg = /** @type {ol.style.LineOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      fillColor: options.fillColor,
      opacity: options.opacity,
      strokeColor: options.strokeColor,
      strokeWidth: options.strokeWidth
    };
  } else {
    arg = /** @type {ol.style.PolygonOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      filter: options.filter,
      symbolizers: options.symbolizers
    };
  } else {
    arg = /** @type {ol.style.RuleOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      fillColor: options.fillColor,
      opacity: options.opacity,
      size: options.size,
      strokeColor: options.strokeColor,
      strokeWidth: options.strokeWidth,
      type: options.type
    };
  } else {
    arg = /** @type {ol.style.ShapeOptions} */ (options);
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
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      rules: options.rules
    };
  } else {
    arg = /** @type {ol.style.StyleOptions} */ (options);
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
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.TileGridOptionsExtern} options Options.
 */
ol.tilegrid.TileGridExport = function(options) {
  /** @type {ol.tilegrid.TileGridOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      minZoom: options.minZoom,
      origin: options.origin,
      origins: options.origins,
      resolutions: options.resolutions,
      tileSize: options.tileSize,
      tileSizes: options.tileSizes
    };
  } else {
    arg = /** @type {ol.tilegrid.TileGridOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.TileGridExport,
    ol.tilegrid.TileGrid);
goog.exportSymbol(
    'ol.tilegrid.TileGrid',
    ol.tilegrid.TileGridExport);



/**
 * @constructor
 * @extends {ol.tilegrid.WMTS}
 * @param {olx.tilegrid.WMTSOptionsExtern} options Options.
 */
ol.tilegrid.WMTSExport = function(options) {
  /** @type {ol.tilegrid.WMTSOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      matrixIds: options.matrixIds,
      origin: options.origin,
      origins: options.origins,
      resolutions: options.resolutions,
      tileSize: options.tileSize,
      tileSizes: options.tileSizes
    };
  } else {
    arg = /** @type {ol.tilegrid.WMTSOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.WMTSExport,
    ol.tilegrid.WMTS);
goog.exportSymbol(
    'ol.tilegrid.WMTS',
    ol.tilegrid.WMTSExport);



/**
 * @constructor
 * @extends {ol.tilegrid.XYZ}
 * @param {olx.tilegrid.XYZOptionsExtern} options Options.
 */
ol.tilegrid.XYZExport = function(options) {
  /** @type {ol.tilegrid.XYZOptions} */
  var arg;
  if (goog.isDefAndNotNull(options)) {
    arg = {
      maxZoom: options.maxZoom
    };
  } else {
    arg = /** @type {ol.tilegrid.XYZOptions} */ (options);
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.XYZExport,
    ol.tilegrid.XYZ);
goog.exportSymbol(
    'ol.tilegrid.XYZ',
    ol.tilegrid.XYZExport);
