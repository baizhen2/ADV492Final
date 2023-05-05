import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import Showcase from './components/Showcase';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { SearchResultsProvider } from './context/SearchResultsContext';

function App() {
    return (
        <div>
            <BrowserRouter>
                <SearchResultsProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/site/:siteId" element={<Showcase />} />
                    </Routes>
                </SearchResultsProvider>
            </BrowserRouter>
        </div>
  );
}

export default App;
