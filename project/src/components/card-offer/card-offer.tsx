import { Offer } from '../../types/offers';
import {Link} from 'react-router-dom';
import {createPremiumMark, getRating} from '../../util';


type  CardOfferProps = {
  offer: Offer;
  onCardHover: (id:number | null) => void;
}

function CardOffer ({offer, onCardHover}:CardOfferProps ):JSX.Element {
  const {previewImage, isPremium, price, type, title, id, rating} = offer;
  return (
    <article
      onMouseOver={() => {onCardHover(id);}}
      className="cities__place-card place-card"
    >
      {createPremiumMark(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="{260}" height="{200}" alt="offer place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="{18}" height="{19}">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardOffer;
