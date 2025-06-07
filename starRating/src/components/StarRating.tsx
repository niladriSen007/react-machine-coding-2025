import { useState } from "react";
import type { StarRatingProps } from "../types";

const StarRating = ({ rating, startCount, setRating }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  return (
    <div className="star_container">
      {[...Array(startCount).keys()].map((item, index) => {
        let starClass: string = "star_icon";
        if (hoveredRating >= item + 1) {
          starClass += "--hover";
        } else if (item + 1 <= rating) {
          starClass += "--rating";
        }
        return (
          <div
            onClick={() => {
              setRating(item + 1);
            }}
            onMouseOver={() => {
              setHoveredRating(item + 1);
            }}
            onMouseLeave={() => {
              setHoveredRating(0);
            }}
            className={starClass}
            key={index}
          >
            &#9733;
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
