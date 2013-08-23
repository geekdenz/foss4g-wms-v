/**
 * @externs
 */


/**
 * @type {Object}
 */
var olx;


/**
 * @type {Object}
 */
olx.animation = {};


/**
 * @type {Object}
 */
olx.control = {};


/**
 * @type {Object}
 */
olx.interaction = {};


/**
 * @type {Object}
 */
olx.layer = {};


/**
 * @type {Object}
 */
olx.parser = {};


/**
 * @type {Object}
 */
olx.source = {};


/**
 * @type {Object}
 */
olx.style = {};


/**
 * @type {Object}
 */
olx.tilegrid = {};



/**
 * @interface
 */
olx.GeolocationOptionsExtern = function() {};


/**
 * @type {ol.ProjectionLike}
 */
olx.GeolocationOptionsExtern.prototype.projection;


/**
 * @type {boolean|undefined}
 */
olx.GeolocationOptionsExtern.prototype.tracking;


/**
 * @type {GeolocationPositionOptions|undefined}
 */
olx.GeolocationOptionsExtern.prototype.trackingOptions;



/**
 * @interface
 */
olx.MapOptionsExtern = function() {};


/**
 * @type {Array.<ol.control.Control>|undefined}
 */
olx.MapOptionsExtern.prototype.controls;


/**
 * @type {ol.Collection|undefined}
 */
olx.MapOptionsExtern.prototype.interactions;


/**
 * @type {Array.<ol.layer.Layer>|ol.Collection|undefined}
 */
olx.MapOptionsExtern.prototype.layers;


/**
 * @type {ol.RendererHint|undefined}
 */
olx.MapOptionsExtern.prototype.renderer;


/**
 * @type {Array.<ol.RendererHint>|undefined}
 */
olx.MapOptionsExtern.prototype.renderers;


/**
 * @type {Element|string|undefined}
 */
olx.MapOptionsExtern.prototype.target;


/**
 * @type {ol.IView|undefined}
 */
olx.MapOptionsExtern.prototype.view;



/**
 * @interface
 */
olx.OverlayOptionsExtern = function() {};


/**
 * @type {Element|undefined}
 */
olx.OverlayOptionsExtern.prototype.element;


/**
 * @type {ol.Map|undefined}
 */
olx.OverlayOptionsExtern.prototype.map;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.OverlayOptionsExtern.prototype.position;


/**
 * @type {ol.OverlayPositioning|undefined}
 */
olx.OverlayOptionsExtern.prototype.positioning;



/**
 * @interface
 */
olx.Proj4jsProjectionOptionsExtern = function() {};


/**
 * @type {string}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.code;


/**
 * @type {ol.Extent}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.extent;


/**
 * @type {boolean|undefined}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.global;



/**
 * @interface
 */
olx.ProjectionOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.ProjectionOptionsExtern.prototype.axisOrientation;


/**
 * @type {string}
 */
olx.ProjectionOptionsExtern.prototype.code;


/**
 * @type {ol.Extent}
 */
olx.ProjectionOptionsExtern.prototype.extent;


/**
 * @type {boolean|undefined}
 */
olx.ProjectionOptionsExtern.prototype.global;


/**
 * @type {ol.ProjectionUnits}
 */
olx.ProjectionOptionsExtern.prototype.units;



/**
 * @interface
 */
olx.View2DOptionsExtern = function() {};


/**
 * @type {ol.Coordinate|undefined}
 */
olx.View2DOptionsExtern.prototype.center;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.maxZoom;


/**
 * @type {ol.ProjectionLike}
 */
olx.View2DOptionsExtern.prototype.projection;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.resolution;


/**
 * @type {Array.<number>|undefined}
 */
olx.View2DOptionsExtern.prototype.resolutions;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.rotation;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.zoom;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.zoomFactor;



/**
 * @interface
 */
olx.animation.BounceOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.BounceOptionsExtern.prototype.resolution;


/**
 * @type {number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.PanOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.easing;


/**
 * @type {ol.Coordinate}
 */
