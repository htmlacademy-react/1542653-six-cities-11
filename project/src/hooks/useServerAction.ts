import { useState, useEffect } from 'react';
import { useAppSelector } from './store';
import { getOfferLoadedStatus, getOfferLoadingErrorStatus } from '../store/offers-process/selectors';
import { ServerResponseActions } from '../const';
import { Offer } from '../types/offers-type';

const useServerActions = (offers: Offer[]) => {
  const [action, setAction] = useState(ServerResponseActions.NoContent);
  const isLoaded = useAppSelector(getOfferLoadedStatus);
  const isError = useAppSelector(getOfferLoadingErrorStatus);

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && !offers.length && isLoaded) {
      setAction(ServerResponseActions.NoContent);
    }

    if (isComponentMounted && !offers.length && !isLoaded && !isError){
      setAction(ServerResponseActions.Loading);
    }

    if (isComponentMounted && offers.length > 0 && isLoaded) {
      setAction(ServerResponseActions.Ready);
    }

    if (isComponentMounted && isError && !isLoaded) {
      setAction(ServerResponseActions.Error);
    }

    return () => {
      isComponentMounted = false;
    };

  }, [isError, isLoaded, offers]);

  return action;

};

export default useServerActions;
