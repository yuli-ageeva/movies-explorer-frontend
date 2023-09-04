import './Login.css'
import LoginForm from "../LoginForm/LoginForm";

function Login({handleLogin}) {


    const handleSubmit = (name, email, password) => {
        return handleLogin(email, password)
    };

    return (
        <main>
            <section className='login'>
                <LoginForm title={'Рады видеть!'}
                           buttonName={'Войти'}
                           spanName={'Ещё не зарегистрированы?'}
                           spanLink={'Регистрация'}
                           linkWay={'/signup'}
                           onSubmit={handleSubmit}
                />
            </section>
        </main>
    )
        ;
}

export default Login