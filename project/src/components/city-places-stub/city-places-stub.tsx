import Spinner from '../spinner/spinner';
import CityPlacesListEmpty from '../city-places-empty/city-places-empty';
import CityPlacesListError from '../city-places-error/city-places-error';
import { ServerResponseActions } from '../../const';

type CityPlacesStubProp = {
  action: string;
}

const CityPlacesStub = ({ action }: CityPlacesStubProp): JSX.Element => {
  switch (action) {
    case ServerResponseActions.Loading: {
      return <Spinner />;
    }
    case ServerResponseActions.Error: {
      return <CityPlacesListError />;
    }
    default: return <CityPlacesListEmpty />;
  }
};

export default CityPlacesStub;
