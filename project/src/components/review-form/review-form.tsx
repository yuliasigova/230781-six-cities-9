import {useState, ChangeEvent} from 'react';

function RewiewForm ():JSX.Element {
  const [rating, setRating] = useState<string | null>('0');
  const [textComment, setTextComment] = useState<string>('');

  const inputChangeHandle = (evt:ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const textAreaChangeHandle = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    setTextComment(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange = {inputChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={5} checked = {rating === '5'} id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange = {inputChangeHandle} className="form__rating-input visually-hidden" name="rating" defaultValue={4} checked = {rating === '4'} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} checked = {rating === '3'} id="3-stars" type="radio" onChange = {inputChangeHandle}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input  className="form__rating-input visually-hidden" name="rating" defaultValue={2} checked = {rating === '2'} id="2-stars" type="radio" onChange = {inputChangeHandle}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input  className="form__rating-input visually-hidden" name="rating" defaultValue={1} checked = {rating === '1'} id="1-star" type="radio" onChange = {inputChangeHandle}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea onChange = {textAreaChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={textComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default RewiewForm;
