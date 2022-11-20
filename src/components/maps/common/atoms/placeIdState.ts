import axios from 'axios';
import { atom, selector, selectorFamily } from 'recoil';
import { IPlaceDetail } from '../@types';

export const placeIDState = atom({
  key: '@components/maps/common/atoms/placeIdState/placeIDState',
  default: '',
});

export const currentPlaceInfoSelector = selector({
  key: '@components/maps/common/atoms/placeIdState/currentPlaceInfoSelector',
  get: async ({ get }) => {
    const placeID = get(placeIDState);

    const { data } = await axios.get<IPlaceDetail | undefined>(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`
    );

    return data;
  },
});
