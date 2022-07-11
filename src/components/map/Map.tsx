import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(84.989619);
  const [lat, setLat] = useState(53.676876);
  const [zoom, setZoom] = useState(16);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ3Jzam9iIiwiYSI6ImNsNWdwMWw2bTAxbm4zZnMzajF5bm5jbHcifQ.OKPDF4FgbQe0hS1UsExvaw";
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
