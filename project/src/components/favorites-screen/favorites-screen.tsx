import Header from '../header/header';
import FavoriteCard from '../favorite-card/favorite-card';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import {useEffect} from 'react';
import {fetchFavoriteHotelAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen ():JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.HOTELS.favoriteOffers);
  const isFavoriteLoaded = useAppSelector((state) => state.HOTELS.isFavoriteLoaded);
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.HOTELS.offers);
  const cityOffer = new Set(favoriteOffers.map((offer) => offer.city.name));
  useEffect(() => {
    dispatch(fetchFavoriteHotelAction());
  }, [offers, dispatch]);

  if (!isFavoriteLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <div className={`page ${favoriteOffers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {favoriteOffers.length === 0 ? FavoritesEmptyScreen() :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {[...cityOffer].map((city) =>
                  (
                    <li className="favorites__locations-items" key = {city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) =>
                          <FavoriteCard key = {offer.id} offer = {offer}/>)}
                      </div>
                    </li>))}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