olx.animation.PanOptionsExtern.prototype.source;


/**
 * @type {number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.RotateOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.RotateOptionsExtern.prototype.rotation;


/**
 * @type {number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.ZoomOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.ZoomOptionsExtern.prototype.resolution;


/**
 * @type {number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.control.AttributionOptionsExtern = function() {};


/**
 * @type {ol.Map|undefined}
 */
olx.control.AttributionOptionsExtern.prototype.map;


/**
 * @type {Element|undefined}
 */
olx.control.AttributionOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.DefaultsOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.attribution;


/**
 * @type {ol.control.AttributionOptions|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.attributionOptions;


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.logo;


/**
 * @type {ol.control.LogoOptions|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.logoOptions;


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.zoom;


/**
 * @type {ol.control.ZoomOptions|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.zoomOptions;



/**
 * @interface
 */
olx.control.FullScreenOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.keys;


/**
 * @type {ol.Map|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.map;


/**
 * @type {Element|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.LogoOptionsExtern = function() {};


/**
 * @type {ol.Map|undefined}
 */
olx.control.LogoOptionsExtern.prototype.map;


/**
 * @type {Element|undefined}
 */
olx.control.LogoOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.MousePositionOptionsExtern = function() {};


/**
 * @type {ol.CoordinateFormatType|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.coordinateFormat;


/**
 * @type {ol.Map|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.map;


/**
 * @type {ol.ProjectionLike}
 */
olx.control.MousePositionOptionsExtern.prototype.projection;


/**
 * @type {Element|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.target;


/**
 * @type {string|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.undefinedHTML;



/**
 * @interface
 */
olx.control.ScaleLineOptionsExtern = function() {};


/**
 * @type {ol.Map|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.map;


/**
 * @type {number|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.minWidth;


/**
 * @type {Element|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.target;


/**
 * @type {ol.control.ScaleLineUnits|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.units;



/**
 * @interface
 */
olx.control.ZoomOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.delta;


/**
 * @type {ol.Map|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.map;


/**
 * @type {Element|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.ZoomSliderOptionsExtern = function() {};


/**
 * @type {ol.Map|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.map;


/**
 * @type {number|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.minResolution;



/**
 * @interface
 */
olx.interaction.DefaultsOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.altShiftDragRotate;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.doubleClickZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.dragPan;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.keyboard;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.mouseWheelZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.shiftDragZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchPan;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchRotate;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchZoom;


/**
 * @type {number|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.zoomDelta;



/**
 * @interface
 */
olx.interaction.DoubleClickZoomOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.interaction.DoubleClickZoomOptionsExtern.prototype.delta;



/**
 * @interface
 */
olx.interaction.DragPanOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragPanOptionsExtern.prototype.condition;


/**
 * @type {ol.Kinetic|undefined}
 */
olx.interaction.DragPanOptionsExtern.prototype.kinetic;



/**
 * @interface
 */
olx.interaction.DragRotateAndZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragRotateAndZoomOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.DragRotateOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragRotateOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.DragZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragZoomOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.KeyboardPanOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.KeyboardPanOptionsExtern.prototype.condition;


/**
 * @type {number|undefined}
 */
olx.interaction.KeyboardPanOptionsExtern.prototype.pixelDelta;



/**
 * @interface
 */
olx.interaction.KeyboardZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.KeyboardZoomOptionsExtern.prototype.condition;


/**
 * @type {number|undefined}
 */
olx.interaction.KeyboardZoomOptionsExtern.prototype.delta;



/**
 * @interface
 */
olx.interaction.TouchPanOptionsExtern = function() {};


/**
 * @type {ol.Kinetic|undefined}
 */
olx.interaction.TouchPanOptionsExtern.prototype.kinetic;



/**
 * @interface
 */
olx.interaction.TouchRotateOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.interaction.TouchRotateOptionsExtern.prototype.threshold;



/**
 * @interface
 */
