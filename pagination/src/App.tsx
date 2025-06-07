import { lazy, useState } from "react";

const Products = lazy(() => import("./components/Products"));
import "./index.scss";

export default function App() {
  const [limit, setLimit] = useState<number>(500);
  const [skip, setSkip] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="App">
      <Products
        {...{ limit, setSkip, setLimit, skip, currentPage, setCurrentPage }}
      />
    </div>
  );
}
