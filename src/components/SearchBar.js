import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchResults } from '../context/SearchResultsContext';
import '../css/SearchBar.css'
import axios from 'axios';

const searchEndpoint = "http://localhost:80/search?query="

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { setSearchResults, setTitle } = useSearchResults();

    const handleSearch = async (e) => {
      e.preventDefault();
      async function fetchSearchResults() {
        const response = await axios.get(searchEndpoint + `${searchTerm}`);
        const searchResults = response.data;
        setSearchResults(searchResults);
        setTitle(`Search Results for: "${searchTerm}"`); 
        navigate('/search');
      }
      fetchSearchResults();
    }

    return (
      <>
        <form action="" class="search-bar">
          <input 
            type="search" 
            name="search" 
            pattern=".*\S.*" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          required/>
          <button class="search-btn" type="submit" onClick={handleSearch}>
            <span>Search</span>
          </button>
        </form>
      </>
    );
}

export default SearchBar;
