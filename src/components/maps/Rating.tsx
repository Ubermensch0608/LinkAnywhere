import React, { FC } from 'react';

interface Props {
  rating: number | undefined;
}

const Rating: FC<Props> = ({ rating }) => {
  return (
    <div>
      별점: <strong>{rating}</strong>
    </div>
  );
};

export default Rating;
