import {Offer} from '../../types/offers';
import {getRating} from '../../util';
import {Reviews} from '../../types/reviews';
import ReviewForm from '../review-form/review-form';
import Comment from '../comment/comment';
import {AuthorizationStatus} from '../../const';
import {useAppSelector } from '../../hooks/index';
import FavoriteButton from '../favorite-button/favorite-button';

const MAX_PHOTOS = 6;
const MAX_COMMENTS = 10;

type PropertyCardProps = {
  offer: Offer;
  reviews: Reviews;
  offerId: number;
}

function PropertyCard ({offer, reviews, offerId}:PropertyCardProps):JSX.Element {
  const {goods, title, price, type, bedrooms, maxAdults, rating, images, isPremium, description, host, isFavorite} = offer;
  const comments = reviews.slice().sort((a, b) => (new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1)).slice(0, MAX_COMMENTS);
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images?.slice(0,MAX_PHOTOS).map((card) => (
            <div key = {card} className="property__image-wrapper">
              <img className="property__image" src={card} alt="offer studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium &&
      <div className="property__mark">
        <span>Premium</span>
      </div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            < FavoriteButton isFavorite={isFavorite} className={'property'} width={31} height={33} id={offerId}/>
            {/* <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button> */}
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${getRating(rating)}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">{type}
            </li>
            <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
      Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods?.map((good) => (
                <li key={good} className="property__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper user__avatar-wrapper ${host?.isPro && 'property__avatar-wrapper--pro'}`}>
                <img className="property__avatar user__avatar" src={host?.avatarUrl} width={74} height={74} alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host?.name}
              </span>
              {host?.isPro &&
          <span className="property__user-status">
        Pro
          </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
            <ul className="reviews__list">
              {comments.map((review) => <Comment key={review.id} review={review}/>)}
            </ul>
            {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm idHotels={offerId}/>}
          </section>
        </div>
      </div>
    </>

  );
}

export default PropertyCard;
