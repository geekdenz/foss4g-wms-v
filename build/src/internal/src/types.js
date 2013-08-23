goog.provide('ol.DeviceOrientationOptions');
goog.provide('ol.GeolocationOptions');
goog.provide('ol.GetFeatureInfoOptions');
goog.provide('ol.GetFeaturesOptions');
goog.provide('ol.MapOptions');
goog.provide('ol.OverlayOptions');
goog.provide('ol.Proj4jsProjectionOptions');
goog.provide('ol.ProjectionOptions');
goog.provide('ol.View2DOptions');
goog.provide('ol.animation.BounceOptions');
goog.provide('ol.animation.PanOptions');
goog.provide('ol.animation.RotateOptions');
goog.provide('ol.animation.ZoomOptions');
goog.provide('ol.control.AttributionOptions');
goog.provide('ol.control.ControlOptions');
goog.provide('ol.control.DefaultsOptions');
goog.provide('ol.control.FullScreenOptions');
goog.provide('ol.control.LogoOptions');
goog.provide('ol.control.MousePositionOptions');
goog.provide('ol.control.ScaleLineOptions');
goog.provide('ol.control.ZoomOptions');
goog.provide('ol.control.ZoomSliderOptions');
goog.provide('ol.control.ZoomToExtentOptions');
goog.provide('ol.interaction.DefaultsOptions');
goog.provide('ol.interaction.DoubleClickZoomOptions');
goog.provide('ol.interaction.DragPanOptions');
goog.provide('ol.interaction.DragRotateAndZoomOptions');
goog.provide('ol.interaction.DragRotateOptions');
goog.provide('ol.interaction.DragZoomOptions');
goog.provide('ol.interaction.KeyboardPanOptions');
goog.provide('ol.interaction.KeyboardZoomOptions');
goog.provide('ol.interaction.TouchPanOptions');
goog.provide('ol.interaction.TouchRotateOptions');
goog.provide('ol.layer.LayerOptions');
goog.provide('ol.layer.TileLayerOptions');
goog.provide('ol.layer.VectorLayerOptions');
goog.provide('ol.parser.GMLOptions');
goog.provide('ol.parser.GMLReadOptions');
goog.provide('ol.parser.GMLWriteOptions');
goog.provide('ol.parser.GPXOptions');
goog.provide('ol.parser.GPXWriteOptions');
goog.provide('ol.parser.KMLOptions');
goog.provide('ol.source.BingMapsOptions');
goog.provide('ol.source.DebugTileSourceOptions');
goog.provide('ol.source.OSMOptions');
goog.provide('ol.source.SingleImageWMSOptions');
goog.provide('ol.source.SourceOptions');
goog.provide('ol.source.StamenOptions');
goog.provide('ol.source.StaticImageOptions');
goog.provide('ol.source.TileJSONOptions');
goog.provide('ol.source.TiledWMSOptions');
goog.provide('ol.source.VectorOptions');
goog.provide('ol.source.VectorSource2Options');
goog.provide('ol.source.WMTSOptions');
goog.provide('ol.style.IconOptions');
goog.provide('ol.style.LineOptions');
goog.provide('ol.style.PolygonOptions');
goog.provide('ol.style.RuleOptions');
goog.provide('ol.style.ShapeOptions');
goog.provide('ol.style.StyleOptions');
goog.provide('ol.style.TextOptions');
goog.provide('ol.tilegrid.TileGridOptions');
goog.provide('ol.tilegrid.WMTSOptions');
goog.provide('ol.tilegrid.XYZOptions');


/**
 * @typedef {{tracking: (boolean|undefined)}}
 */
ol.DeviceOrientationOptions;


/**
 * @typedef {{projection: ol.ProjectionLike,
 *            tracking: (boolean|undefined),
 *            trackingOptions: (GeolocationPositionOptions|undefined)}}
 */
ol.GeolocationOptions;


