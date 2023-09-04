import './Register.css'
import LoginForm from "../LoginForm/LoginForm";

function Register({handleRegister}) {

    const handleSubmit = (name, email, password) => {
        return handleRegister(name, email,password)
    };

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
                ></LoginForm>
            </section>
        </main>
    )
}

export default Register
