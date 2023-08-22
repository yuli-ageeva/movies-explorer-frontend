import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile() {
  return (
    <>
      <Header></Header>
      <main>
        <section className='profile'>
          <h1 className='profile__title'>Привет, Юля!</h1>
          <form className='profile__form'>
            <label className='profile__info'>
              <span className='profile__info-description'>Имя</span>
              <input className='profile__info-input' id='name-input' type='text' name='name' minLength='2'
                     maxLength='30' placeholder='Имя'
                     defaultValue='Юля'
                     required/>
            </label>
            <label className='profile__info'>
              <span className='profile__info-description'>E-mail</span>
              <input className='profile__info-input' id='email-input' type='email' name='email' placeholder='Почта'
                     defaultValue='pochta@yandex.ru'
                     required/>
            </label>
            <button className='profile__link' type='submit'>Редактировать</button>
          </form>
          <Link className='profile__link-exit' to='/'>Выйти из аккаунта</Link>
        </section>
      </main>

    </>
  )
}

export default Profile