olx.layer.LayerOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.hue;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.saturation;


/**
 * @type {ol.source.Source}
 */
olx.layer.LayerOptionsExtern.prototype.source;


/**
 * @type {boolean|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.TileLayerOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.hue;


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.preload;


/**
 * @type {number|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.saturation;


/**
 * @type {ol.source.Source}
 */
olx.layer.TileLayerOptionsExtern.prototype.source;


/**
 * @type {boolean|undefined}
 */
olx.layer.TileLayerOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.VectorLayerOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.opacity;


/**
 * @type {ol.source.Source}
 */
olx.layer.VectorLayerOptionsExtern.prototype.source;


/**
 * @type {ol.style.Style|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.style;


/**
 * @type {boolean|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.parser.KMLOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.dimension;


/**
 * @type {boolean|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.extractAttributes;


/**
 * @type {boolean|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.extractStyles;


/**
 * @type {number|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.maxDepth;



/**
 * @interface
 */
olx.source.BingMapsOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.source.BingMapsOptionsExtern.prototype.culture;


/**
 * @type {string}
 */
olx.source.BingMapsOptionsExtern.prototype.key;


/**
 * @type {string}
 */
olx.source.BingMapsOptionsExtern.prototype.style;



/**
 * @interface
 */
olx.source.DebugTileSourceOptionsExtern = function() {};


/**
 * @type {ol.Extent|undefined}
 */
olx.source.DebugTileSourceOptionsExtern.prototype.extent;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.DebugTileSourceOptionsExtern.prototype.projection;


/**
 * @type {ol.tilegrid.TileGrid|undefined}
 */
olx.source.DebugTileSourceOptionsExtern.prototype.tileGrid;



/**
 * @interface
 */
olx.source.OSMOptionsExtern = function() {};


/**
 * @type {ol.Attribution|undefined}
 */
olx.source.OSMOptionsExtern.prototype.attribution;


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.OSMOptionsExtern.prototype.attributions;


/**
 * @type {number|undefined}
 */
olx.source.OSMOptionsExtern.prototype.maxZoom;


/**
 * @type {string|undefined}
 */
olx.source.OSMOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.SingleImageWMSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.extent;


/**
 * @type {Object.<string,*>}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.params;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.projection;


/**
 * @type {number|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.ratio;


/**
 * @type {Array.<number>|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.resolutions;


/**
 * @type {string|undefined}
 */
olx.source.SingleImageWMSOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.SourceOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.SourceOptionsExtern.prototype.attributions;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.SourceOptionsExtern.prototype.extent;


/**
 * @type {string|undefined}
 */
olx.source.SourceOptionsExtern.prototype.logo;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.SourceOptionsExtern.prototype.projection;



/**
 * @interface
 */
olx.source.StamenOptionsExtern = function() {};


/**
 * @type {string}
 */
olx.source.StamenOptionsExtern.prototype.layer;


/**
 * @type {number|undefined}
 */
olx.source.StamenOptionsExtern.prototype.maxZoom;


/**
 * @type {number|undefined}
 */
olx.source.StamenOptionsExtern.prototype.minZoom;


/**
 * @type {boolean|undefined}
 */
olx.source.StamenOptionsExtern.prototype.opaque;


/**
 * @type {string|undefined}
 */
olx.source.StamenOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.StaticImageOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.extent;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.imageExtent;


/**
 * @type {ol.Size|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.imageSize;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.StaticImageOptionsExtern.prototype.projection;


/**
 * @type {string|undefined}
 */
olx.source.StaticImageOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.TileJSONOptionsExtern = function() {};


/**
 * @type {null|string|undefined}
 */
olx.source.TileJSONOptionsExtern.prototype.crossOrigin;


/**
 * @type {string}
 */
olx.source.TileJSONOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.TiledWMSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.extent;


/**
 * @type {number|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.maxZoom;


/**
 * @type {Object.<string,*>}
 */
olx.source.TiledWMSOptionsExtern.prototype.params;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.TiledWMSOptionsExtern.prototype.projection;


