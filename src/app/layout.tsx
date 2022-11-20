'use client';

import { Global } from '@emotion/react';
import { Wrapper } from '@googlemaps/react-wrapper';
import GNB from '../layouts/GNB';
import { globalStyles } from '../styles/GlobalStyles';

import { Inter, Noto_Sans } from '@next/font/google';
import { RecoilRoot } from 'recoil';

const notoSans = Noto_Sans({
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={notoSans.className}>
      <head></head>
      <RecoilRoot>
        <body>
          <Global styles={globalStyles} />
          {/* google maps react wrapper */}
          <GNB />
          {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