/**
 * @typedef {{error: (function(Object)|undefined),
 *            layers: (Array.<ol.layer.Layer>|undefined),
 *            pixel: ol.Pixel,
 *            success: (function(Array.<Array.<string|undefined>>))}}
 */
ol.GetFeatureInfoOptions;


/**
 * @typedef {{error: (function(Object)|undefined),
 *            layers: (Array.<ol.layer.Layer>|undefined),
 *            pixel: ol.Pixel,
 *            success: (function(Array.<Array.<ol.Feature|undefined>>))}}
 */
ol.GetFeaturesOptions;


/**
 * @typedef {{controls: (ol.Collection|Array.<ol.control.Control>|undefined),
 *            interactions: (ol.Collection|undefined),
 *            layers: (Array.<ol.layer.Layer>|ol.Collection|undefined),
 *            renderer: (ol.RendererHint|undefined),
 *            renderers: (Array.<ol.RendererHint>|undefined),
 *            target: (Element|string|undefined),
 *            view: (ol.IView|undefined)}}
 */
ol.MapOptions;


/**
 * @typedef {{element: (Element|undefined),
 *            map: (ol.Map|undefined),
 *            position: (ol.Coordinate|undefined),
 *            positioning: (ol.OverlayPositioning|undefined)}}
 */
ol.OverlayOptions;


/**
 * @typedef {{code: string,
 *            extent: (ol.Extent|undefined),
 *            global: (boolean|undefined)}}
 */
ol.Proj4jsProjectionOptions;


/**
 * @typedef {{axisOrientation: (string|undefined),
 *            code: string,
 *            extent: (ol.Extent|undefined),
 *            global: (boolean|undefined),
 *            units: ol.ProjectionUnits}}
 */
ol.ProjectionOptions;


/**
 * @typedef {{center: (ol.Coordinate|undefined),
 *            maxResolution: (number|undefined),
 *            maxZoom: (number|undefined),
 *            projection: ol.ProjectionLike,
 *            resolution: (number|undefined),
 *            resolutions: (Array.<number>|undefined),
 *            rotation: (number|undefined),
 *            zoom: (number|undefined),
 *            zoomFactor: (number|undefined)}}
 */
ol.View2DOptions;


/**
 * @typedef {{duration: (number|undefined),
 *            easing: (function(number):number|undefined),
 *            resolution: number,
 *            start: (number|undefined)}}
 */
ol.animation.BounceOptions;


/**
 * @typedef {{duration: (number|undefined),
 *            easing: (function(number):number|undefined),
 *            source: ol.Coordinate,
 *            start: (number|undefined)}}
 */
ol.animation.PanOptions;


/**
 * @typedef {{duration: (number|undefined),
 *            easing: (function(number):number|undefined),
 *            rotation: number,
 *            start: (number|undefined)}}
 */
ol.animation.RotateOptions;


/**
 * @typedef {{duration: (number|undefined),
 *            easing: (function(number):number|undefined),
 *            resolution: number,
 *            start: (number|undefined)}}
 */
ol.animation.ZoomOptions;


/**
 * @typedef {{className: (string|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.AttributionOptions;


/**
 * @typedef {{element: (Element|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.ControlOptions;


/**
 * @typedef {{attribution: (boolean|undefined),
 *            attributionOptions: (ol.control.AttributionOptions|undefined),
 *            logo: (boolean|undefined),
 *            logoOptions: (ol.control.LogoOptions|undefined),
 *            zoom: (boolean|undefined),
 *            zoomOptions: (ol.control.ZoomOptions|undefined)}}
 */
ol.control.DefaultsOptions;


/**
 * @typedef {{className: (string|undefined),
 *            keys: (boolean|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.FullScreenOptions;


/**
 * @typedef {{className: (string|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.LogoOptions;


/**
 * @typedef {{className: (string|undefined),
 *            coordinateFormat: (ol.CoordinateFormatType|undefined),
 *            map: (ol.Map|undefined),
 *            projection: ol.ProjectionLike,
 *            target: (Element|undefined),
 *            undefinedHTML: (string|undefined)}}
 */
