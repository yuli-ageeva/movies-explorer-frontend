import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__box">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li>
              <Link to="https://practicum.yandex.ru" className="footer__link" target="_blank">Яндекс.Практикум</Link>
            </li>
            <li>
              <Link to="https://github.com/yuli-ageeva" className="footer__link" target="_blank">Github</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>

  )
}

export default Footer