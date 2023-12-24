import './Promo.css'
import {Link} from "react-scroll";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text">
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб&#8209;разработки.
                    </h1>
                    <p className="promo__description">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                    <Link className="promo__link" to="project">Узнать больше</Link>
                </div>
            </div>

        </section>
    )
}

export default Promo