ol.control.MousePositionOptions;


/**
 * @typedef {{className: (string|undefined),
 *            map: (ol.Map|undefined),
 *            minWidth: (number|undefined),
 *            target: (Element|undefined),
 *            units: (ol.control.ScaleLineUnits|undefined)}}
 */
ol.control.ScaleLineOptions;


/**
 * @typedef {{className: (string|undefined),
 *            delta: (number|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.ZoomOptions;


/**
 * @typedef {{className: (string|undefined),
 *            map: (ol.Map|undefined),
 *            maxResolution: (number|undefined),
 *            minResolution: (number|undefined)}}
 */
ol.control.ZoomSliderOptions;


/**
 * @typedef {{className: (string|undefined),
 *            extent: (ol.Extent|undefined),
 *            map: (ol.Map|undefined),
 *            target: (Element|undefined)}}
 */
ol.control.ZoomToExtentOptions;


/**
 * @typedef {{altShiftDragRotate: (boolean|undefined),
 *            doubleClickZoom: (boolean|undefined),
 *            dragPan: (boolean|undefined),
 *            keyboard: (boolean|undefined),
 *            mouseWheelZoom: (boolean|undefined),
 *            shiftDragZoom: (boolean|undefined),
 *            touchPan: (boolean|undefined),
 *            touchRotate: (boolean|undefined),
 *            touchZoom: (boolean|undefined),
 *            zoomDelta: (number|undefined)}}
 */
ol.interaction.DefaultsOptions;


/**
 * @typedef {{delta: (number|undefined)}}
 */
ol.interaction.DoubleClickZoomOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined),
 *            kinetic: (ol.Kinetic|undefined)}}
 */
ol.interaction.DragPanOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined)}}
 */
ol.interaction.DragRotateAndZoomOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined)}}
 */
ol.interaction.DragRotateOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined)}}
 */
ol.interaction.DragZoomOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined),
 *            pixelDelta: (number|undefined)}}
 */
ol.interaction.KeyboardPanOptions;


/**
 * @typedef {{condition: (ol.interaction.ConditionType|undefined),
 *            delta: (number|undefined)}}
 */
ol.interaction.KeyboardZoomOptions;


/**
 * @typedef {{kinetic: (ol.Kinetic|undefined)}}
 */
ol.interaction.TouchPanOptions;


/**
 * @typedef {{threshold: (number|undefined)}}
 */
ol.interaction.TouchRotateOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *            contrast: (number|undefined),
 *            hue: (number|undefined),
 *            opacity: (number|undefined),
 *            saturation: (number|undefined),
 *            source: ol.source.Source,
 *            visible: (boolean|undefined)}}
 */
ol.layer.LayerOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *            contrast: (number|undefined),
 *            hue: (number|undefined),
 *            opacity: (number|undefined),
 *            preload: (number|undefined),
 *            saturation: (number|undefined),
 *            source: ol.source.Source,
 *            visible: (boolean|undefined)}}
 */
ol.layer.TileLayerOptions;


/**
 * @typedef {{opacity: (number|undefined),
 *            source: ol.source.Source,
 *            style: (ol.style.Style|undefined),
 *            transformFeatureInfo: (function(Array.<ol.Feature>):string|undefined),
 *            visible: (boolean|undefined)}}
 */
ol.layer.VectorLayerOptions;


/**
 * @typedef {{curve: (boolean|undefined),
 *            extractAttributes: (boolean|undefined),
 *            featureNS: (string|undefined),
 *            featureType: (Array.<string>|string|undefined),
 *            geometryName: (string|undefined),
 *            multiCurve: (boolean|undefined),
 *            multiSurface: (boolean|undefined),
 *            readOptions: (ol.parser.GMLReadOptions|undefined),
 *            schemaLocation: (string|undefined),
 *            surface: (boolean|undefined),
 *            writeOptions: (ol.parser.GMLWriteOptions|undefined)}}
 */
