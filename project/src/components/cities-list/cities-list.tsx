import { Link } from 'react-router-dom';
import {cities} from '../../const';
import {useAppDispatch} from '../../hooks/index';
import {useAppSelector } from '../../hooks/index';
import {changeCity} from '../../store/hotels-slice/hotels-slice';

function CitiesList ():JSX.Element {
  const currentCity = useAppSelector((state) => state.HOTELS.city);
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) =>
          (
            <li className="locations__item" key = {city}>
              <Link className={`locations__item-link tabs__item ${currentCity === city && 'tabs__item--active'}`} to="/" onClick = {() => dispatch(changeCity(city))}>
                <span>{city}</span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default CitiesList;
