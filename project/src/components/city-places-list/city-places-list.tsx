import Spinner from '../spinner/spinner';
import CityPlacesListEmpty from '../city-places-list-empty/city-places-list-empty';
import CityPlacesListError from '../city-places-list-error/city-places-list-error';

type CityPlacesListProp = {
  action: string;
}

const CityPlacesList = ({ action }: CityPlacesListProp): JSX.Element => {
  switch (action) {
    case 'loading': {
      return <Spinner />;
    }
    case 'error': {
      return <CityPlacesListError />;
    }
    default: return <CityPlacesListEmpty />;
  }
};

export default CityPlacesList;
