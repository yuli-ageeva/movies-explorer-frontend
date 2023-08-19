import './Login.css'
import LoginForm from "../LoginForm/LoginForm";

function Login() {
  return (
    <LoginForm title={'Рады видеть!'}
               buttonName={'Войти'}
               spanName={'Ещё не зарегистрированы?'}
               spanLink={'Регистрация'}
               linkWay={'/signup'}
    />
  )
    ;
}

export default Login