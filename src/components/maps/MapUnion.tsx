import React from 'react';
import { useSetRecoilState } from 'recoil';

import { Wrapper } from '@googlemaps/react-wrapper';
import GoogleMaps from './GoogleMaps';
import PlaceDetailSection from './PlaceDetailSection';

import { placeIDState } from './common/atoms/placeIdState';

import styled from '@emotion/styled';

const MapIndicator = styled.div`
  background-color: black;
  opacity: 0.7;
`;

const MapUnion = () => {
  const setPlaceID = useSetRecoilState(placeIDState);

  const getMapInfoHandler = async (e: google.maps.MapMouseEvent) => {
    const clickedPlaceId = e.placeId;

    setPlaceID(clickedPlaceId);
  };

  return (
    <StyledMapUnion>
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string}>
        <GoogleMaps onClick={getMapInfoHandler} />

        <React.Suspense fallback={<MapIndicator />}>
          <PlaceDetailSection />
        </React.Suspense>
      </Wrapper>
    </StyledMapUnion>
  );
};

const StyledMapUnion = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
`;

export default MapUnion;
