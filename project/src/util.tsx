export const createPremiumMark = (isPremium:boolean):JSX.Element | null => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