ol.parser.GMLOptions;


/**
 * @typedef {{axisOrientation: (string|undefined)}}
 */
ol.parser.GMLReadOptions;


/**
 * @typedef {{axisOrientation: (string|undefined),
 *            srsName: ol.ProjectionLike}}
 */
ol.parser.GMLWriteOptions;


/**
 * @typedef {{creator: (string|undefined),
 *            defaultDesc: (string|undefined),
 *            extractAttributes: (boolean|undefined),
 *            extractRoutes: (boolean|undefined),
 *            extractTracks: (boolean|undefined),
 *            extractWaypoints: (boolean|undefined)}}
 */
ol.parser.GPXOptions;


/**
 * @typedef {{features: (Array.<ol.Feature>|ol.Feature),
 *            metadata: (Object|undefined)}}
 */
ol.parser.GPXWriteOptions;


/**
 * @typedef {{dimension: (number|undefined),
 *            extractAttributes: (boolean|undefined),
 *            extractStyles: (boolean|undefined),
 *            maxDepth: (number|undefined),
 *            trackAttributes: (Array.<string>|undefined)}}
 */
ol.parser.KMLOptions;


/**
 * @typedef {{culture: (string|undefined),
 *            key: string,
 *            style: string}}
 */
ol.source.BingMapsOptions;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *            projection: ol.ProjectionLike,
 *            tileGrid: (ol.tilegrid.TileGrid|undefined)}}
 */
ol.source.DebugTileSourceOptions;


/**
 * @typedef {{attribution: (ol.Attribution|undefined),
 *            attributions: (Array.<ol.Attribution>|undefined),
 *            maxZoom: (number|undefined),
 *            url: (string|undefined)}}
 */
ol.source.OSMOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            crossOrigin: (null|string|undefined),
 *            extent: (ol.Extent|undefined),
 *            params: Object.<string,*>,
 *            projection: ol.ProjectionLike,
 *            ratio: (number|undefined),
 *            resolutions: (Array.<number>|undefined),
 *            url: (string|undefined)}}
 */
ol.source.SingleImageWMSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            extent: (ol.Extent|undefined),
 *            logo: (string|undefined),
 *            projection: ol.ProjectionLike}}
 */
ol.source.SourceOptions;


/**
 * @typedef {{layer: string,
 *            maxZoom: (number|undefined),
 *            minZoom: (number|undefined),
 *            opaque: (boolean|undefined),
 *            url: (string|undefined)}}
 */
ol.source.StamenOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            crossOrigin: (null|string|undefined),
 *            extent: (ol.Extent|undefined),
 *            imageExtent: (ol.Extent|undefined),
 *            imageSize: (ol.Size|undefined),
 *            projection: ol.ProjectionLike,
 *            url: (string|undefined)}}
 */
ol.source.StaticImageOptions;


/**
 * @typedef {{crossOrigin: (null|string|undefined),
 *            url: string}}
 */
ol.source.TileJSONOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            crossOrigin: (null|string|undefined),
 *            extent: (ol.Extent|undefined),
 *            maxZoom: (number|undefined),
 *            params: Object.<string,*>,
 *            projection: ol.ProjectionLike,
 *            tileGrid: (ol.tilegrid.TileGrid|undefined),
 *            url: (string|undefined),
 *            urls: (Array.<string>|undefined)}}
 */
ol.source.TiledWMSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            data: (Object|string|undefined),
 *            extent: (ol.Extent|undefined),
 *            logo: (string|undefined),
 *            parser: ol.parser.Parser,
 *            projection: (ol.ProjectionLike|undefined),
 *            url: (string|undefined)}}
 */
