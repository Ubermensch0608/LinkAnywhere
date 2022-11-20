import App from 'next/app';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import { createCustomEqual } from 'fast-equals';

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
  if (isLatLngLiteral(a) || a instanceof google.maps.LatLng || isLatLngLiteral(b) || b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }

  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
});

const useDeepCompareMemoize = (value: any) => {
  const ref = useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};

const useDeepCompareEffectForMaps = (callback: React.EffectCallback, dependencies: any[]) => {
  useEffect(callback, [callback]);
};

window.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<App />);
});

export default useDeepCompareEffectForMaps;
