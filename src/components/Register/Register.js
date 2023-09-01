import './Register.css'
import LoginForm from "../LoginForm/LoginForm";
import {useState} from "react";


function Register({handleRegister}) {

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        return handleRegister(formValue.name, formValue.email, formValue.password)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <main>
            <section className='register'>
                <LoginForm title={'Добро пожаловать!'}
                           buttonName={'Зарегистрироваться'}
                           spanName={'Уже зарегистрированы?'}
                           spanLink={'Войти'}
                           linkWay={'/signin'}
                           onSubmit={handleSubmit}
                           showNameField={true}
                           values={formValue}
                           onChange={handleChange}
                ></LoginForm>
            </section>
        </main>
    )
}

export default Register
