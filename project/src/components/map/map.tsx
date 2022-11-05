import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location } from '../../types/offers-type';
import useMap from '../../hooks/useMap';

type MapProp = {
  city: Location;
  points: {
    locations: Location;
    id: number;
  }[];
  selectedPlaceId: number | null;
}

const Map = ({ city, points, selectedPlaceId }: MapProp): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const pin = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [20, 30],
    iconAnchor: [10, 15],
  });

  const pinActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [20, 30],
    iconAnchor: [10, 15]
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => leaflet.marker({
        lat: point.locations.latitude,
        lng: point.locations.longitude,
      }, {
        icon: selectedPlaceId === point.id ? pinActive : pin,
      }).addTo(map));
    }
  }, [map, points, selectedPlaceId, pin, pinActive]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
};

export default Map;
