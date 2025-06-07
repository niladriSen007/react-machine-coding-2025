import { lazy, useState } from "react";
const StarRating = lazy(() => import("./components/StarRating"));

export default function App() {
  const [rating, setRating] = useState<number>(1);
  const STAR_COUNT = 5;

  return (
    <div className="App">
      <StarRating
        startCount={STAR_COUNT}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
}
