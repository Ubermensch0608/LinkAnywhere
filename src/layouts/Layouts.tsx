import { Global } from '@emotion/react';
import React, { FC, PropsWithChildren } from 'react';
import { globalStyles } from '../styles/GlobalStyles';

const Layouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
};

export default Layouts;
