import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {City, Offers} from '../../types/offers';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: number | null;
};

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [28, 39],
  iconAnchor: [14, 39],
});

const currentIcon = new Icon({
  iconUrl:'img/pin-active.svg',
  iconSize: [28, 39],
  iconAnchor: [14, 39],
});

function Map ({city, offers, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker.setIcon(selectedOffer !== null && offer.id === selectedOffer ? currentIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className='cities__map map'
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
