import React from 'react';
import '../css/SearchResults.css';
import Background from './Background';
import { Link } from 'react-router-dom';
import { useSearchResults } from '../context/SearchResultsContext';
import defaultImage from '../images/defaultimage.png';

function SearchResults() {
    const { searchResults, title } = useSearchResults(); 

    return (
        <>
            <Background></Background>
            <div className="search-results">
                <h2 className="search-title">{title}</h2>

                <div className="results-grid">
                    {searchResults.parameters.services.map((site) => (
                        <Link key={site.id} to={`/site/${site.id}`} style={{ textDecoration: 'none' }}>
                            <div key={site.id} className="site-tile">
                                <div className="site-thumbnail">
                                    <img
                                        src={`https://s3.tosdr.org/logos/${site.id}.png`}
                                        alt={`${site.name} site icon`}
                                        className="site-icon"
                                        onError={(e) => { e.target.onError = null; e.target.src = defaultImage; }}
                                    />
                                </div>
                                <div className="site-info">
                                    <div className="site-name">{site.name}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SearchResults;