import { lazy, useEffect, useState } from "react";
import type { ProductTypes, PropTypes } from "../types";

const Pagination = lazy(() => import("./Pagination"));

const Products = ({
  limit,
  setSkip,
  setLimit,
  skip,
  currentPage,
  setCurrentPage,
}: PropTypes) => {
  const [products, setProducts] = useState<ProductTypes[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const URL = "https://dummyjson.com/products?limit=500";
  const PAGE_SIZE = 10;

  const getData = async () => {
    try {
      const res = await fetch(`${URL}`);
      const data: {
        products: ProductTypes[];
      } = await res?.json();
      setProducts(data?.products);
      setTotalPages(Math.ceil(data?.products?.length / PAGE_SIZE));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = currentPage * PAGE_SIZE;

  return (
    <>
      <Pagination
        {...{
          limit,
          setSkip,
          setLimit,
          skip,
          currentPage,
          setCurrentPage,
          totalPages,
        }}
      />
      <div className="products_container">
        <div className="products_list">
          {products?.slice(start, end)?.map((prod: ProductTypes) => (
            <div key={prod?.id} className="products_item">
              <span>{prod?.id}</span>
              <span>{prod?.title}</span>
              <span>{prod?.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
