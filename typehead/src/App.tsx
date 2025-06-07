/* eslint-disable no-empty */
import { lazy, useEffect, useState } from "react";
const AutoComplete = lazy(() => import("./components/AutoComplete"));
import type { RecipesType, SearchListType } from "./types";

export default function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchList, setSearchList] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [cache, setCache] = useState<{
    [key: string]: string[];
  }>({});

  const fetchData = async () => {
    if (cache[searchInput]) {
      setSearchList(cache[searchInput]);
      return;
    }
    const res = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchInput}`
    );
    const data: RecipesType = await res?.json();
    setCache((prev) => ({
      ...prev,
      [searchInput]: data?.recipes?.map((r: SearchListType) => r?.name),
    }));
    setSearchList(data?.recipes?.map((r: SearchListType) => r?.name));
  };

  useEffect(() => {
    setLoading(true);
    try {
      const timer = setTimeout(() => {
        fetchData();
      }, 300);
      return () => clearTimeout(timer);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [searchInput]);

  return (
    <div className="app">
      <AutoComplete {...{ searchInput, setSearchInput, setShowResult }} />
      {!!showResult && (
        <div className="app_searchList">
          <div
            style={{
              width: "60vw",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxHeight: "200px",
              overflowY: "scroll",
              border: "2px solid black",
            }}
          >
            {loading ? (
              <>Loading...</>
            ) : searchList && searchList?.length > 1 ? (
              searchList?.map((item: string) => (
                <div className="app_searchItem" key={item}>
                  {item}
                </div>
              ))
            ) : (
              <>No Data found</>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