ol.source.VectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            extent: (ol.Extent|undefined),
 *            pointCollections: (Array.<ol.geom2.PointCollection>|undefined),
 *            projection: ol.ProjectionLike}}
 */
ol.source.VectorSource2Options;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            crossOrigin: (string|null|undefined),
 *            dimensions: (Object|undefined),
 *            extent: (ol.Extent|undefined),
 *            format: (string|undefined),
 *            layer: string,
 *            matrixSet: string,
 *            maxZoom: (number|undefined),
 *            projection: ol.ProjectionLike,
 *            requestEncoding: (ol.source.WMTSRequestEncoding|undefined),
 *            style: string,
 *            tileGrid: ol.tilegrid.WMTS,
 *            url: (string|undefined),
 *            urls: (Array.<string>|undefined)}}
 */
ol.source.WMTSOptions;


/**
 * @typedef {{height: (number|ol.expr.Expression|undefined),
 *            opacity: (number|ol.expr.Expression|undefined),
 *            rotation: (number|ol.expr.Expression|undefined),
 *            url: (string|ol.expr.Expression),
 *            width: (number|ol.expr.Expression|undefined)}}
 */
ol.style.IconOptions;


/**
 * @typedef {{strokeColor: (string|ol.expr.Expression|undefined),
 *            strokeOpacity: (number|ol.expr.Expression|undefined),
 *            strokeWidth: (number|ol.expr.Expression|undefined)}}
 */
ol.style.LineOptions;


/**
 * @typedef {{fillColor: (string|ol.expr.Expression|undefined),
 *            opacity: (number|ol.expr.Expression|undefined),
 *            strokeColor: (string|ol.expr.Expression|undefined),
 *            strokeWidth: (number|ol.expr.Expression|undefined)}}
 */
ol.style.PolygonOptions;


/**
 * @typedef {{filter: (ol.expr.Expression|string|undefined),
 *            symbolizers: (Array.<ol.style.Symbolizer>|undefined)}}
 */
ol.style.RuleOptions;


/**
 * @typedef {{fillColor: (string|ol.expr.Expression|undefined),
 *            fillOpacity: (number|ol.expr.Expression|undefined),
 *            size: (number|ol.expr.Expression|undefined),
 *            strokeColor: (string|ol.expr.Expression|undefined),
 *            strokeOpacity: (number|ol.expr.Expression|undefined),
 *            strokeWidth: (number|ol.expr.Expression|undefined),
 *            type: (ol.style.ShapeType|undefined)}}
 */
ol.style.ShapeOptions;


/**
 * @typedef {{rules: Array.<ol.style.Rule>}}
 */
ol.style.StyleOptions;


/**
 * @typedef {{color: (string|ol.expr.Expression|undefined),
 *            fontFamily: (string|ol.expr.Expression|undefined),
 *            fontSize: (number|ol.expr.Expression|undefined),
 *            opacity: (number|ol.expr.Expression|undefined),
 *            text: (string|ol.expr.Expression)}}
 */
ol.style.TextOptions;


/**
 * @typedef {{minZoom: (number|undefined),
 *            origin: (ol.Coordinate|undefined),
 *            origins: (Array.<ol.Coordinate>|undefined),
 *            resolutions: !Array.<number>,
 *            tileSize: (ol.Size|undefined),
 *            tileSizes: (Array.<ol.Size>|undefined)}}
 */
ol.tilegrid.TileGridOptions;


/**
 * @typedef {{matrixIds: !Array.<string>,
 *            origin: (ol.Coordinate|undefined),
 *            origins: (Array.<ol.Coordinate>|undefined),
 *            resolutions: !Array.<number>,
 *            tileSize: (ol.Size|undefined),
 *            tileSizes: (Array.<ol.Size>|undefined)}}
 */
ol.tilegrid.WMTSOptions;


/**
 * @typedef {{maxZoom: number}}
 */
ol.tilegrid.XYZOptions;
