/******************************************************************************
 * Leaflet.PointInPolygon
 * @author Brian S Hayes (Hayeswise)
 * @license MIT License, Copyright (c) 2017 Brian Hayes ("Hayeswise")
 *
 * Thanks to:<br>
 * Dan Sunday's Winding Number and isLeft C++ implementation - http://geomalgorithms.com/.
 *   Copyright and License: http://geomalgorithms.com/a03-_inclusion.html
 * Leaflet.Geodesic by Kevin Brasier (a.k.a. Fragger)<br>
 */

/**
 * Leaflet
 * @external L
 * @see {@link http://leafletjs.com/|Leaflet}
 */
/**
 * Latitutde and longitude class.
 * @name LatLng
 * @member external:L.LatLng
 * @see {@link http://leafletjs.com/ Leaflet} documentation for further information.
 */
/**
 * The Leaflet Polyline class.
 * @name Polyline
 * @member external:L.Polyline
 * @see {@link http://leafletjs.com/ Leaflet} documentation for further information.
 */
/**
 * The Leaflet Polygon class.
 * L.GeodesicPolygon and L.GeodesicCircle extend L.Polygon.
 * @name Polygon
 * @member external:L.Polygon
 * @see {@link http://leafletjs.com/ Leaflet} documentation for further information.
 */

/**
 * Hayeswise Point-in-polygon for Leaflet:  A plugin for Leaflet that provides
 * points-in-polygons functions based on Dan Sunday's C++ winding number implementation.
 * @module {function} wiseLeafletPip
 * @param {function} Leaflet namespace object.
 * @see {@link https://github.com/hayeswise/Leaflet.PointInPolygon|Leaflet.PointInPolygon}
 * @see {@link http://geomalgorithms.com/a03-_inclusion.html Inclusion of a Point in a Polygon} by Dan Sunday.
 */
(function(L) {
    /**
     * Checks if a single point is contained in a polygon.
     * <p>Note that L.GeodesicPolygons and L.GeodesicCircles are types of L.Polygon
     * @member external:L.Polygon.contains
     * @param {L.LatLng} p A geographical point with a latitude and longitude.
     * @see {@link https://github.com/Fragger/Leaflet.Geodesic Leaflet.Geodesc} for information about Leaflet.Geodesc by Fragger.
     */
    L.Polygon.prototype.contains = function (p) {
        //"use strict";
        var rectangularBounds = this.getBounds();  // It appears that this is O(1): the LatLngBounds is updated as points are added to the polygon when it is created.
        var wn;
        if (rectangularBounds.contains(p)) {
            wn = this.getWindingNumber(p);
            return (wn !== 0);
        } else {
            return false;
        }
    };

    /**
     * Tests if a point is left|on|right of an infinite line.
     * <br><br>
     * This is a JavaScript and Leaflet port of the `isLeft()` C++ function by Dan Sunday.
     * @member external:L.LatLng.isLeft
     * @param {LatLng} p1 Point The reference line is defined by `this` LatLng to p1.
     * @param {LatLng} p2 The point in question.
     * @return >0 for p2 left of the line through this point and p1,
     *          =0 for p2 on the line,
     *          <0 for p2 right of the line through this point an p1.
     * @see {@link http://geomalgorithms.com/a03-_inclusion.html Inclusion of a Point in a Polygon} by Dan Sunday.
     */
    L.LatLng.prototype.isLeft = function (p1, p2) {
        //"use strict";
        return ((p1.lng - this.lng) * (p2.lat - this.lat) -
                (p2.lng - this.lng) * (p1.lat - this.lat));
    };

    /**
     * Test for a point in a polygon or on the bounding lines of the polygon.  The
     * coordinates (L.LatLngs) for a GeodesicPolygon are set to follow the earth's
     * curvature when the GeodesicPolygon object is created.  Since L.Polygon
     * extends L.Polyline we can use the same method for both.  Although, for
     * L.Polyline, we only get points on the line even if a collection of lines
     * appear to make a polygon.
     * <br><br>
     * This is a JavaScript and Leaflet port of the `wn_PnPoly()` C++ function by Dan Sunday.
     * Unlike the C++ version, this implementation does include points on the line and vertices.
     *
     * @member external:L.Polyline.getWindingNumber
     * @param p {L.LatLng} A point.
     * @retuns {Number} The winding number (=0 only when the point is outside)
     *
     * @see {@link http://geomalgorithms.com/a03-_inclusion.html Inclusion of a Point in a Polygon} by Dan Sunday.
     * @see {@link https://github.com/Fragger/Leaflet.Geodesic Leaflet.Geodesc} for information about Leaflet.Geodesc by Fragger.
     */
    L.Polyline.prototype.getWindingNumber = function (p) { // Note that L.Polygon extends L.Polyline
        //"use strict";
        var i,
            isLeftTest,
            n,
            vertices,
            wn; // the winding number counter
        vertices = this.getLatLngs().filter(function (v, i, array) {
            if (i > 0 && v.lat === array[i-1].lat && v.lng === array[i-1].lng) { // Intenionally not using L.LatLng.equals since equals() allows for small margin of error.
                return false;
            } else {
                return true;
            }
        });
        n = vertices.length;
        // Note that per the algorithm, the vertices (V) must be "a vertex points of a polygon V[n+1] with V[n]=V[0]"
        if (n > 0 && !vertices[n-1].equals(vertices[0])) {
            vertices.push(vertices[0]);
        }
        n = vertices.length - 1;
        wn = 0;
        for (i=0; i < n; i++) {
            isLeftTest = vertices[i].isLeft(vertices[i+1], p);
            if (isLeftTest === 0) { // If the point is on a line, we are done.
                wn = 1;
                break;
            } else {
                if (isLeftTest !== 0) { // If not a vertex or on line (the C++ version does not check for this)
                    if (vertices[i].lat <= p.lat) {
                        if (vertices[i+1].lat > p.lat) { // An upward crossing
                            if (isLeftTest > 0) { // P left of edge
                                wn++; // have a valid up intersect
                            }
                        }
                    } else {
                        if (vertices[i+1].lat <= p.lat) {// A downward crossing
                            if (isLeftTest < 0) { // P right of edge
                                wn--; // have a valid down intersect
                            }
                        }
                    }
                } else {
                    wn++;
                }
            }
        }
        return wn;
    };

})(L); //L is set to Leaflet's L