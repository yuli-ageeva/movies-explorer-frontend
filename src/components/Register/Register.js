import './Register.css'
import LoginForm from "../LoginForm/LoginForm";

function Register() {
  return (
    <main>
      <section className='register'>
        <LoginForm title={'Добро пожаловать!'}
                   buttonName={'Зарегистрироваться'}
                   spanName={'Уже зарегистрированы?'}
                   spanLink={'Войти'}
                   linkWay={'/signin'}
                   showNameField={true}
        ></LoginForm>
      </section>
    </main>
  )
}

export default Register