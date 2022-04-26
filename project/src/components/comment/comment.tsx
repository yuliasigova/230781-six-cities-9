import {Review} from '../../types/reviews';
import {getRating} from '../../util';
type  ReviewProps = {
  review: Review;
}

function Comment ({review}: ReviewProps ):JSX.Element {
  const {user:{name, avatarUrl}, rating, comment, date} = review;
  const month = new Date(date).toLocaleString('en-US', {month: 'long'});
  const year = (new Date(date).getFullYear());

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={(new Date(date)).toISOString().slice(0,10)}>
          {`${month} ${year}`}
        </time>
      </div>
    </li>
  );
}

export default Comment;
