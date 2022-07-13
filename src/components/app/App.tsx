import React from "react";
import "../../assets/scss/App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import CustomMarker from "../marker/Marker";
import { DataService } from "../../service/data-service";

const App = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZ3Jzam9iIiwiYSI6ImNsNWdwMWw2bTAxbm4zZnMzajF5bm5jbHcifQ.OKPDF4FgbQe0hS1UsExvaw";
  const locoArray = DataService.getData();
  return (
    <>
      <h1>start</h1>
      <Map
        initialViewState={{
          latitude: 53.6764,
          longitude: 84.99089,
          zoom: 17,
        }}
        doubleClickZoom={false}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {locoArray.map((loco) => (
          <CustomMarker loco={loco} key={loco.loconumber} />
        ))}
      </Map>
    </>
  );
};

export default App;
