import CardOffer from '../card-offer/card-offer';
import {Offers} from '../../types/offers';
import {sortOffers} from '../../util';
import {useAppSelector } from '../../hooks/index';

type OffersListProps = {
  offers: Offers;
  className: string;
}

function OffersList ({offers, className}:OffersListProps):JSX.Element {
  const sortType = useAppSelector((state) => state.HOTELS.sortType);
  const currentOffers = sortOffers(offers, sortType);
  return (
    <div className={`${className} places__list`}>
      {
        currentOffers.map((offer) => <CardOffer key = {offer.id} offer = {offer}/>)
      }
    </div>
  );
}

export default OffersList;
