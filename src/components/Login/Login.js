import './Login.css'
import LoginForm from "../LoginForm/LoginForm";

function Login() {
  return (
    <section className='login'>
      <LoginForm title={'Рады видеть!'}
                 buttonName={'Войти'}
                 spanName={'Ещё не зарегистрированы?'}
                 spanLink={'Регистрация'}
                 linkWay={'/signup'}
      />
    </section>
  )
    ;
}

export default Login