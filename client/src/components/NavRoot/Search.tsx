import { useSearch } from "../../contexts/SearchContext";

function Search() {
  const { search, setSearch } = useSearch();
  return (
    <input
      type="text"
      value={search}
      className="Search"
      placeholder="  Rechercher un anime"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
}

export default Search;
