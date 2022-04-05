import {useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
import {postFavoriteHotelAction} from '../../store/api-actions';
//import {useCallback } from 'react';

type FavoriteButtonProps = {
  isFavorite:boolean;
  className: string;
  width: number;
  height: number;
  id: number | null;
}

function FavoriteButton ({isFavorite, className, width, height, id}: FavoriteButtonProps) {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  //const selectedOffer = useAppSelector((state) => state.HOTELS.selectedOffer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login);
    }
    return dispatch(postFavoriteHotelAction({idHotels:id, status:isFavorite ? 0 : 1}));
  };

  return (
    <button className={`${className}__bookmark-button button ${isFavorite &&`${className}__bookmark-button--active`}`}
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
