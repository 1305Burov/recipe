import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <header className="container header">
            <h1><Link to="/" className="header__logo">Recipes</Link></h1>
            {location.pathname !== '/adding' && <Link to="/adding" className="header__adding-link">Add Recipe</Link>}
        </header>
    );
}

export default Header;
