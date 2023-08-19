import './Portfolio.css';
import {Link} from "react-router-dom";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://github.com/yuli-ageeva/how-to-learn'>Статичный сайт
            <span className='portfolio__link-icon'></span>
          </Link>
        </li>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://github.com/yuli-ageeva/russian-travel'>Адаптивный сайт
            <span className='portfolio__link-icon'></span>
          </Link>
        </li>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://github.com/yuli-ageeva/react-mesto-api-full-gha'>Одностраничное
            приложение
            <span className='portfolio__link-icon'></span>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio