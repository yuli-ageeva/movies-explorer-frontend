import './LoginForm.css'
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function LoginForm({title, buttonName, spanName, spanLink, linkWay, showNameField, onSubmit}) {
    const [errorMessage, setErrorMessage] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const loginFormRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(() => {
        const nameInputValidationMessage = nameInputRef.current && nameInputRef.current.validationMessage;
        if (formData.name !== "") {
            setErrorName(nameInputValidationMessage)
        }
        const emailInputValidationMessage = emailInputRef.current && emailInputRef.current.validationMessage;
        if (formData.email !== "") {
            setErrorEmail(emailInputValidationMessage)
        }
        const passwordInputValidationMessage = passwordInputRef.current && passwordInputRef.current.validationMessage;
        if (formData.password !== "") {
            setErrorPassword(passwordInputValidationMessage)
        }
        setSubmitButtonDisabled(!loginFormRef.current.checkValidity())
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData.name, formData.email, formData.password)
            .catch((err) => {
                setErrorMessage(err.message)
            })
    }

    return (
        <>
            <div className='login-form'>
                <Link className='login-form__logo' to='/'></Link>
                <h1 className='login-form__title'>{title}</h1>
                <form className='login-form__form' ref={loginFormRef} onSubmit={handleSubmit} noValidate>
                    <div className='login-form__form-items'>
                        {showNameField && (
                            <label className='login-form__field'>
                                <span className='login-form__field-name'>Имя</span>
                                <input className='login-form__input'
                                       type="text"
                                       name="name"
                                       pattern="[a-zA-Zа-яА-Я\s\-]*"
                                       placeholder="Ваше имя"
                                       ref={nameInputRef}
                                       minLength='2'
                                       maxLength='30'
                                       value={formData.name}
                                       onChange={handleChange}
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
                                   value={formData.email}
                                   onChange={handleChange}
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
                                   value={formData.password}
                                   onChange={handleChange}
                                   required>
                            </input>
                            <span className='login-form__field-error password-input-error'>{errorPassword}</span>
                        </label>
                    </div>
                    <div className='login-form__buttons'>
                        <span className='login-form__error'>{errorMessage}</span>
                        <button className='login-form__button' type='submit'
                                disabled={submitButtonDisabled}>{buttonName}</button>
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