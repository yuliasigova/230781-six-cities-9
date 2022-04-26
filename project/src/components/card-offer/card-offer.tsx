import { Offer } from '../../types/offers';
import {Link} from 'react-router-dom';
import {getRating} from '../../util';
import {useAppDispatch } from '../../hooks/index';
import {changeOffer} from '../../store/hotels-slice/hotels-slice';
import FavoriteButton from '../favorite-button/favorite-button';


type  CardOfferProps =  {
  offer: Offer;
}

function CardOffer ({offer}:CardOfferProps ):JSX.Element {

  const {previewImage, isPremium, price, type, title, id, rating} = offer;
  const dispatch = useAppDispatch();
  const handleItemHover = () => dispatch(changeOffer(id));

  return (
    <article
      onMouseOver={() => {handleItemHover();}}
      className="cities__place-card place-card"
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
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
          < FavoriteButton className={'place-card'} width={18} height={19} offer={offer}/>
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
