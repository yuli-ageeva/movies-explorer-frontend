import './Login.css'
import LoginForm from "../LoginForm/LoginForm";
import {useState} from "react";

function Login({handleLogin}) {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        return handleLogin(formValue.email, formValue.password)
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
            <section className='login'>
                <LoginForm title={'Рады видеть!'}
                           buttonName={'Войти'}
                           spanName={'Ещё не зарегистрированы?'}
                           spanLink={'Регистрация'}
                           linkWay={'/signup'}
                           onChange={handleChange}
                           onSubmit={handleSubmit}
                           values={formValue}
                />
            </section>
        </main>
    )
        ;
}

export default Login