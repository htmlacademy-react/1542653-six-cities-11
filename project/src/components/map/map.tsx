import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location } from '../../types/offers-type';
import useMap from '../../hooks/useMap';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/store';
import { getActivePlaceCoordinates } from '../../store/offers-process/selectors';

type MapProp = {
  city: Location;
  points: {
    locations: Location;
    id: number;
  }[];
  selectedPlaceId: number;
  isMainPage: boolean;
}

const Map = ({ city, points, selectedPlaceId, isMainPage }: MapProp): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const activeCardCoordinates = useAppSelector(getActivePlaceCoordinates);

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

  const markerList = points.map((point) => leaflet.marker({
    lat: point.locations.latitude,
    lng: point.locations.longitude,
  }, {
    icon: selectedPlaceId === point.id ? pinActive : pin,
  }));

  const addMarkersToCard = (markers: leaflet.Marker[], mapLayer: leaflet.Map) => markers.forEach((marker) => marker.addTo(mapLayer));

  const cleanMarkers = (markers: leaflet.Marker[]) => markers.forEach((marker) => marker.remove());

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && map) {
      const centerCoordinates = activeCardCoordinates && map.getZoom() > city.zoom && isMainPage ? activeCardCoordinates : {
        lat: city.latitude,
        lng: city.longitude
      };

      const currentZoom = map.getZoom() !== city.zoom
        ? map.getZoom()
        : city.zoom;

      addMarkersToCard(markerList, map);
      map.setView(centerCoordinates, currentZoom);
    }
    return () => {
      cleanMarkers(markerList);
      isComponentMounted = false;
    };
  }, [map, markerList, city, activeCardCoordinates, isMainPage]);

  return (
    <section className={cn(
      'map',
      { 'cities__map': isMainPage },
      { 'property__map': !isMainPage }
    )}
    ref={mapRef}
    >
    </section>
  );
};

export default Map;
