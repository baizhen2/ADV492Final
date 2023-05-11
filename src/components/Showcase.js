import React from 'react';
import { useParams } from 'react-router-dom';
import Background from './Background';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Showcase.css';
import defaultImage from '../images/defaultimage.png';
import Dropdown from './Dropdown'

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
    }, [url]);
  
    return (
      <>
        <Background></Background>
        {loading ? (
            <div className="loading-container">
                <div className="loading-text">Loading...</div>
            </div>
        ) : (
            <div className="showcase-main">
                <div className="showcase-name-thumbnail"> 
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
                <div className="dropdowns">
                    {jsonResults.parameters.points
                        .filter((point) => point.title.length > 25) // adjust the threshold value as needed
                        .reduce((accumulator, point, index, array) => {
                            if (index % 2 === 0) {
                                if (array[index + 1]) {
                                    accumulator.push([
                                        <div className="dropdown-set">
                                            <Dropdown key={`${point.id}-1`} point={point} />
                                            <Dropdown key={`${array[index + 1].id}-2`} point={array[index + 1]} />
                                        </div>
                                    ]);
                                } else {
                                    accumulator.push([
                                        <div className="dropdown-set">
                                            <Dropdown key={`${point.id}-1`} point={point} />
                                        </div>
                                    ]);
                                }
                            }
                            return accumulator;
                        }, [])
                    }
                    {jsonResults.parameters.points.filter((point) => point.title.length > 25).length === 0 && (
                        <p>This site has yet to be audited.</p>
                    )}
                </div>
            </div>
        )}
      </>
    );
}

export default Showcase;