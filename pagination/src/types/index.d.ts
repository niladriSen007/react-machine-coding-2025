import { Dispatch } from "react";

export interface ProductTypes {
  id: number;
  title: string;
  price: number;
}

export interface PropTypes {
  skip: number;
  setSkip: Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

export interface PaginationTypes extends PropTypes{
    totalPages : number
}
