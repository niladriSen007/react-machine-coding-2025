import type { Dispatch } from "react";


export interface AutocompleteProps {
  searchInput: string;
  setSearchInput: Dispatch<React.SetStateAction<string>>;
  setShowResult: Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchListType {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipesType {
  recipes: SearchListType[];
}
