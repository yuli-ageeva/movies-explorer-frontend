import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <div className='navigation-bar'>
      <ul className='navigation-bar__list'>
        <li>
          <Link
            className={`navigation-bar__item ${location.pathname === '/movies' ? 'navigation-bar__item-active' : ''}`}
            to='/movies'>
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            className={`navigation-bar__item ${location.pathname === '/saved-movies' ? 'navigation-bar__item-active' : ''}`}
            to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
