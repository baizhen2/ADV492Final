import Background from './Background';
import SearchBar from './SearchBar';
import FrontPageLogo from './FrontPageLogo';
import AboutButton from './AboutButton';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();

    const handleNavigation = async () => {
        navigate(`/about`);
    };
    
    return (
        <>
            <Background></Background>
            <FrontPageLogo></FrontPageLogo>
            <SearchBar></SearchBar>
            <AboutButton onClick={handleNavigation}></AboutButton>
        </>
    )
}

export default HomePage;