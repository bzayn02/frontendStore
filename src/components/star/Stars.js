import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';

const highestStar = 5;

const Stars = ({ num }) => {
  if (!num) {
    return 'No rating available';
  }
  let hasDecimal = num % 1 !== 0;
  const fullStarVal = parseInt(num);
  const emptyStarVal = hasDecimal
    ? highestStar - fullStarVal - 1
    : highestStar - fullStarVal;
  const fullStar = Array(fullStarVal).fill(
    <AiFillStar className="text-warning" />
  );
  const emptyStar = Array(emptyStarVal)?.fill(<AiOutlineStar />);
  return (
    <div className="fs-3">
      {fullStar?.map((item) => item)}
      {hasDecimal && <BiSolidStarHalf className="text-warning" />}
      {emptyStar?.map((item) => item)}
    </div>
  );
};

export default Stars;
