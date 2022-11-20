import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentPlaceInfoSelector } from './common/atoms';

import styled from '@emotion/styled';
import Image from 'next/image';
import Rating from './Rating';
import Link from 'next/link';
import { transferDateHandler } from './common/handlers';

const PlaceDetailSection = () => {
  const placeDetails = useRecoilValue(currentPlaceInfoSelector);
  const result = placeDetails?.result;

  if (placeDetails?.status === 'INVALID_REQUEST') {
    return <div>잘못된 요청입니다.</div>;
  }

  console.log(placeDetails?.result);

  return (
    <StyledPlaceDetail>
      <article>
        <header>
          <Name>{result?.name}</Name>
          {result?.icon ? (
            <Image src={result.icon} alt={`LinkAnywhere-image__google maps ${result.name}`} width={16} height={16} />
          ) : null}

          <Rating rating={result?.rating} />
        </header>

        <address>주소: {result?.formatted_address}</address>
        {result?.formatted_phone_number ? (
          <a href={`tel:${result?.formatted_phone_number}`}>전화걸기: {result?.formatted_phone_number}</a>
        ) : null}

        <article>
          <h2>언제 열어요?</h2>

          {result?.current_opening_hours ? (
            <>
              <p>{result.current_opening_hours.open_now ? '열었어요' : '닫았어요'}</p>
              <ul>
                {result.current_opening_hours.periods.map((period) => (
                  <li>
                    {period.open.date} ({transferDateHandler(period.open.day)}) ~ {period.close.date} (
                    {transferDateHandler(period.close.day)})
                  </li>
                ))}
              </ul>

              <ul>
                {result.current_opening_hours.weekday_text.map((text) => (
                  <li>{text}</li>
                ))}
              </ul>
            </>
          ) : null}

          {result?.website ? (
            <Link href={result?.website} target='_blank'>
              공식 페이지
            </Link>
          ) : null}
        </article>
      </article>
    </StyledPlaceDetail>
  );
};

const StyledPlaceDetail = styled.section`
  width: 640px;
`;

const Name = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

export default PlaceDetailSection;
