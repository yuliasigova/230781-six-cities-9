import Header from '../header/header';
import { useParams } from 'react-router-dom';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {fetchHotelAction, fetchRewiewsAction, fetchNearbyHotelAction} from '../../store/api-actions';
import {useEffect} from 'react';
import OfferList from '../offers-list/offers-list';
import Map from '../map/map';
import PropertyCard from '../property-card/property-card';

function PropertyScreen ():JSX.Element {
  const offerId = useParams();
  const id = Number(offerId.id);
  const offer = useAppSelector((state) => state.OFFER.offer);
  const offers = useAppSelector((state) => state.HOTELS.offers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotelAction(id));
    dispatch(fetchNearbyHotelAction(id));
  }, [id, dispatch, offers]);

  useEffect(() => {
    dispatch(fetchRewiewsAction(id));
  }, [id, dispatch]);

  const reviews = useAppSelector((state) => state.OFFER.rewiews);
  const nearbyHotels = useAppSelector((state) => state.OFFER.nearbyHotels);
  const currentHotels = [...nearbyHotels, offer];
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {<PropertyCard  offer={offer} reviews= {reviews} offerId= {id}/>}
          {nearbyHotels.length > 0 ? <Map city={currentHotels[0].city} offers={currentHotels} idOffer= {id}  className={'property__map map'}/>: null}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers= {nearbyHotels} className= {'near-places__list'}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
