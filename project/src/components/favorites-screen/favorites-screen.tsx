import Header from '../header/header';
import {Offers} from '../../types/offers';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen ({offers}:FavoritesScreenProps):JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((offer) => (
                    <article key = {offer.id} className="favorites__card place-card">
                      {offer.isPremium ?
                        <div className="place-card__mark">
                          <span>Premium</span>
                        </div> : ''}
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href="/">
                          <img className="place-card__image" src={offer.previewImage} width={150} height={110} alt="Place offer" />
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{offer.price}</b>
                            <span className="place-card__price-text">/&nbsp;night</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width={18} height={19}>
                              <use xlinkHref="#icon-bookmark" />
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{width: '100%'}} />
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="/">{offer.title}</a>
                        </h2>
                        <p className="place-card__type">{offer.type}</p>
                      </div>
                    </article>))}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
