'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useDeepCompareEffectForMaps from '../../hooks/useDeepCompareEffectForMaps';

interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

const GoogleMaps: FC<MapProps> = ({ onClick, onIdle, style, children }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const google = (window as any).google;

  useEffect(() => {
    const centerPoint = { lat: 37.58, lng: 126.97 };

    if (mapRef.current && !map) {
      setMap(
        new google.maps.Map(mapRef.current, {
          center: centerPoint,
          zoom: 13,
        })
      );
    }
  }, [mapRef, map, google.maps.Map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName));
    }

    if (onClick) {
      map?.addListener('click', onClick);
    }

    if (onIdle) {
      map?.addListener('idle', () => onIdle(map));
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <MapSection ref={mapRef} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const MapSection = styled.section`
  width: 640px;
  height: 500px;
  border-radius: 20px;
`;

export default GoogleMaps;
