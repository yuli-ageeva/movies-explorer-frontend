import './LoginForm.css'
import {Link} from "react-router-dom";
import {useRef, useState} from "react";

function LoginForm({title, buttonName, spanName, spanLink, linkWay, showNameField, onSubmit, values, onChange}) {
    const [errorMessage, setErrorMessage] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const validateNameInput = () => {
        if (nameInputRef.current && nameInputRef.current.validationMessage) {
            setErrorName(nameInputRef.current.validationMessage)
            return false
        }
        return true
    }

    const validateEmailInput = () => {
        if (emailInputRef.current && emailInputRef.current.validationMessage) {
            setErrorEmail(emailInputRef.current.validationMessage)
            return false
        }
        return true
    }

    const validatePasswordInput = () => {
        if (passwordInputRef.current && passwordInputRef.current.validationMessage) {
            setErrorPassword(passwordInputRef.current.validationMessage)
            return false
        }
        return true
    }

    const removeErrors = ()  => {
        setErrorMessage(null)
        setErrorName(null)
        setErrorEmail(null)
        setErrorPassword(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        removeErrors()
        if (!validateNameInput()) {
            return;
        }
        if (!validateEmailInput()) {
            return;
        }
        if (!validatePasswordInput()) {
            return;
        }
        onSubmit()
            .catch((err) => {
                setErrorMessage(err.message)
            })
    }

    return (
        <>
            <div className='login-form'>
                <Link className='login-form__logo' to='/'></Link>
                <h1 className='login-form__title'>{title}</h1>
                <form className='login-form__form' onSubmit={handleSubmit} noValidate>
                    <div className='login-form__form-items'>
                        {showNameField && (
                            <label className='login-form__field'>
                                <span className='login-form__field-name'>Имя</span>
                                <input className='login-form__input'
                                       type="text"
                                       name="name"
                                       placeholder="Ваше имя"
                                       ref={nameInputRef}
                                       minLength='2'
                                       maxLength='30'
                                       value={values.name}
                                       onChange={onChange}
                                       required/>
                                <span className='login-form__field-error name-input-error'>{errorName}</span>
                            </label>
                        )}
                        <label className='login-form__field'>
                            <span className='login-form__field-name'>E-mail</span>
                            <input className='login-form__input'
                                   id='email-input'
                                   type="email"
                                   name="email"
                                   pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
                                   placeholder="Ваш E-mail"
                                   ref={emailInputRef}
                                   value={values.email}
                                   onChange={onChange}
                                   required/>
                            <span className='login-form__field-error email-input-error'>{errorEmail}</span>
                        </label>
                        <label className='login-form__field'>
                            <span className='login-form__field-name'>Пароль</span>
                            <input className='login-form__input'
                                   id='password-input'
                                   type='password'
                                   name='password'
                                   placeholder="Ваш пароль"
                                   ref={passwordInputRef}
                                   minLength='5'
                                   maxLength='10'
                                   value={values.password}
                                   onChange={onChange}
                                   required>
                            </input>
                            <span className='login-form__field-error password-input-error'>{errorPassword}</span>
                        </label>
                    </div>
                    <div className='login-form__buttons'>
                        <span className='login-form__error'>{errorMessage}</span>
                        <button className='login-form__button' type='submit'>{buttonName}</button>
                        <div className='login-form__button-description'>
                            <span className='login-form__button-description-span'>{spanName}</span>
                            <Link className='login-form__button-description-link' to={linkWay}>{spanLink}</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default LoginForm