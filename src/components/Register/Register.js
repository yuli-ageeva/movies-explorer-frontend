import './Register.css'
import LoginForm from "../LoginForm/LoginForm";

function Register() {
  return (
    <LoginForm title={'Добро пожаловать!'}
               buttonName={'Зарегистрироваться'}
               spanName={'Уже зарегистрированы?'}
               spanLink={'Войти'}
               linkWay={'/signin'}
               showNameField={true}
    ></LoginForm>

  )
}

export default Register