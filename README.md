# Leaflet.PointInPolygon
<img align="left" src="https://github.com/hayeswise/Leaflet.PointInPolygon/blob/master/PiPwn-logo.png?raw=true">
The Leaflet.PointInPolygon plugin/extension for [Leaflet](http://leafletjs.com/) 
provides point-in-polygon functions 
based on Dan Sunday's C++ winding number implementation. Functions `contains()`, `getWindingNumber()`, and `isLeft()` extend
Leaflet classes `L.Polygon`, `L.Polyline`, and `L.LatLng`.
<a href="http://leafletjs.com/"><img align="right" src="https://s3.amazonaws.com/uploads.uservoice.com/logo/design_setting/94572/original/leaflet-logo.png?1329832491"></a>
The winding number method has an advantage to the crossing number method since 
"the winding number accurately determines if a point is inside a nonsimple closed polygon" (
See [Inclusion of a Point in Polygon](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday).

Unlike the C++ implementation,
points on the lines and vertices are considered as being included in the polygon.  As such, the `getWindingNumber()` function will
work for a polyline. The inclusiveness of points on the the polygon lines (and polylines) has a natural interpretation for 
locations on maps.  A future version of Leaflet.PointInPolygon will support the ability to be inclusive or exclusive.

# Requirements
* Leaflet:  This has been tested on a variant of Leaflet version 0.7.7, version Leaflet 1.0.3 (from GitHub), and [Leaflet.Geodesic](https://github.com/Fragger/Leaflet.Geodesic) dated April 26, 2013.

# Demos
Demo on JSFiddle: [Leaflet.PointInPolygon Demo](https://jsfiddle.net/hayeswise/bh2wuve8/embedded/result,html,js,css).  And if you want to fork a copy of the fiddle, [click here](https://jsfiddle.net/hayeswise/bh2wuve8/). Click on the map or the markers and a pop-up will show indicating if the point you clicked on, or the marker, is in the polygon.

[![Leaflet.PointInPolygon Demo screen shot] (https://raw.githubusercontent.com/hayeswise/Leaflet.PointInPolygon/master/DemoScreenShot.PNG)](https://jsfiddle.net/hayeswise/bh2wuve8/embedded/result,html,js,css) (Clickable image)

Leaflet.PointInPolygon is plugin was Originally developed for the [Ingress Intel Total Conversion](https://iitc.me/)(IITC). 
If you have a [Ingress](https://ingress.com/) account, install the Ingress Intel Total Conversion desktop and 
the install the [Portals-in-Polygons](https://github.com/hayeswise/iitc-portalsinpolygons) plugin.

![Portals-in-polygons UI screen shot](https://github.com/hayeswise/iitc-portalsinpolygons/blob/master/docs/portals-in-polygons-ui.png?raw=true)

# Instructions for Including the Plugin

# Simple Example

# API
See [API](https://github.com/hayeswise/Leaflet.PointInPolygon/blob/master/wise-leaflet-pip.md).

# CDN
CDN services provided by [RawGit](http://rawgit.com/).  This is useful for referencing the code distribution in [JSFiddle](https://jsfiddle.net).  Just note that the CDN updates lag behind the GitHub updates.
* Via RawGit [Development](https://rawgit.com/hayeswise/Leaflet.PointInPolygon/master/wise-leaflet-pip.js).
* Via RawGit [Production](https://cdn.rawgit.com/hayeswise/Leaflet.PointInPolygon/master/wise-leaflet-pip.js).

# Acknowledgements
Thanks to:
* [Inclusion of a Point in Polygon](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday
* [JSHint](http://jshint.com/)
* CondorTheGreat for the first demo at JSFiddle (https://jsfiddle.net/CondorTheGreat/hhqqmbqc/)
