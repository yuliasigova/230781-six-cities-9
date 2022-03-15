import Header from '../header/header';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import {useState} from 'react';
import {useAppSelector } from '../../hooks/index';
import CitiesList from '../cities-list/cities-list';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';

function MainScreen ():JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<number|null>(null);
  const onListItemHover = (offerId: number | null) => setSelectedOffer(offerId);
  const {city, offers} = useAppSelector((state) => state);

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={0}>
              Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OffersList onActiveCardHover = {onListItemHover} offers = {filterOffers}/>
              </section>
              <div className="cities__right-section">
                <Map city = {filterOffers[0].city} offers={filterOffers} selectedOffer= {selectedOffer}/>
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}


export default MainScreen;
