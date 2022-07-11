import React from "react";
import "../../assets/scss/App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

const App = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZ3Jzam9iIiwiYSI6ImNsNWdwMWw2bTAxbm4zZnMzajF5bm5jbHcifQ.OKPDF4FgbQe0hS1UsExvaw";
  return (
    <>
      <h1>start</h1>
      <Map
        initialViewState={{
          latitude: 53.6774,
          longitude: 84.99089,
          zoom: 17,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={84.989619} latitude={53.676876} color="red" />
      </Map>
    </>
  );
};

export default App;
