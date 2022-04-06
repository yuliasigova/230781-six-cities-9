import {useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
import {postFavoriteHotelAction} from '../../store/api-actions';
import { Offer } from '../../types/offers';

type FavoriteButtonProps = {
  className: string;
  width: number;
  height: number;
  offer: Offer;
}

function FavoriteButton ({className, width, height, offer}: FavoriteButtonProps) {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login);
    }
    return dispatch(postFavoriteHotelAction({idHotels:offer.id, status:offer.isFavorite ? 0 : 1}));
  };

  return (
    <button className={`${className}__bookmark-button button ${offer.isFavorite &&`${className}__bookmark-button--active`}`}
      type="button" onClick = {handleButtonClick}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
