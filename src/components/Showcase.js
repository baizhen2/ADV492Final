import React from 'react';
import { useParams } from 'react-router-dom';
import Background from './Background';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Showcase.css';
import defaultImage from '../images/defaultimage.png';

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
            <div className="showcase-main">
                <div className="showcase-name">{jsonResults.parameters.name}</div>
                <div className="site-thumbnail-showcase">
                    <img
                        src={`https://s3.tosdr.org/logos/${siteId}.png`}
                        alt={`${jsonResults.parameters.name} site icon`}
                        className="site-icon-showcase"
                        width="600"
                        height="300"
                        onError={(e) => { 
                            e.target.onError = null; 
                            e.target.src = defaultImage; 
                            e.target.classList.add("default-image")
                        }}
                    />
                </div>
            </div>
        )}
      </>
    );
}  

export default Showcase;