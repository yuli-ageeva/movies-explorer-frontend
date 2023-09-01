import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className='navigation-bar'>
            <ul className='navigation-bar__list'>
                <li key="toMovies">
                    <Link
                        className={`navigation-bar__item ${location.pathname === '/movies' ? 'navigation-bar__item-active' : ''}${isHomePage ? 'navigation-bar__item-white' : ''}`}
                        to='/movies'>
                        Фильмы
                    </Link>
                </li>
                <li key="toSavedMovies">
                    <Link
                        className={`navigation-bar__item ${location.pathname === '/saved-movies' ? 'navigation-bar__item-active' : ''}${isHomePage ? 'navigation-bar__item-white' : ''}`}
                        to='/saved-movies'>
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
