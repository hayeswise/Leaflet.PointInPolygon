## Modules

<dl>
<dt><a href="#module_wiseLeafletPip">wiseLeafletPip</a> : <code>function</code></dt>
<dd><p>Hayeswise Point-in-polygon for Leaflet:  A plugin for Leaflet that provides
points-in-polygons functions based on Dan Sunday&#39;s C++ winding number implementation.</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_L">L</a></dt>
<dd><p>Leaflet</p>
</dd>
</dl>

<a name="module_wiseLeafletPip"></a>

## wiseLeafletPip : <code>function</code>
Hayeswise Point-in-polygon for Leaflet:  A plugin for Leaflet that provides
points-in-polygons functions based on Dan Sunday's C++ winding number implementation.

**See**

- [Leaflet.PointInPolygon](https://github.com/hayeswise/Leaflet.PointInPolygon)
- [Inclusion of a Point in a Polygon](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday.


| Param | Type | Description |
| --- | --- | --- |
| Leaflet | <code>function</code> | namespace object. |

<a name="external_L"></a>

## L
Leaflet

**Kind**: global external  
**See**: [Leaflet](http://leafletjs.com/)  

* [L](#external_L)
    * [.LatLng](#external_L.LatLng)
        * [.isLeft](#external_L.LatLng.isLeft) ⇒
    * [.Polyline](#external_L.Polyline)
        * [.getWindingNumber](#external_L.Polyline.getWindingNumber)
    * [.Polygon](#external_L.Polygon)
        * [.contains](#external_L.Polygon.contains)

<a name="external_L.LatLng"></a>

### L.LatLng
Latitutde and longitude class.

**Kind**: static property of <code>[L](#external_L)</code>  
**See**: [Leaflet](http://leafletjs.com/) documentation for further information.  
<a name="external_L.LatLng.isLeft"></a>

#### LatLng.isLeft ⇒
Tests if a point is left|on|right of an infinite line.
<br><br>
This is a JavaScript and Leaflet port of the `isLeft()` C++ function by Dan Sunday.

**Kind**: static property of <code>[LatLng](#external_L.LatLng)</code>  
**Returns**: >0 for p2 left of the line through this point and p1,
         =0 for p2 on the line,
         <0 for p2 right of the line through this point an p1.  
**See**: [Inclusion of a Point in a Polygon](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday.  

| Param | Type | Description |
| --- | --- | --- |
| p1 | <code>LatLng</code> | Point The reference line is defined by `this` LatLng to p1. |
| p2 | <code>LatLng</code> | The point in question. |

<a name="external_L.Polyline"></a>

### L.Polyline
The Leaflet Polyline class.

**Kind**: static property of <code>[L](#external_L)</code>  
**See**: [Leaflet](http://leafletjs.com/) documentation for further information.  
<a name="external_L.Polyline.getWindingNumber"></a>

#### Polyline.getWindingNumber
Test for a point in a polygon or on the bounding lines of the polygon.  The
coordinates (L.LatLngs) for a GeodesicPolygon are set to follow the earth's
curvature when the GeodesicPolygon object is created.  Since L.Polygon
extends L.Polyline we can use the same method for both.  Although, for
L.Polyline, we only get points on the line even if a collection of lines
appear to make a polygon.
<br><br>
This is a JavaScript and Leaflet port of the `wn_PnPoly()` C++ function by Dan Sunday.
Unlike the C++ version, this implementation does include points on the line and vertices.

**Kind**: static property of <code>[Polyline](#external_L.Polyline)</code>  
**Retuns**: <code>Number</code> The winding number (=0 only when the point is outside)  
**See**

- [Inclusion of a Point in a Polygon](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday.
- [Leaflet.Geodesc](https://github.com/Fragger/Leaflet.Geodesic) for information about Leaflet.Geodesc by Fragger.


| Param | Type | Description |
| --- | --- | --- |
| p | <code>L.LatLng</code> | A point. |

<a name="external_L.Polygon"></a>

### L.Polygon
The Leaflet Polygon class.
L.GeodesicPolygon and L.GeodesicCircle extend L.Polygon.

**Kind**: static property of <code>[L](#external_L)</code>  
**See**: [Leaflet](http://leafletjs.com/) documentation for further information.  
<a name="external_L.Polygon.contains"></a>

#### Polygon.contains
Checks if a single point is contained in a polygon.
<p>Note that L.GeodesicPolygons and L.GeodesicCircles are types of L.Polygon

**Kind**: static property of <code>[Polygon](#external_L.Polygon)</code>  
**See**: [Leaflet.Geodesc](https://github.com/Fragger/Leaflet.Geodesic) for information about Leaflet.Geodesc by Fragger.  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>L.LatLng</code> | A geographical point with a latitude and longitude. |

