import './AboutMe.css'
import {Link} from "react-router-dom";
import studentFoto from '../../../images/student-foto.jpeg'

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__info'>
                <div className='about-me__description'>
                    <h3 className='about-me__description-title'>Юлия
                    </h3>
                    <p className='about-me__description-job'>Фронтенд-разработчик, 25 лет</p>
                    <p className='about-me__description-info'>Я родилась в Нижнем Новгороде и закончила Юридический
                        факультет
                        ННГУ. Работала в Москве судебным юристом в крупных строительных компаниях и маркетплейсе.
                        В настоящее время живу в Португалии в городе Порту и изучаю программирование.</p>
                    <Link className='about-me__description-link' to="https://github.com/yuli-ageeva"
                          target='_blank'>Github</Link>
                </div>
                <div className='about-me__container-foto'>
                    <img className='about-me__container-foto-foto' src={studentFoto} alt='фотография студента'></img>
                </div>
            </div>
        </section>

    )
}

export default AboutMe