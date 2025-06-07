import { Dispatch } from "react";

export interface StarRatingProps {
  startCount: number;
  rating: number;
  setRating: Dispatch<React.SetStateAction<number>>;
}
