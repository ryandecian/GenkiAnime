import { createContext, useContext, useEffect, useState } from "react";
import { dataPageAction } from "../datas/DataCategoryGenre/DataPageAction/dataPageAction";
import type { SearchType } from "../datas/DataHome/SearchType";

type SearchContextType = {
  search: string;
  setSearch: (e: string) => void;
  animeSearch: SearchType[];
  setAnimeSearch: (data: SearchType[]) => void;
  dataAnimeAction: SearchType[];
  setDataAnimeAction: (data: SearchType[]) => void;
};

type ChildrenType = {
  children: React.ReactNode;
};

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: ChildrenType) {
  const [search, setSearch] = useState<string>("");
  const [animeSearch, setAnimeSearch] = useState<SearchType[]>([]);
  const [dataAnimeAction, setDataAnimeAction] =
    useState<SearchType[]>(dataPageAction);

  useEffect(() => {
    if (search.trim() === "") {
      setAnimeSearch([]);
      return;
    }

    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(search)}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAnimeSearch(data?.data || []);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API :", error);
        setAnimeSearch([]);
      });
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        animeSearch,
        setAnimeSearch,
        dataAnimeAction,
        setDataAnimeAction,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const search = useContext(SearchContext);
  if (!search) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return search;
};
