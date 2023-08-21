import './LoginForm.css'
import {Link} from "react-router-dom";

function LoginForm({title, buttonName, spanName, spanLink, linkWay, showNameField}) {
  return (
    <>
      <div className='login-form'>
        <Link className='login-form__logo' to='/'></Link>
        <h2 className='login-form__title'>{title}</h2>
        <form className='login-form__form'>
          {showNameField && (
            <label className='login-form__field'>
              <span className='login-form__field-name'>Имя</span>
              <input className='login-form__input' type="text" name="name" placeholder="Ваше имя" minLength='2'
                     maxLength='30' required/>
            </label>
          )}
          <label className='login-form__field'>
            <span className='login-form__field-name'>E-mail</span>
            <input className='login-form__input' id='email-input' type='email' name='E-mail' placeholder="Ваш E-mail"
                   required>
            </input>
          </label>
          <label className='login-form__field'>
            <span className='login-form__field-name'>Пароль</span>
            <input className='login-form__input' id='password-input' type='password' name='password'
                   placeholder="Ваш пароль" minLength='5' maxLength='10' required>
            </input>
            <span className='login-form__field-error'>Что-то пошло не так...</span>
          </label>
        </form>
        <div className='login-form__buttons'>
          <button className='login-form__button'>{buttonName}</button>
          <div className='login-form__button-description'>
            <span className='login-form__button-description-span'>{spanName}</span>
            <Link className='login-form__button-description-link' to={linkWay}>{spanLink}</Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default LoginForm