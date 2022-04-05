import {useState} from 'react';
import { SortType } from '../../const';
import {useAppSelector, useAppDispatch } from '../../hooks/index';
import {changeSort} from '../../store/hotels-slice/hotels-slice';

function SortForm ():JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortList = Object.values(SortType);
  const sortType = useAppSelector((state) => state.HOTELS.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick = {()=>setIsOpen(!isOpen)}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        {sortList.map((sortName) => (
          <li key = {sortName} className={`places__option ${sortName === sortType  && 'places__option--active'}`} tabIndex={0}
            onClick= {() => {
              dispatch(changeSort(sortName));
              setIsOpen(!isOpen);
            }}
          >
            {sortName}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
