import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className='not-found-page'>
      <h2 className='not-found-page__title'>404</h2>
      <p className='not-found-page__description'>Страница не найдена</p>
      <Link className='not-found-page__link' to='/'>Назад</Link>
    </div>
  )
}

export default NotFound