import { Offer } from '../../types/offers';
import {getRating} from '../../util';
import {Link} from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import {AppRoute} from '../../const';

type  FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard ({offer}:FavoriteCardProps ):JSX.Element {
  const {previewImage, isPremium, price, type, title, rating, id} = offer;
  return (
    <article className="favorites__card place-card">
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Main}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place offer" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton className={'place-card'} width={18} height={19} offer= {offer}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default FavoriteCard;
