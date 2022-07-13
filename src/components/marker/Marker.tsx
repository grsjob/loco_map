import React, { useState } from "react";
import { Marker } from "react-map-gl";
import locoIcon from "../../assets/img/loco.png";
import { Icon, Popup } from "./customMarkerStyles";
import { ILoco } from "../../types/locoTypes";

interface CustomMarkerProps {
  loco: ILoco;
}

const CustomMarker = ({ loco }: CustomMarkerProps) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Marker
      longitude={Number(loco.coordinates.longitude)}
      latitude={Number(loco.coordinates.latitude)}
      onClick={() => {
        setShowPopup(!showPopup);
      }}
      style={{ cursor: "pointer" }}
    >
      <Icon src={locoIcon} alt="locomotive icon" width={40} height={40} />
      {showPopup && <Popup>{`${loco.locotype} №${loco.loconumber}`}</Popup>}
    </Marker>
  );
};

export default CustomMarker;
