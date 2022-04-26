import Header from '../header/header';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {useAppSelector } from '../../hooks/index';
import CitiesList from '../cities-list/cities-list';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import SortForm from '../sort-form/sort-form';


function MainScreen ():JSX.Element {
  const city = useAppSelector((state) => state.HOTELS.city);
  const offers = useAppSelector((state) => state.HOTELS.offers);
  const filterOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      {filterOffers.length === 0 ? <MainEmptyScreen city = {city}/> :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filterOffers.length} places to stay in {city}</b>
                <SortForm />
                <OffersList offers = {filterOffers} className = {'cities__places-list tabs__content'}/>
              </section>
              <div className="cities__right-section">
                <Map city = {filterOffers[0].city} offers={filterOffers} className={'cities__map map'}/>
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}


export default MainScreen;
