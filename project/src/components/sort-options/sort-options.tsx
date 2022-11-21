import cn from 'classnames';
import { useAppDispatch } from '../../hooks/store';
import { setSortType } from '../../store/actions';

type SortOptionProp = {
  isActive: boolean;
  optionName: string;
  onSetListStatus: (status: boolean) => void;
}

const SortOption = ({isActive, optionName, onSetListStatus}: SortOptionProp): JSX.Element => {
  const dispatch = useAppDispatch();
  const clickSortOptionHandler = () => {
    dispatch(setSortType(optionName));
    onSetListStatus(false);
  };

  return (
    <li className={cn(
      {'places__option places__option': !isActive},
      {'places__option places__option--active': isActive}
    )}
    tabIndex={0}
    onClick={clickSortOptionHandler}
    >
      {optionName}
    </li>
  );
};

export default SortOption;
