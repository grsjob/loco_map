export interface ILoco {
  locotype: string;
  loconumber: string;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}
