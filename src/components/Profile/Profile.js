import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile() {
  return (
    <>
      <Header></Header>
      <main>
        <section className='profile'>
          <h2 className='profile__title'>Привет, Юля!</h2>
          <form className='profile__form'>
            <label className='profile__info'>
              <span className='profile__info-description'>Имя</span>
              <input className='profile__info-input' id='name-input' type='text' name='name' placeholder='Имя'
                     value='Юля'
                     required/>
            </label>
            <label className='profile__info'>
              <span className='profile__info-description'>E-mail</span>
              <input className='profile__info-input' id='email-input' type='email' name='email' placeholder='Почта'
                     value='pochta@yandex.ru'
                     required/>
            </label>
          </form>
          <div className='profile__links'>
            <button className='profile__link'>Редактировать</button>
            <Link className='profile__link profile__link-exit' to='/'>Выйти из аккаунта</Link>
          </div>
        </section>
      </main>

    </>
  )
}

export default Profile