import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {City, Offers} from '../../types/offers';
import {useAppSelector } from '../../hooks/index';

type MapProps = {
  city: City;
  offers: Offers;
  idOffer?: number | null;
  className: string;
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

function Map ({city, offers, idOffer, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedOffer = useAppSelector((state) => state.HOTELS.selectedOffer);
  const offerMap = idOffer? idOffer: selectedOffer;
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(offerMap !== null && offer.id === offerMap ? currentIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [map, offers, offerMap]);

  return (
    <section className={className}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
