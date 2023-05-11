import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import Showcase from './components/Showcase';
import About from './components/About';
import { HashRouter as Router , Routes, Route } from 'react-router-dom';
import { SearchResultsProvider } from './context/SearchResultsContext';

function App() {
    return (
        <div>
            <Router>
                <SearchResultsProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/site/:siteId" element={<Showcase />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </SearchResultsProvider>
            </Router>
        </div>
  );
}

export default App;
