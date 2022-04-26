import {useState, ChangeEvent, FormEvent} from 'react';
import {postReviewsAction} from '../../store/api-actions';
import {useAppDispatch } from '../../hooks/index';

type ReviewFormProp = {
  idHotels: number;
}

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 300;


function ReviewForm ({idHotels}: ReviewFormProp):JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [comment, setTextComment] = useState<string>('');
  const [isFormDisabled, setFormDisabled] = useState<boolean>(false);
  const [isCommentvalid, setCommentValid] = useState<boolean>(false);

  const checkCommentLength = () => (
    comment.length >= COMMENT_MIN_LENGTH && comment.length <= COMMENT_MAX_LENGTH
  ) ? setCommentValid(true) : setCommentValid(false);

  const handleInputChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleTextAreaChange = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    setTextComment(evt.target.value);
    checkCommentLength();
  };

  const dispatch = useAppDispatch();
  const resetForm = () => {
    setRating(0);
    setTextComment('');
  };

  const handleFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    dispatch(postReviewsAction({rating, comment, idHotels}))
      .then(() => resetForm())
      .finally(() => setFormDisabled(false));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}  >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange = {handleInputChange} className="form__rating-input visually-hidden" name="rating" value={5} checked = {rating === 5} id="5-stars" type="radio" disabled = {isFormDisabled}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange = {handleInputChange} className="form__rating-input visually-hidden" name="rating" value={4} checked = {rating === 4} id="4-stars" type="radio" disabled = {isFormDisabled}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" value={3} checked = {rating === 3} id="3-stars" type="radio" onChange = {handleInputChange} disabled = {isFormDisabled}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input  className="form__rating-input visually-hidden" name="rating" value={2} checked = {rating === 2} id="2-stars" type="radio" onChange = {handleInputChange} disabled = {isFormDisabled}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input  className="form__rating-input visually-hidden" name="rating" value={1} checked = {rating === 1} id="1-star" type="radio" onChange = {handleInputChange} disabled = {isFormDisabled}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea onChange = {handleTextAreaChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} disabled = {isFormDisabled}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={rating===0 ||!isCommentvalid || isFormDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
