import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function Profile({handleLogout, onUserUpdate}) {
    const currentUser = React.useContext(CurrentUserContext);
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: currentUser.name,
        email: currentUser.email,
    });

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

    const removeErrors = () => {
        setErrorMessage(null)
        setErrorName(null)
        setErrorEmail(null)
    }

    const enableEditing = (e) => {
        e.preventDefault()
        setIsEditing(true);
    };


    useEffect(() => {
        if (formData.name === currentUser.name && formData.email === currentUser.email) {
            setSubmitButtonDisabled(true)
        } else {
            setSubmitButtonDisabled(false)
        }
    }, [formData,currentUser])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleUpdateUser = (e) => {
        e.preventDefault()
        removeErrors()
        if (!validateNameInput()) {
            return;
        }
        if (!validateEmailInput()) {
            return;
        }
        onUserUpdate(formData.name, formData.email)
            .then(() => {
                setIsEditing(false)
            })
            .catch((err) => {
                setErrorMessage(err.message)
            })
    }


    return (
        <>
            <Header></Header>
            <main>
                <section className='profile'>
                    <h1 className='profile__title'>Привет,{currentUser.name}!</h1>
                    <form className='profile__form'>
                        <label className='profile__info'>
                            <div className='profile__info-box'>
                                <span className='profile__info-description'>Имя</span>
                                <input className='profile__info-input' id='name-input' type='text' name='name'
                                       minLength='2'
                                       maxLength='30' placeholder='Имя'
                                       ref={nameInputRef}
                                       value={formData.name}
                                       onChange={handleInputChange}
                                       required
                                       disabled={!isEditing}/>
                            </div>
                            <span className='profile__info-input-error profile-name-input-error'>{errorName}</span>
                        </label>
                        <label className='profile__info'>
                            <div className='profile__info-box'>
                                <span className='profile__info-description'>E-mail</span>
                                <input className='profile__info-input' id='email-input' type='email' name='email'
                                       placeholder='Почта'
                                       pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
                                       ref={emailInputRef}
                                       value={formData.email}
                                       onChange={handleInputChange}
                                       disabled={!isEditing}
                                       required/>
                            </div>
                            <span className='profile__info-input-error profile-email-input-error'>{errorEmail}</span>
                        </label>
                        <span className='profile__form-error'>{errorMessage}</span>
                        {isEditing
                            ? (<button className='profile__link profile__link-submit' type='submit'
                                       disabled={submitButtonDisabled}
                                       onClick={handleUpdateUser}>Сохранить</button>)
                            : (<button className='profile__link' type='button'
                                       onClick={enableEditing}>Редактировать</button>)}
                    </form>
                    {isEditing
                        ? ('')
                        : (<Link className='profile__link-exit' to='/' onClick={handleLogout}>Выйти из аккаунта</Link>)}
                </section>
            </main>

        </>
    )
}

export default Profile