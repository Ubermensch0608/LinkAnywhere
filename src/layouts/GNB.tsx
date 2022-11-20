'use client';

import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const GNB = () => {
  return (
    <Header>
      <Nav>
        <Link href='/'>
          <Logo>Link.Anywhere</Logo>
        </Link>
        <ul>
          <li>
            <Link href='/travel'>여행</Link>
          </li>
          <li>
            <Link href='/photo'>사진</Link>
          </li>
          <li>
            <Link href='/food'>먹거리</Link>
          </li>
          <li>
            <Link href='/drinks'>술</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 1280px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 1.5;
`;

export default GNB;
