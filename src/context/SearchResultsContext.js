import { createContext, useContext, useState } from 'react';

const SearchResultsContext = createContext();

export const useSearchResults = () => {
  return useContext(SearchResultsContext);
};

export const SearchResultsProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState('');

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults, title, setTitle }}>
      {children}
    </SearchResultsContext.Provider>
  );
};
