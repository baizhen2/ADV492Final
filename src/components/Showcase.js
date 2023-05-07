import React from 'react';
import { useParams } from 'react-router-dom';
import Background from './Background';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Showcase.css';

function Showcase() {
    const { siteId } = useParams();
    const url = `https://api.tosdr.org/rest-service/v3/${siteId}.json`;
    const [jsonResults, setJsonResults] = useState(undefined);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchSearchResults() {
        const response = await axios.get(url);
        const searchResults = response.data;
        setJsonResults(searchResults);
        setLoading(false);
      }
  
      fetchSearchResults();
    }, []);
  
    return (
      <>
        <Background></Background>
        {loading ? (
            <div className="loading-container">
                <div className="loading-text">Loading...</div>
            </div>
        ) : (
          <div>{jsonResults.parameters.name}</div>
        )}
      </>
    );
}  

export default Showcase;