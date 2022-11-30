import { useState, useEffect } from 'react';
import { useAppSelector } from './store';
import { getOfferLoadedStatus, getOfferLoadingErrorStatus } from '../store/selectors';
import { ServerResponseActions } from '../const';
import { Offer } from '../types/offers-type';

const useServerActions = (offers: Offer[]) => {
  const [action, setAction] = useState(ServerResponseActions.NoContent);
  const isLoaded = useAppSelector(getOfferLoadedStatus);
  const isError = useAppSelector(getOfferLoadingErrorStatus);

  useEffect(() => {
    if (!offers.length && isLoaded) {
      setAction(ServerResponseActions.NoContent);
    }

    if (!offers.length && !isLoaded && !isError) {
      setAction(ServerResponseActions.Loading);
    }

    if (offers.length > 0 && isLoaded) {
      setAction(ServerResponseActions.Ready);
    }

    if (isError && !isLoaded) {
      setAction(ServerResponseActions.Error);
    }

  }, [isError, isLoaded, offers]);

  return action;

};

export default useServerActions;
