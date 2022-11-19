import type { AppProps } from 'next/app';
import Layouts from '../layouts/Layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
