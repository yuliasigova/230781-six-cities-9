import CardOffer from '../card-offer/card-offer';
import {Offers} from '../../types/offers';

type OffersListProps = {
  offers: Offers;
  onActiveCardHover: (id:number | null) => void;
}

function OffersList ({offers, onActiveCardHover}:OffersListProps):JSX.Element {
  const handleCardActive = (id:number | null) => onActiveCardHover(id);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <CardOffer onCardHover = {handleCardActive} key = {offer.id} offer = {offer}/>)
      };
    </div>
  );
}

export default OffersList;
