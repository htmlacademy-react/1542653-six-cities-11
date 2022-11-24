import cn from 'classnames';
import { useState } from 'react';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks/store';
import SortOption from '../sort-options/sort-options';
import { getCurrentSort } from '../../store/selectors';


const SortForm = (): JSX.Element => {
  const currentSortType = useAppSelector(getCurrentSort);
  const [isSortListOpen, setSortListStatus] = useState(false);

  const clickSortListHandler = () => setSortListStatus(!isSortListOpen);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={clickSortListHandler}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isSortListOpen},
        {'places__options--closed': !isSortListOpen}
      )}
      >
        {Object.values(SortType).map((type) => <SortOption key={type} optionName={type} isActive={type === currentSortType} onSetListStatus={setSortListStatus} />)}
      </ul>
    </form>
  );
};

export default SortForm;
