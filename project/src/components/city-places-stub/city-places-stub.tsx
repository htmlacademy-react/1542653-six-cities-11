import Spinner from '../spinner/spinner';
import CityPlacesListEmpty from '../city-places-empty/city-places-empty';
import CityPlacesListError from '../city-places-error/city-places-error';

type CityPlacesStubProp = {
  action: string;
}

const CityPlacesStub = ({ action }: CityPlacesStubProp): JSX.Element => {
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

export default CityPlacesStub;