/**
 * @type {ol.tilegrid.TileGrid|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.tileGrid;


/**
 * @type {string|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.url;


/**
 * @type {Array.<string>|undefined}
 */
olx.source.TiledWMSOptionsExtern.prototype.urls;



/**
 * @interface
 */
olx.source.WMTSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.attributions;


/**
 * @type {string|null|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.crossOrigin;


/**
 * @type {Object|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.dimensions;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.extent;


/**
 * @type {string|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.format;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.layer;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.matrixSet;


/**
 * @type {number|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.maxZoom;


/**
 * @type {ol.ProjectionLike}
 */
olx.source.WMTSOptionsExtern.prototype.projection;


/**
 * @type {ol.source.WMTSRequestEncoding|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.requestEncoding;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.style;


/**
 * @type {ol.tilegrid.WMTS}
 */
olx.source.WMTSOptionsExtern.prototype.tileGrid;


/**
 * @type {string|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.url;


/**
 * @type {Array.<string>|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.urls;



/**
 * @interface
 */
olx.style.IconOptionsExtern = function() {};


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.height;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.opacity;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.rotation;


/**
 * @type {string|ol.Expression}
 */
olx.style.IconOptionsExtern.prototype.url;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.width;



/**
 * @interface
 */
olx.style.LineOptionsExtern = function() {};


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.LineOptionsExtern.prototype.opacity;


/**
 * @type {string|ol.Expression|undefined}
 */
olx.style.LineOptionsExtern.prototype.strokeColor;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.LineOptionsExtern.prototype.strokeWidth;



/**
 * @interface
 */
olx.style.PolygonOptionsExtern = function() {};


/**
 * @type {string|ol.Expression|undefined}
 */
olx.style.PolygonOptionsExtern.prototype.fillColor;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.PolygonOptionsExtern.prototype.opacity;


/**
 * @type {string|ol.Expression|undefined}
 */
olx.style.PolygonOptionsExtern.prototype.strokeColor;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.PolygonOptionsExtern.prototype.strokeWidth;



/**
 * @interface
 */
olx.style.RuleOptionsExtern = function() {};


/**
 * @type {ol.filter.Filter|undefined}
 */
olx.style.RuleOptionsExtern.prototype.filter;


/**
 * @type {Array.<ol.style.Symbolizer>|undefined}
 */
olx.style.RuleOptionsExtern.prototype.symbolizers;



/**
 * @interface
 */
olx.style.ShapeOptionsExtern = function() {};


/**
 * @type {string|ol.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.fillColor;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.opacity;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.size;


/**
 * @type {string|ol.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.strokeColor;


/**
 * @type {number|ol.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.strokeWidth;


/**
 * @type {ol.style.ShapeType|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.type;



/**
 * @interface
 */
olx.style.StyleOptionsExtern = function() {};


/**
 * @type {Array.<ol.style.Rule>}
 */
olx.style.StyleOptionsExtern.prototype.rules;



/**
 * @interface
 */
olx.tilegrid.TileGridOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.minZoom;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.origin;


/**
 * @type {Array.<ol.Coordinate>|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.origins;


/**
 * @type {!Array.<number>}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.resolutions;


/**
 * @type {ol.Size|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.tileSize;


/**
 * @type {Array.<ol.Size>|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.tileSizes;



/**
 * @interface
 */
olx.tilegrid.WMTSOptionsExtern = function() {};


/**
 * @type {!Array.<string>}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.matrixIds;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.origin;


/**
 * @type {Array.<ol.Coordinate>|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.origins;


/**
 * @type {!Array.<number>}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.resolutions;


/**
 * @type {ol.Size|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.tileSize;


/**
 * @type {Array.<ol.Size>|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.tileSizes;



/**
 * @interface
 */
olx.tilegrid.XYZOptionsExtern = function() {};


/**
 * @type {number}
 */
olx.tilegrid.XYZOptionsExtern.prototype.maxZoom;
